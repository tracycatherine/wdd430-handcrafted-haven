
"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setLoading(true);
    try {
      const res = await fetch("/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });
      const data = await res.json();
      if (!res.ok) {
        setError(data.error || "Login failed");
        return;
      }
      // On success, redirect to dashboard
      router.push("/dashboard");
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : String(err);
      setError(msg || "Network error");
    } finally {
      setLoading(false);
    }
  };

  // Note: signup now handled on a dedicated /signup page; login button only submits form.

  return (
    <div className="page-center">
      <form onSubmit={handleSubmit} className="card-form">
        <h2 className="form-title">Login</h2>
        <div className="form-group">
          <label className="label">Email</label>
          <input
            type="email"
            className="input"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label className="label">Password</label>
          <input
            type="password"
            className="input"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="btn-primary" disabled={loading}>
          {loading ? (
            <span style={{display: 'inline-flex', alignItems: 'center', gap: '0.5rem'}}>
              <span className="spinner" aria-hidden="true" />
              Logging in...
            </span>
          ) : (
            'Login'
          )}
        </button>
        <Link href="/signup">
          <button type="button" className="btn-secondary">Sign up</button>
        </Link>
        {error && <p className="msg">{error}</p>}
      </form>
    </div>
  );
}
