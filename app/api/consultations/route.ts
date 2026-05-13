import { NextRequest, NextResponse } from "next/server";
import { insertConsultationSchema } from "@shared/schema";
import { z } from "zod";
import { randomUUID } from "crypto";

const consultations: Array<{
  id: string;
  name: string;
  email: string;
  company: string;
  service: string;
  budget: string;
  message: string | null;
  createdAt: string;
}> = [];

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const data = insertConsultationSchema.parse(body);
    const consultation = {
      ...data,
      id: randomUUID(),
      message: data.message ?? null,
      createdAt: new Date().toISOString(),
    };
    consultations.push(consultation);
    return NextResponse.json(consultation, { status: 201 });
  } catch (err) {
    if (err instanceof z.ZodError) {
      return NextResponse.json(
        { error: "Validation failed", details: err.errors },
        { status: 400 }
      );
    }
    return NextResponse.json(
      { error: "Failed to submit consultation" },
      { status: 500 }
    );
  }
}
