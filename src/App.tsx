import { createBrowserRouter, RouterProvider, Navigate } from 'react-router-dom';
import { MainLayout } from './pages/MainLayout'; // 🚀 引入剛寫好的外殼
import { Home } from './pages/Home';
import { Settings } from './pages/Settings';
import { Error404 } from './pages/404';

const router = createBrowserRouter([{
        path: '/',
        element: <MainLayout />,
        children: [{
            path: '',
            element: <Navigate to="/home" replace />,
        }, {
            path: 'home',
            element: <Home />,
        }, {
            path: 'settings',
            element: <Settings />,
        }, {
            path: "*",
            element: <Error404 />
        }],
    }, {
        path: '*',
        element: <Navigate to="home" replace />,
    },
], {
  basename: '/FlashRec'
});


export default function App() {
    return <RouterProvider router={router} />;
}