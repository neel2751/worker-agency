import { NextResponse } from "next/server"
import { newsletterSchema } from "@/schemas/newsletter.schema"

export async function POST(req: Request) {
  try {
    const body = await req.json()
    
    const validatedData = newsletterSchema.parse(body)
    
    console.log("Newsletter subscription:", validatedData)
    
    return NextResponse.json(
      { message: "Subscribed successfully." },
      { status: 200 }
    )
  } catch (error) {
    console.error("Newsletter API Error:", error)
    return NextResponse.json(
      { error: "Invalid request data." },
      { status: 400 }
    )
  }
}
