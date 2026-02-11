import { BarChart3, Download, Edit, Mail, QrCode, Trash2 } from 'lucide-react';
import { useState } from 'react';

interface ControlEventProps {
  eventId: number;
  eventName: string;
  isActive: boolean;
}

const ControlEvent = ({ eventId, eventName, isActive }: ControlEventProps) => {
  const [showQR, setShowQR] = useState(false);

  const handleEdit = () => {
    console.log('Edit event', eventId);
    // TODO: Navigate to edit page
  };

  const handleDelete = () => {
    if (window.confirm(`Bạn có chắc chắn muốn xóa sự kiện "${eventName}"?`)) {
      console.log('Delete event', eventId);
      // TODO: Call API to delete event
    }
  };

  const handleGenerateQR = () => {
    setShowQR(true);
    console.log('Generate QR code for event', eventId);
    // TODO: Generate QR code
  };

  const handleExportAttendance = () => {
    console.log('Export attendance for event', eventId);
    // TODO: Export to Excel/CSV
  };

  const handleSendNotification = () => {
    console.log('Send notification for event', eventId);
    // TODO: Send email notification
  };

  const handleViewStatistics = () => {
    console.log('View statistics for event', eventId);
    // TODO: Show statistics modal
  };

  return (
    <div className="bg-base-100 shadow-xs rounded-lg">
      <div className="p-4 border-b">
        <h3 className="text-base font-semibold">Điều khiển sự kiện</h3>
      </div>
      <div className="p-4">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
          <button className="btn btn-outline btn-primary gap-2" onClick={handleEdit}>
            <Edit size={18} />
            Chỉnh sửa
          </button>

          <button className="btn btn-outline btn-error gap-2" onClick={handleDelete}>
            <Trash2 size={18} />
            Xóa
          </button>

          <button className="btn btn-outline btn-info gap-2" onClick={handleGenerateQR} disabled={!isActive}>
            <QrCode size={18} />
            Tạo QR Code
          </button>

          <button className="btn btn-outline btn-success gap-2" onClick={handleExportAttendance}>
            <Download size={18} />
            Xuất Excel
          </button>

          <button className="btn btn-outline btn-warning gap-2" onClick={handleSendNotification}>
            <Mail size={18} />
            Gửi thông báo
          </button>

          <button className="btn btn-outline btn-secondary gap-2" onClick={handleViewStatistics}>
            <BarChart3 size={18} />
            Thống kê
          </button>
        </div>

        {/* QR Code Modal */}
        {showQR && (
          <div className="modal modal-open" onClick={() => setShowQR(false)}>
            <div className="modal-box" onClick={(e) => e.stopPropagation()}>
              <h3 className="font-bold text-lg mb-4">QR Code điểm danh</h3>
              <div className="flex flex-col items-center gap-4">
                <div className="bg-white p-4 rounded-lg border-2 border-gray-200">
                  {/* Placeholder for QR code */}
                  <div className="w-64 h-64 bg-gray-100 flex items-center justify-center">
                    <QrCode size={100} className="text-gray-400" />
                  </div>
                </div>
                <p className="text-sm text-gray-600 text-center">
                  Quét mã QR này để điểm danh sự kiện: <br />
                  <span className="font-semibold">{eventName}</span>
                </p>
                <button className="btn btn-primary btn-sm gap-2">
                  <Download size={16} />
                  Tải xuống QR Code
                </button>
              </div>
              <div className="modal-action">
                <button className="btn" onClick={() => setShowQR(false)}>
                  Đóng
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ControlEvent;
