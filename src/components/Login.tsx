import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import '../styles/login.css';

const Login: React.FC = () => {
  const { login } = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [remember, setRemember] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setError('Please enter a valid email address.');
      return;
    }

    if (password.length < 8) {
      setError('Password must be at least 8 characters long.');
      return;
    }

    const success = await login(email, password);
    if (!success) {
      setError('Invalid credentials.');
    }
  };

  return (
    <div className="container">
      <h1 className="title">Taskify</h1>
      <p className="subtitle">Sign in to your account</p>
      <p className="register-text">
        Or <a href="/register">register for a new account</a>
      </p>
      <form className="login-form" onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Email address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <div className="options">
          <label>
            <input
              type="checkbox"
              checked={remember}
              onChange={(e) => setRemember(e.target.checked)}
            />{' '}
            Remember me
          </label>
          <a href="/" className="forgot">Forgot your password?</a>
        </div>
        {error && <div className="error" style={{ color: 'red' }}>{error}</div>}
        <button type="submit">Sign in</button>
      </form>
    </div>
  );
};

export default Login;
