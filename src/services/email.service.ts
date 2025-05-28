import nodemailer from "nodemailer";
import { env } from "../config/env";

const transporter = nodemailer.createTransport({
  host: env.SMTP_HOST,
  port: Number(env.SMTP_PORT),
  secure: true, // true para 465, false para outras portas
  auth: {
    user: env.SMTP_USER,
    pass: env.SMTP_PASS,
  },
});

export const sendEmail = async (to: string, subject: string, text: string) => {
  try {
    await transporter.sendMail({
      from: `"SecureCrm" <${env.SMTP_USER}>`,
      to,
      subject,
      text,
    });
  } catch (error) {
    console.error("Erro ao enviar e-mail:", error);
    throw new Error("Erro ao enviar e-mail");
  }
};
