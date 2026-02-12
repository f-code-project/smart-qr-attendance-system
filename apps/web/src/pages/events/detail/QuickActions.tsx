import { QrCode } from 'lucide-react';
import { Link } from 'react-router';

interface QuickActionsProps {
  eventId: number;
  isActive: boolean;
}

const QuickActions = ({ eventId, isActive }: QuickActionsProps) => {
  return (
    <div className="bg-primary shadow-xs rounded-sm overflow-hidden">
      <div className="p-6">
        <div className="flex items-center gap-3 mb-5">
          <div className="bg-white/20 p-2.5 rounded-sm">
            <QrCode size={24} className="text-white" />
          </div>
          <div>
            <h3 className="text-lg font-semibold text-white">Quét QR điểm danh</h3>
            <p className="text-primary-content/80 text-sm">Sử dụng camera để quét mã QR</p>
          </div>
        </div>

        <Link
          to={`/qr-scanner/${eventId}`}
          target="_blank"
          className={`btn btn-lg w-full bg-white hover:bg-base-200 text-primary border-0 gap-2`}
        >
          <QrCode size={18} />
          Quét QR ngay
        </Link>
      </div>
    </div>
  );
};

export default QuickActions;
