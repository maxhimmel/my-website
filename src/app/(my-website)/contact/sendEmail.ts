"use server";

import nodemailer from "nodemailer";

export type Result = {
  sent: boolean;
};

export async function sendEmail(myEmail: string, prevState: Result, form: FormData): Promise<Result> {
  try {
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

    if (info.accepted) {
      return { sent: true };
    } else {
      throw new Error(info.response);
    }
  } catch (err) {
    console.error(err);
    return { sent: false };
  }
}

function formatMessage(form: FormData) {
  return {
    subject: form.get("subject")?.toString(),
    html: `<h1>${form.get("name")}</h1>
    <h2>\<${form.get("email")}\></h2>
    <h3>${form.get("message")}</h3>`,
  };
}
