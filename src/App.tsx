import {createBrowserRouter, RouterProvider, Navigate} from 'react-router-dom';
import {MainLayout} from './pages/MainLayout'; // 🚀 引入剛寫好的外殼
import {Home} from './pages/Home';
import {Settings} from './pages/Settings'; 
import {Error404} from './pages/404';

const router = createBrowserRouter([{
    path: '/',
    element: <MainLayout />, // 🚀 外殼套在這裡
    children: [{
        path: '', // 當網址是 / 時，自動導向 /home
        element: <Navigate to="/home" replace />,
      }, {
        path: 'home', // 網址會自動組合成 /home
        element: <Home />,
      }, {
        path: 'settings', // 網址會自動組合成 /settings
        element: <Settings />,
      }, {
        path: "*",
        element: <Error404 />
      }
    ],
  },
]);

export default function App() {
    return <RouterProvider router={router} />;
}