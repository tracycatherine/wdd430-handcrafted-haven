import { NextRequest, NextResponse } from "next/server";
import { connectToDatabase } from "@/utils/db";
import { hashPassword } from "@/utils/auth";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { email, password } = body;
    if (!email || !password) return NextResponse.json({ error: "Missing fields" }, { status: 400 });

    const db = await connectToDatabase();
    const users = db.collection("users");

    const existing = await users.findOne({ email });
    if (existing) return NextResponse.json({ error: "User exists" }, { status: 409 });

    const hashed = await hashPassword(password);
    const res = await users.insertOne({ email, password: hashed, createdAt: new Date() });

    return NextResponse.json({ insertedId: res.insertedId.toString() }, { status: 201 });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
