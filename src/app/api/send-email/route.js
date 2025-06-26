import { NextResponse } from "next/server";
import { Resend } from "resend";
const resend = new Resend(process.env.RESEND_API_KEY);
export async function POST(request) {
  const { name, phone, message } = await request.json();
  await resend.emails.send({
    from: "no-reply@rentos.com.ua",
    to: "rentos.ua@gmail.com",
    subject: `Нове заявка з сайту від ${name}`,
    html: `<p>Ім'я: ${name}</p><p>Телефон: ${phone}</p><p>Повідомлення: ${message}</p>`,
  });
  return NextResponse.json({ success: true });
}
