const express = require("express");
const nodemailer = require("nodemailer");
const { ContactMessage } = require("../models");

const {
  EMAIL_HOST,
  EMAIL_PORT,
  EMAIL_USER,
  EMAIL_PASS,
  CONTACT_EMAIL_TO,
} = process.env;

const transporter = nodemailer.createTransport({
  host: EMAIL_HOST,
  port: Number(EMAIL_PORT || 587),
  secure: Number(EMAIL_PORT) === 465,
  auth: {
    user: EMAIL_USER,
    pass: EMAIL_PASS,
  },
});

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const messages = await ContactMessage.findAll({ order: [["createdAt", "DESC"]] });
    res.json(messages);
  } catch (error) {
    res.status(500).json({ error: "Unable to load contact messages." });
  }
});

router.post("/", async (req, res) => {
  try {
    const { name, email, message } = req.body;
    if (!name || !email || !message) {
      return res.status(400).json({ error: "Name, email, and message are required." });
    }

    const contactMessage = await ContactMessage.create({ name, email, message });

    let emailSent = false;
    let responseMessage = "Message saved successfully.";
    let emailError = null;

    if (EMAIL_HOST && EMAIL_USER && EMAIL_PASS) {
      const mailOptions = {
        from: `Portfolio Contact <${EMAIL_USER}>`,
        to: CONTACT_EMAIL_TO || EMAIL_USER,
        subject: `New contact message from ${name}`,
        text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
        html: `
          <h2>New contact message</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Message:</strong></p>
          <p>${message.replace(/\n/g, "<br />")}</p>
        `,
      };

      try {
        await transporter.sendMail(mailOptions);
        emailSent = true;
        responseMessage = "Message saved and email notification sent.";
      } catch (mailError) {
        console.error("Email send error:", mailError);
        emailError = mailError.message || "Unable to send email notification.";
        responseMessage = "Message saved, but email notification could not be delivered.";
      }
    } else {
      responseMessage = "Message saved, but email notifications are not configured.";
    }

    res.status(201).json({
      contactMessage,
      emailSent,
      emailError,
      message: responseMessage,
    });
  } catch (error) {
    res.status(500).json({ error: "Unable to save contact message." });
  }
});

module.exports = router;
