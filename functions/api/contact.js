export async function onRequestPost({ request, env }) {
  const headers = request.headers.get("Content-Type");

  let name, phone, email, city, appliance, brand, issue, preferredTime;

  if (headers.includes("application/x-www-form-urlencoded")) {
    const formData = new URLSearchParams(await request.text());
    name = formData.get("name");
    phone = formData.get("phone");
    email = formData.get("email");
    city = formData.get("city");
    appliance = formData.get("appliance");
    brand = formData.get("brand");
    issue = formData.get("issue");
    preferredTime = formData.get("preferred-time");
  } else if (headers.includes("application/json")) {
    const body = await request.json();
    name = body.name;
    phone = body.phone;
    email = body.email;
    city = body.city;
    appliance = body.appliance;
    brand = body.brand;
    issue = body.issue;
    preferredTime = body["preferred-time"];
  }

  if (!name || !phone || !email || !city || !appliance || !issue) {
    return new Response("Missing required fields", { status: 400 });
  }

  const htmlBody = `
    <h2>New Contact Form Submission</h2>
    <p><strong>Name:</strong> ${escapeHtml(name)}</p>
    <p><strong>Phone:</strong> ${escapeHtml(phone)}</p>
    <p><strong>Email:</strong> ${escapeHtml(email)}</p>
    <p><strong>City:</strong> ${escapeHtml(city)}</p>
    <p><strong>Appliance:</strong> ${escapeHtml(appliance)}</p>
    <p><strong>Brand:</strong> ${escapeHtml(brand || "Not specified")}</p>
    <p><strong>Preferred Contact Time:</strong> ${escapeHtml(preferredTime || "Not specified")}</p>
    <p><strong>Problem:</strong><br>${escapeHtml(issue).replace(/\n/g, "<br>")}</p>
  `;

  try {
    const resendRes = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${env.RESEND_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: "Prime Appliance Repair <contact@primerepair.net>",
        to: ["contact@primerepair.net"],
        subject: `New Repair Request from ${escapeHtml(name)} - ${escapeHtml(appliance)}`,
        html: htmlBody,
      }),
    });

    if (!resendRes.ok) {
      const err = await resendRes.text();
      console.error("Resend error:", err);
      return new Response("Failed to send email", { status: 500 });
    }

    return Response.redirect(new URL("/success", request.url), 302);
  } catch (err) {
    console.error("Worker error:", err);
    return new Response("Server error", { status: 500 });
  }
}

function escapeHtml(str) {
  if (!str) return "";
  return String(str)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}
