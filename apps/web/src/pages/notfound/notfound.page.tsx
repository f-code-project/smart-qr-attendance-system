import { AlertCircle, ArrowLeft, Home } from 'lucide-react';
import { Link, useNavigate } from 'react-router';
import TitlePage from '../../components/TitlePage';

const NotFoundPage = () => {
  const navigate = useNavigate();

  const quickLinks = [
    { name: 'Trang chủ', path: '/', description: 'Quay về trang chủ' },
    { name: 'Quản lý sự kiện', path: '/events', description: 'Xem danh sách sự kiện' },
    { name: 'Lịch sử giao dịch', path: '/history-transactions', description: 'Xem lịch sử giao dịch' },
    { name: 'Quản lý vi phạm', path: '/violations', description: 'Xem danh sách vi phạm' },
    { name: 'Danh sách thành viên', path: '/members', description: 'Xem thành viên CLB' },
  ];

  return (
    <div className="space-y-4">
      <TitlePage title="Không tìm thấy trang" description="Trang bạn đang tìm kiếm không tồn tại" />

      <div className="bg-base-100 shadow-xs rounded-lg p-6">
        <div className="flex flex-col items-center text-center space-y-4">
          <div className="bg-error/10 rounded-full p-6">
            <AlertCircle size={64} className="text-error" />
          </div>

          <div className="space-y-2">
            <h2 className="text-3xl font-bold">404 - Không tìm thấy trang</h2>
            <p className="text-sm opacity-60 max-w-md mx-auto">
              Trang bạn đang tìm kiếm có thể đã bị xóa, đổi tên hoặc tạm thời không khả dụng.
            </p>
          </div>

          <div className="flex gap-2 pt-4">
            <button onClick={() => navigate(-1)} className="btn btn-ghost gap-2">
              <ArrowLeft size={18} />
              Quay lại
            </button>
            <Link to="/" className="btn btn-primary gap-2">
              <Home size={18} />
              Về trang chủ
            </Link>
          </div>
        </div>
      </div>

      <div className="bg-base-100 shadow-xs rounded-lg p-4">
        <h3 className="text-base font-semibold mb-4">Các trang bạn có thể cần</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
          {quickLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className="border border-base-300 rounded-lg p-4 hover:bg-base-200 transition-colors"
            >
              <div className="font-medium text-sm mb-1">{link.name}</div>
              <div className="text-xs opacity-60">{link.description}</div>
            </Link>
          ))}
        </div>
      </div>

      <div className="alert">
        <AlertCircle size={20} />
        <span className="text-sm">
          Nếu bạn cho rằng đây là lỗi hệ thống, vui lòng liên hệ với quản trị viên để được hỗ trợ.
        </span>
      </div>
    </div>
  );
};

export default NotFoundPage;
