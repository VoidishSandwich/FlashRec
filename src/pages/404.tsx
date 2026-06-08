import type React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export function Error404() {
    const navigate = useNavigate();

    const [isHovered, setIsHovered] = useState(false);
    const ButtonStyle = {
        padding: '8px 25px',
        borderRadius: '25px',
        border: 'none',
        
        fontSize: '14px',
        fontWeight: 'bold',

        cursor: 'pointer',
        
        backgroundColor: isHovered ? '#0c6792da' : '#125f93',
        color: '#fff',
        
        transform: isHovered ? 'scale(1.05)' : 'scale(1)',
        boxShadow: isHovered 
        ? '0 6px 20px rgba(79, 195, 247, 0.4)' 
        : '0 4px 12px rgba(0, 122, 204, 0.3)',
        
        transition: 'all 0.2s ease',
    } as React.CSSProperties

    return (
        <div style={{ textAlign: 'center', marginTop: '100px' }}>
            <h1 style={{fontSize: '30px', color: '#fff'}}>Oops.. There is nothing here! (oi)</h1>
            <button 
                style = {ButtonStyle}
                onClick={function(){
                    navigate('/home')
                }}
                onMouseEnter={()=>setIsHovered(true)}
                onMouseLeave={()=>setIsHovered(false)}>
                Home
            </button>
        </div>
    );
}