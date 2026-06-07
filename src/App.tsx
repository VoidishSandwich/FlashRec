import { createBrowserRouter, RouterProvider, Navigate } from 'react-router-dom';
import { MainLayout } from './pages/MainLayout'; // 🚀 引入剛寫好的外殼
import { Home } from './pages/Home';
import { Settings } from './pages/Settings';
import { Error404 } from './pages/404';

const router = createBrowserRouter([{
        path: '/',
        element: <MainLayout />,
        children: [{
                path: '', // 使用者一進到 /FlashRec/ 起點
                element: <Navigate to="/home" replace />, // 瞬間推進到 /home
        }, {
            path: 'home',
            element: <Home />,
        }, {
            path: 'settings',
            element: <Settings />,
        }, {
            path: '*',
            element: <Error404 />,
        }]},
], {
    basename: '/FlashRec' // 100% 鎖定專案子路徑
});

export default function App() {
    return <RouterProvider router={router} />;
}