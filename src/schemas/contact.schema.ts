import * as z from "zod";

export const contactSchema = z.object({
  firstName: z.string().min(1, "First name is required"),
  lastName: z.string().min(1, "Last name is required"),
  email: z.string().email("Invalid email address"),
  company: z.string().optional(),
  phone: z.string().optional(),
  interest: z.string(),
  message: z.string().min(10, "Message must be at least 10 characters").max(1000, "Message must be under 1000 characters"),
});

export type ContactFormData = z.infer<typeof contactSchema>;
