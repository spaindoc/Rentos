import { NextResponse } from "next/server";
import { Resend } from "resend";
const resend = new Resend(process.env.RESEND_API_KEY);
export async function POST(request) {
  const { name, phone, message } = await request.json();
  await resend.emails.send({
    from: "you@domain.com",
    to: "support@domain.com",
    subject: `Новое сообщение от ${name}`,
    html: `<p>Имя: ${name}</p><p>Телефон: ${phone}</p><p>Сообщение: ${message}</p>`,
  });
  return NextResponse.json({ success: true });
}
