import { useNavigate } from 'react-router-dom';

export function Settings() {
    const navigate = useNavigate();

    // data scraping here
    // data scraping end

    return (
        <div style={{ textAlign: 'center', marginTop: '100px', color: '#fff' }}>
            <h1>這是設定頁 (oi)</h1>
            <button style={{color: '#fff'}} onClick={() => navigate('/home')}>
                返回首頁
            </button>
        </div>
    );
}