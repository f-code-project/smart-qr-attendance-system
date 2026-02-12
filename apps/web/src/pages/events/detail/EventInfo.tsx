import { Calendar, FileText, MapPin, Users } from 'lucide-react';
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
      <div className="p-4 space-y-4">
        {/* Event Details */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="flex items-start gap-3 p-3 bg-blue-50 rounded-lg border border-blue-200">
            <Calendar className="text-primary mt-0.5" size={20} />
            <div>
              <p className="text-xs text-gray-600 mb-1">Thời gian bắt đầu</p>
              <p className="font-semibold text-primary">{DateUtils.formatDateTime(event.startDate)}</p>
            </div>
          </div>

          <div className="flex items-start gap-3 p-3 bg-purple-50 rounded-lg border border-purple-200">
            <Calendar className="text-secondary mt-0.5" size={20} />
            <div>
              <p className="text-xs text-gray-600 mb-1">Thời gian kết thúc</p>
              <p className="font-semibold text-secondary">{DateUtils.formatDateTime(event.endDate)}</p>
            </div>
          </div>
        </div>

        {/* Category and Status */}
        <div className="flex flex-wrap gap-3 items-center">
          <div className="badge badge-sm badge-outline badge-primary gap-2">
            <Users size={14} />
            {getCategoryLabel(event.category)}
          </div>
          <div className={`badge badge-outline badge-sm badge-${color} gap-2`}>
            <div className="w-2 h-2 rounded-full bg-current"></div>
            {text}
          </div>
        </div>

        {/* Location */}
        {event.location && (
          <div className="flex items-start gap-3 p-4 bg-amber-50 rounded-lg border border-amber-200">
            <MapPin className="text-amber-600 mt-0.5" size={20} />
            <div>
              <p className="text-xs text-gray-600 mb-1">Địa điểm tổ chức</p>
              <p className="font-medium text-gray-800">{event.location}</p>
            </div>
          </div>
        )}

        {/* Description */}
        {event.description && (
          <div className="p-4 bg-gray-50 rounded-lg border border-gray-200">
            <div className="flex items-center gap-2 mb-2">
              <FileText size={16} className="text-gray-600" />
              <span className="text-sm font-medium text-gray-700">Mô tả sự kiện</span>
            </div>
            <p className="text-gray-700 leading-relaxed">{event.description}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default EventInfo;
