"use server";

import nodemailer from "nodemailer";

export async function sendEmail(myEmail: string, form: FormData) {
  const transporter = nodemailer.createTransport({
    host: "live.smtp.mailtrap.io",
    port: 587,
    secure: false,
    auth: {
      user: "api",
      pass: process.env.CONTACT_EMAIL_PASSWORD,
    },
  });

  const info = await transporter.sendMail({
    from: `"${form.get("name")}" <${process.env.CONTACT_EMAIL}>`,
    to: myEmail,
    ...formatMessage(form),
  });
  transporter.close();

  console.log({ info });
}

function formatMessage(form: FormData) {
  return {
    subject: form.get("subject")?.toString(),
    html: `<h1>${form.get("name")}</h1>
    <h2>\<${form.get("email")}\></h2>
    <h3>${form.get("message")}</h3>`,
  };
}
