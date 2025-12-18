'use client';

import { useEffect, useState } from 'react';

export default function SellPage() {
  const [user, setUser] = useState<{ name: string } | null>(null);

  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) setUser(JSON.parse(storedUser));
  }, []);

  if (!user) {
    return (
      <div>
        <h1>Sell Page</h1>
        <p>Ready to list your first item?</p>
        <p><a href="/signup">Create an account</a></p>
      </div>
    );
  }

  return (
    <div>
      <h1>Sell Page</h1>
      <p>Welcome, {user.name}! List your items below:</p>
      {/* Add your sell form here */}
    </div>
  );
}

