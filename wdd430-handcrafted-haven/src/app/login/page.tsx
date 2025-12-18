'use client';

import { useState } from 'react';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  // Mock users (must match backend)
  const mockUsers = [
    { email: 'user@example.com', password: 'password123', name: 'Test User' },
    { email: 'admin@example.com', password: 'admin123', name: 'Admin User' },
    { email: 'guest@example.com', password: 'guest123', name: 'Guest User' }
  ];

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();

    // Check against mock users
    const user = mockUsers.find(u => u.email === email && u.password === password);

    if (user) {
      setMessage(`Login successful! Welcome, ${user.name}`);
      console.log('Logged in user:', user);
      // You can save to localStorage for cart/auth simulation
      localStorage.setItem('user', JSON.stringify(user));
    } else {
      setMessage('Invalid email or password');
    }
  };

  // Optional: buttons to autofill mock credentials for testing
  const autofill = (user: typeof mockUsers[0]) => {
    setEmail(user.email);
    setPassword(user.password);
  };

  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={handleLogin}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={e => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={e => setPassword(e.target.value)}
        />
        <button type="submit">Login</button>
      </form>
      <p>{message}</p>

      <div style={{ marginTop: '1rem' }}>
        <p>Test Users:</p>
        {mockUsers.map((u, i) => (
          <button key={i} onClick={() => autofill(u)}>
            {u.name}
          </button>
        ))}
      </div>
    </div>
  );
}
