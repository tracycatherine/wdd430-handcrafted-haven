import { NextRequest, NextResponse } from "next/server";
import { connectToDatabase } from "@/utils/db";
import { verifyPassword } from "@/utils/auth";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { email, password } = body;
    if (!email || !password) return NextResponse.json({ error: "Missing fields" }, { status: 400 });

    const db = await connectToDatabase();
    const users = db.collection("users");

    const user = await users.findOne({ email });
    if (!user) return NextResponse.json({ error: "Invalid credentials" }, { status: 401 });

    const ok = await verifyPassword(password, user.password);
    if (!ok) return NextResponse.json({ error: "Invalid credentials" }, { status: 401 });

    // For now return a simple success. Later replace with a JWT or session.
    return NextResponse.json({ ok: true, userId: user._id.toString() }, { status: 200 });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
