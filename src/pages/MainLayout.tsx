// src/pages/MainLayout.tsx
import type React from 'react';
import { useState } from 'react';
import { Outlet, useNavigate, useLocation } from 'react-router-dom';

import flashcardIcon from '../assets/FlashcardIcon.png';

export function MainLayout() {
    const navigate = useNavigate();
    const location = useLocation(); // 🚀 拿來辨識目前在哪一頁，可以做按鈕高亮效果

    // 簡單的樣式設定
    const navStyle: React.CSSProperties = {
        gap: '12px',              
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '0 30px',
        backgroundColor: '#1e1e24',
        color: '#fff',
        height: '60px',
        fontFamily: 'sans-serif',
        boxShadow: '0 4px 20px rgba(255, 255, 255, 0.125)',//'0 2px 50px rgba(0,0,0,0.3)',

        position: 'sticky',
        top: 0,
        zIndex: 1000, 
    };

    const [isHovered, setIsHovered] = useState(false);
    const linkStyle = (path: string): React.CSSProperties => ({
        background: 'none',
        border: 'none',
        color: location.pathname === path ? '#4fc3f7' : '#fff', // 🚀 目前頁面字體變藍色
        fontSize: '16px',
        cursor: 'pointer',
        position: 'relative',
        left: location.pathname === path ? '2px' : '0px',
        marginLeft: location.pathname === path ? '16px' : '20px',
        fontWeight: location.pathname === path ? 'bold' : 'normal',
        transition: 'color 0.2s',
    });

    const loginBtnStyle: React.CSSProperties = {
        padding: '6px 16px',
        borderRadius: '25px',
        border: 'none',
        marginLeft: '20px',
        
        fontSize: '13px',
        fontWeight: 'bold',

        cursor: 'pointer',
        
        backgroundColor: isHovered ? '#0c6792da' : '#125f93',
        color: '#fff',
        
        transform: isHovered ? 'scale(1.1)' : 'scale(1)',
        boxShadow: isHovered 
        ? '0 5px 16px rgba(79, 195, 247, 0.4)' 
        : '0 4px 12px rgba(0, 122, 204, 0.3)',
        
        transition: 'all 0.2s ease',
    }

    return (
        <div>
            <nav style={navStyle}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '16px', height: '100%' }}>
                    <img 
                        src={flashcardIcon} 
                        style={{ 
                            height: '65%', 
                            aspectRatio: '1 / 1', 
                            objectFit: 'contain'
                        }}
                        alt="FlashRec Logo"
                    />
                    <h2 style={{ margin: 0, cursor: 'pointer', fontSize: '20px' }} 
                        onClick={() => navigate('/home')}>
                        FlashRec
                    </h2>
                </div>
                
                <div>
                    <button style={linkStyle('/home')} onClick={() => navigate('/home')}>Home</button>
                    <button style={linkStyle('/settings')} onClick={() => navigate('/settings')}>Dashboard</button>
                    <button 
                        style={loginBtnStyle}
                        onClick={function(){
                            navigate('/home')
                        }}
                        onMouseEnter={()=>setIsHovered(true)}
                        onMouseLeave={()=>setIsHovered(false)}>
                        Sign up
                    </button>
                </div>
            </nav>

            {/* ⬇️ 下方區域 */}
            <main style={{ padding: '20px', fontFamily: 'sans-serif' }}>
                <Outlet />
            </main>
        </div>
    );
}
