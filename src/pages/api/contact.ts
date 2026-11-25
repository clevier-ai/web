import type { APIRoute } from "astro";
import { env } from "cloudflare:workers";

export const prerender = false;

const TO = ["mfernandez@clevier.ai", "jrosell@clevier.ai"];
// Remitente: debe ser un dominio verificado en Resend.
const FROM = "Clevier Web <web@clevier.ai>";

const esc = (s: string) =>
  s.replace(/[&<>"']/g, (c) => `&#${c.charCodeAt(0)};`);

export const POST: APIRoute = async ({ request }) => {
  const data = await request.formData();
  const get = (k: string) => String(data.get(k) ?? "").trim();

  // Honeypot: los bots lo rellenan; fingimos éxito.
  if (get("website")) return new Response(null, { status: 204 });

  const name = get("name").slice(0, 120);
  const email = get("email").slice(0, 200);
  const message = get("message").slice(0, 5000);

  if (!name || !message || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return new Response("Invalid", { status: 400 });
  }

  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${env.RESEND_API_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: FROM,
      to: TO,
      reply_to: email,
      subject: `Contacto web: ${name}`,
      text: `Nombre: ${name}\nCorreo: ${email}\n\n${message}`,
      html: `<p><b>Nombre:</b> ${esc(name)}<br><b>Correo:</b> ${esc(email)}</p><p>${esc(message).replace(/\n/g, "<br>")}</p>`,
    }),
  });

  if (!res.ok) {
    console.error("Resend error", res.status, await res.text());
    return new Response("Error", { status: 502 });
  }
  return new Response(null, { status: 204 });
};
