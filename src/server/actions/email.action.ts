"use server";
import { TContactForm } from "@/schemas/contact.schema";
import * as nodemailer from "nodemailer";
let transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

export async function sendMail({
  contact,
  description,
  email,
  subject,
  fullName,
}: TContactForm) {
  const to = "rozanpoudel@gmail.com";
  let mailOptions = {
    from: '"Message from Kaugmas" <info.metalogic@gmail.com>',
    to,
    subject,
    html: `<div style="width: 400px">
  <h1>A new message from website,</h1>
  <p>From, ${fullName}</p>
  <p>
  Phone : ${contact}
  Email : ${email}
  Message : ${description}
  </p>
</div>`,
  };

  // Send email
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error("Error occurred:", error.message);
      return;
    }
    console.log("------------------------------------------------------------");
    console.log(`Email sent successfully to ${email} !!`);
    console.log("Message ID:", info.messageId);
    console.log("------------------------------------------------------------");
  });
}
