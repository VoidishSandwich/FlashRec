// src/pages/MainLayout.tsx
import { Outlet, useNavigate, useLocation } from 'react-router-dom';

export function MainLayout() {
  const navigate = useNavigate();
  const location = useLocation(); // 🚀 拿來辨識目前在哪一頁，可以做按鈕高亮效果

  // 簡單的樣式設定
  const navStyle: React.CSSProperties = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '0 30px',
    backgroundColor: '#1e1e24',
    color: '#fff',
    height: '60px',
    fontFamily: 'sans-serif',
    boxShadow: '0 2px 8px rgba(0,0,0,0.15)'
  };

  const linkStyle = (path: string): React.CSSProperties => ({
    background: 'none',
    border: 'none',
    color: location.pathname === path ? '#4fc3f7' : '#fff', // 🚀 目前頁面字體變藍色
    fontSize: '16px',
    cursor: 'pointer',
    marginLeft: '20px',
    fontWeight: location.pathname === path ? 'bold' : 'normal',
    transition: 'color 0.2s'
  });

  return (
    <div>
      {/* 🌐 永遠固定在最頂端的 Topbar */}
      <nav style={navStyle}>
        <h2 style={{ margin: 0, cursor: 'pointer', fontSize: '20px' }} onClick={() => navigate('/home')}>
          ⚡ FlashRec
        </h2>
        <div>
          <button style={linkStyle('/home')} onClick={() => navigate('/home')}>首頁</button>
          <button style={linkStyle('/settings')} onClick={() => navigate('/settings')}>設定</button>
        </div>
      </nav>

      {/* ⬇️ 下方這個區域會根據網址，動態渲染出 Home 或 Settings 的內文 */}
      <main style={{ padding: '20px', fontFamily: 'sans-serif' }}>
        <Outlet />
      </main>
    </div>
  );
}
