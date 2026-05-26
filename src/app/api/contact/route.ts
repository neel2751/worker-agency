import { NextResponse } from "next/server"
import { contactSchema } from "@/schemas/contact.schema"

export async function POST(req: Request) {
  try {
    const body = await req.json()

    const validatedData = contactSchema.parse(body)
    
    console.log("Contact form submitted:", validatedData)
    
    return NextResponse.json(
      { message: "Inquiry received successfully." },
      { status: 200 }
    )
  } catch (error) {
    console.error("Contact API Error:", error)
    return NextResponse.json(
      { error: "Invalid request data." },
      { status: 400 }
    )
  }
}
