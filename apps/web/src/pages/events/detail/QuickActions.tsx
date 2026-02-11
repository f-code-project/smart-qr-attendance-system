import { QrCode } from 'lucide-react';
import { Link } from 'react-router';

interface QuickActionsProps {
  eventId: number;
  isActive: boolean;
}

const QuickActions = ({ eventId, isActive }: QuickActionsProps) => {
  return (
    <div className="bg-gradient-to-br from-green-500 to-green-600 shadow-xs rounded-lg overflow-hidden">
      <div className="p-6">
        <div className="flex items-center gap-3 mb-6">
          <div className="bg-white/20 p-3 rounded-xl">
            <QrCode size={28} className="text-white" />
          </div>
          <div>
            <h3 className="text-xl font-bold text-white">Quét QR điểm danh</h3>
            <p className="text-green-100 text-sm">Sử dụng camera để quét mã QR</p>
          </div>
        </div>

        <Link
          to={`/qr-scanner/${eventId}`}
          target="_blank"
          className={`btn btn-lg w-full bg-white hover:bg-gray-100 text-green-600 border-0 gap-2`}
        >
          <QrCode size={20} />
          Quét QR ngay
        </Link>
      </div>
    </div>
  );
};

export default QuickActions;
