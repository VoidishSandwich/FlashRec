import { useNavigate } from 'react-router-dom';

export function Home() {
    const navigate = useNavigate();
    return (
        <div style={{ textAlign: 'center', marginTop: '100px', color: '#fff'}}>
            <h1>這是首頁</h1>
            <button 
                onClick={
                function(){ 
                    navigate('/settings')
                }}
                style={{color: '#fff'}}>
                前往設定 (hi)
            </button>
        </div>
    );
}