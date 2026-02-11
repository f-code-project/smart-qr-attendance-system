import { Calendar, DollarSign, FileText, MapPin, Tag, Users } from 'lucide-react';
import DateUtils from '../../../utils/date';

interface EventInfoProps {
  event: {
    id: number;
    eventName: string;
    eventCode: string;
    description: string;
    category: string;
    amount: number;
    startDate: string;
    endDate: string;
    status: string;
    participantsCount: number;
    attendeeCount: number;
    location: string;
    note: string;
  };
}

const EventInfo = ({ event }: EventInfoProps) => {
  const { text, color } = DateUtils.formatTimeRange(event.startDate, event.endDate);

  const getCategoryLabel = (category: string) => {
    const categories: Record<string, string> = {
      EVENT: 'Sự kiện',
      MEETING: 'Họp CLB',
      CLUB_FUND: 'Đóng quỹ CLB',
      TEAM_BUILDING: 'Team Building',
      WORKSHOP: 'Workshop',
      VOLUNTEER: 'Hoạt động tình nguyện',
      OTHERS: 'Khác',
    };
    return categories[category] || category;
  };

  return (
    <div className="bg-base-100 shadow-xs rounded-lg">
      <div className="p-4 border-b">
        <h3 className="text-base font-semibold">Thông tin sự kiện</h3>
      </div>
      <div className="p-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Tên và mã sự kiện */}
          <div className="space-y-1">
            <div className="flex items-center gap-2 text-gray-600">
              <FileText size={16} />
              <span className="text-sm">Tên sự kiện</span>
            </div>
            <p className="font-semibold text-lg">{event.eventName}</p>
          </div>

          <div className="space-y-1">
            <div className="flex items-center gap-2 text-gray-600">
              <Tag size={16} />
              <span className="text-sm">Mã sự kiện</span>
            </div>
            <p className="font-semibold">
              <span className="badge badge-primary badge-outline">{event.eventCode}</span>
            </p>
          </div>

          {/* Thể loại và trạng thái */}
          <div className="space-y-1">
            <div className="flex items-center gap-2 text-gray-600">
              <Tag size={16} />
              <span className="text-sm">Thể loại</span>
            </div>
            <p className="font-medium">{getCategoryLabel(event.category)}</p>
          </div>

          <div className="space-y-1">
            <div className="flex items-center gap-2 text-gray-600">
              <span className="text-sm">Trạng thái</span>
            </div>
            <p>
              <span className={`badge badge-soft badge-${color} badge-sm`}>{text}</span>
            </p>
          </div>

          {/* Thời gian */}
          <div className="space-y-1">
            <div className="flex items-center gap-2 text-gray-600">
              <Calendar size={16} />
              <span className="text-sm">Thời gian bắt đầu</span>
            </div>
            <p className="font-medium text-primary">{DateUtils.formatDateTime(event.startDate)}</p>
          </div>

          <div className="space-y-1">
            <div className="flex items-center gap-2 text-gray-600">
              <Calendar size={16} />
              <span className="text-sm">Thời gian kết thúc</span>
            </div>
            <p className="font-medium text-secondary">{DateUtils.formatDateTime(event.endDate)}</p>
          </div>

          {/* Địa điểm */}
          {event.location && (
            <div className="space-y-1 md:col-span-2">
              <div className="flex items-center gap-2 text-gray-600">
                <MapPin size={16} />
                <span className="text-sm">Địa điểm</span>
              </div>
              <p className="font-medium">{event.location}</p>
            </div>
          )}

          {/* Số lượng tham gia */}
          <div className="space-y-1">
            <div className="flex items-center gap-2 text-gray-600">
              <Users size={16} />
              <span className="text-sm">Người tham gia</span>
            </div>
            <p className="font-semibold">
              <span className="text-green-600 text-xl">{event.attendeeCount}</span>
              <span className="text-gray-400 mx-1">/</span>
              <span className="text-gray-700">{event.participantsCount}</span>
            </p>
            <div className="mt-2">
              <progress
                className="progress progress-success w-full"
                value={event.attendeeCount}
                max={event.participantsCount}
              ></progress>
              <p className="text-xs text-gray-500 mt-1">
                {((event.attendeeCount / event.participantsCount) * 100).toFixed(1)}% đã điểm danh
              </p>
            </div>
          </div>

          {/* Số tiền */}
          <div className="space-y-1">
            <div className="flex items-center gap-2 text-gray-600">
              <DollarSign size={16} />
              <span className="text-sm">Số tiền thu/người</span>
            </div>
            <p className="font-semibold text-lg text-success">
              {new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(event.amount)}
            </p>
            <p className="text-xs text-gray-500">
              Tổng dự kiến:{' '}
              {new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(
                event.amount * event.participantsCount,
              )}
            </p>
          </div>

          {/* Mô tả */}
          {event.description && (
            <div className="space-y-1 md:col-span-2">
              <div className="flex items-center gap-2 text-gray-600">
                <FileText size={16} />
                <span className="text-sm">Mô tả</span>
              </div>
              <p className="text-gray-700 leading-relaxed">{event.description}</p>
            </div>
          )}

          {/* Ghi chú */}
          {event.note && (
            <div className="space-y-1 md:col-span-2">
              <div className="flex items-center gap-2 text-gray-600">
                <FileText size={16} />
                <span className="text-sm">Ghi chú</span>
              </div>
              <p className="text-gray-700 leading-relaxed">{event.note}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default EventInfo;
