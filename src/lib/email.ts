import { SITE_CONFIG } from "@/config/site"
import { CONTACT_EMAIL } from "./constants"

interface EmailMessage {
  to: string
  from?: string
  subject: string
  html: string
  text?: string
  replyTo?: string
}

interface ContactFormData {
  name: string
  email: string
  company?: string
  phone?: string
  serviceInterest?: string
  message: string
}

export async function sendEmail(message: EmailMessage): Promise<{ success: boolean; error?: string }> {
  if (process.env.NODE_ENV === "development") {
    console.log("[Email] Would send:", message)
    return { success: true }
  }

  return { success: true }
}

export async function sendContactNotification(data: ContactFormData): Promise<{ success: boolean; error?: string }> {
  const subject = `New Contact Form Submission from ${data.name}`
  
  const html = `
    <h2>New Contact Form Submission</h2>
    <p><strong>Name:</strong> ${data.name}</p>
    <p><strong>Email:</strong> ${data.email}</p>
    ${data.company ? `<p><strong>Company:</strong> ${data.company}</p>` : ""}
    ${data.phone ? `<p><strong>Phone:</strong> ${data.phone}</p>` : ""}
    ${data.serviceInterest ? `<p><strong>Service Interest:</strong> ${data.serviceInterest}</p>` : ""}
    <p><strong>Message:</strong></p>
    <p>${data.message.replace(/\n/g, "<br>")}</p>
  `

  const text = `
New Contact Form Submission

Name: ${data.name}
Email: ${data.email}
${data.company ? `Company: ${data.company}\n` : ""}${data.phone ? `Phone: ${data.phone}\n` : ""}${data.serviceInterest ? `Service Interest: ${data.serviceInterest}\n` : ""}
Message:
${data.message}
  `.trim()

  return sendEmail({
    to: CONTACT_EMAIL,
    subject,
    html,
    text,
    replyTo: data.email,
  })
}

export async function sendNewsletterConfirmation(email: string): Promise<{ success: boolean; error?: string }> {
  const subject = `Welcome to ${SITE_CONFIG.name} Newsletter`
  
  const html = `
    <h2>Welcome to Our Newsletter</h2>
    <p>Thank you for subscribing to updates from ${SITE_CONFIG.name}.</p>
    <p>You'll receive our latest insights on Workday integrations, best practices, and industry news.</p>
    <br>
    <p>Best regards,<br>The ${SITE_CONFIG.name} Team</p>
  `

  const text = `
Welcome to Our Newsletter

Thank you for subscribing to updates from ${SITE_CONFIG.name}.

You'll receive our latest insights on Workday integrations, best practices, and industry news.

Best regards,
The ${SITE_CONFIG.name} Team
  `.trim()

  return sendEmail({
    to: email,
    subject,
    html,
    text,
    from: CONTACT_EMAIL,
  })
}

export async function sendCareerApplicationConfirmation(
  email: string,
  roleTitle: string
): Promise<{ success: boolean; error?: string }> {
  const subject = `Application Received - ${roleTitle}`
  
  const html = `
    <h2>Thank You for Your Application</h2>
    <p>We have received your application for the <strong>${roleTitle}</strong> position.</p>
    <p>Our team will review your application and contact you if there's a potential match.</p>
    <br>
    <p>Best regards,<br>The ${SITE_CONFIG.name} HR Team</p>
  `

  const text = `
Thank You for Your Application

We have received your application for the ${roleTitle} position.

Our team will review your application and contact you if there's a potential match.

Best regards,
The ${SITE_CONFIG.name} HR Team
  `.trim()

  return sendEmail({
    to: email,
    subject,
    html,
    text,
    from: CONTACT_EMAIL,
  })
}
