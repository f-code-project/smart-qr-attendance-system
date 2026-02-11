import { useRoutes } from 'react-router';
// import { protectedRoutes } from './protected';
import { publicRoutes } from './public';

export default function AppRouter() {
  // Senior có thể thêm logic check role ở đây để merge các mảng route lại
  const commonRoutes = [{ path: '/', children: [] }];

  // Kết hợp tất cả các mảng route
  const element = useRoutes([...publicRoutes]);

  return element;
}
