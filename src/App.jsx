import { useState } from 'react';

function App() {
  const [nim, setNim] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    alert(`Login sebagai: ${nim}`);
  };

  return (
    <div style={{
      minHeight: '100vh',
      background: '#0f172a',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontFamily: 'sans-serif',
    }}>
      <div style={{
        background: '#1e293b',
        padding: '40px',
        borderRadius: '12px',
        width: '100%',
        maxWidth: '380px',
        boxShadow: '0 20px 60px rgba(0,0,0,0.4)',
      }}>
        <div style={{ textAlign: 'center', marginBottom: '32px' }}>
          <div style={{
            width: 48, height: 48, borderRadius: 12,
            background: 'linear-gradient(135deg, #6366f1, #8b5cf6)',
            display: 'inline-flex', alignItems: 'center',
            justifyContent: 'center', fontSize: 22, marginBottom: 12,
          }}>📚</div>
          <h1 style={{ color: '#f1f5f9', fontSize: 20, margin: 0, fontWeight: 700 }}>
            LMS Pribadi
          </h1>
          <p style={{ color: '#64748b', fontSize: 13, marginTop: 6 }}>
            Masuk ke akun Anda
          </p>
        </div>

        <form onSubmit={handleLogin}>
          <div style={{ marginBottom: 16 }}>
            <label style={{ color: '#94a3b8', fontSize: 12, display: 'block', marginBottom: 6 }}>
              NIM / NIP
            </label>
            <input
              type="text"
              value={nim}
              onChange={e => setNim(e.target.value)}
              placeholder="Masukkan NIM atau NIP"
              style={{
                width: '100%', padding: '10px 14px',
                background: '#0f172a', border: '1px solid #334155',
                borderRadius: 8, color: '#f1f5f9', fontSize: 14,
                outline: 'none', boxSizing: 'border-box',
              }}
            />
          </div>

          <div style={{ marginBottom: 24 }}>
            <label style={{ color: '#94a3b8', fontSize: 12, display: 'block', marginBottom: 6 }}>
              Password
            </label>
            <input
              type="password"
              value={password}
              onChange={e => setPassword(e.target.value)}
              placeholder="Masukkan password"
              style={{
                width: '100%', padding: '10px 14px',
                background: '#0f172a', border: '1px solid #334155',
                borderRadius: 8, color: '#f1f5f9', fontSize: 14,
                outline: 'none', boxSizing: 'border-box',
              }}
            />
          </div>

          <button type="submit" style={{
            width: '100%', padding: '12px',
            background: 'linear-gradient(135deg, #6366f1, #8b5cf6)',
            border: 'none', borderRadius: 8,
            color: '#fff', fontSize: 14, fontWeight: 600,
            cursor: 'pointer',
          }}>
            Masuk
          </button>
        </form>
      </div>
    </div>
  );
}

export default App;
