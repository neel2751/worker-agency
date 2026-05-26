import { NextResponse } from "next/server"

export async function POST(req: Request) {
  try {

    const formData = await req.formData()
    
    const name = formData.get('name')
    const email = formData.get('email')
    const role = formData.get('role')
    const resume = formData.get('resume')

    if (!name || !email || !role) {
      return NextResponse.json(
        { error: "Missing required fields." },
        { status: 400 }
      )
    }

    console.log("Job Application Received:", { name, email, role, resumeName: (resume as File)?.name })
    
    return NextResponse.json(
      { message: "Application submitted successfully." },
      { status: 200 }
    )
  } catch (error) {
    console.error("Careers API Error:", error)
    return NextResponse.json(
      { error: "Failed to submit application." },
      { status: 500 }
    )
  }
}
