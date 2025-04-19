"use server";

import { sendContactUserEmail } from "@/utils/SendMessageMail";

export async function sendContactEmailAction({ name, email, message }) {
  if (!name || !email || !message) {
    throw new Error("All fields are required.");
  }

  try {
    const emailResponse = await sendContactUserEmail(name, email, message);
    return { success: true, emailResponse };
  } catch (error) {
    return { success: false, error: "Failed to send email." };
  }
}
