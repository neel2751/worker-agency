import { NextResponse } from "next/server"
import { WORKER_CATEGORIES } from "@/data/services"

export async function GET() {
  try {
    return NextResponse.json(WORKER_CATEGORIES, { status: 200 })
  } catch (error) {
    console.error("Services API Error:", error)
    return NextResponse.json(
      { error: "Failed to fetch services data." },
      { status: 500 }
    )
  }
}
