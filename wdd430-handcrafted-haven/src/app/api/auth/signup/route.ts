// src/app/api/auth/signup/route.ts
'use server';

export async function POST(req: Request) {
  const { name, email, password } = await req.json();

  // You can simulate creating a user by returning the submitted data
  const newUser = { name, email, password };

  return new Response(JSON.stringify({ message: 'Signup successful', user: newUser }), {
    status: 201,
    headers: { 'Content-Type': 'application/json' },
  });
}
