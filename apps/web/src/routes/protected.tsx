// import DashboardLayout from '@/layouts/DashboardLayout';
// import { lazy } from 'react';
// import { Navigate, Outlet } from 'react-router-dom';
// import Loadable from './Loadable';

// // Giả sử có một hook check auth
// const AuthGuard = () => {
//   const isAuth = !!localStorage.getItem('token'); // Thực tế dùng logic từ Store (Zustand/Redux)
//   return isAuth ? <Outlet /> : <Navigate to="/login" replace />;
// };

// const OrderPage = Loadable(lazy(() => import('@/pages/orders/order-list.page')));
// const ProfilePage = Loadable(lazy(() => import('@/pages/profile.page')));

// export const protectedRoutes = [
//   {
//     path: '/app',
//     element: <AuthGuard />, // "Hàng rào" bảo vệ
//     children: [
//       {
//         element: <DashboardLayout />, // Layout có Sidebar cho Dashboard
//         children: [
//           { path: 'orders', element: <OrderPage /> },
//           { path: 'profile', element: <ProfilePage /> },
//         ],
//       },
//     ],
//   },
// ];
