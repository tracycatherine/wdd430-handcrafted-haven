'use server';

export async function POST(req: Request) {
  const { email, password } = await req.json();

  // Array of mock users
  const mockUsers = [
    { email: 'user@example.com', password: 'password123', name: 'Test User' },
    { email: 'admin@example.com', password: 'admin123', name: 'Admin User' },
    { email: 'guest@example.com', password: 'guest123', name: 'Guest User' }
  ];

  // Find matching user
  const user = mockUsers.find(u => u.email === email && u.password === password);

  if (user) {
    return new Response(JSON.stringify({ message: 'Login successful', user }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } else {
    return new Response(JSON.stringify({ message: 'Invalid email or password' }), {
      status: 401,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}
