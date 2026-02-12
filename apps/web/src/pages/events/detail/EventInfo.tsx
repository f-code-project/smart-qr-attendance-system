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
    <div className="bg-base-100 shadow-xs rounded-sm">
      <div className="p-4 border-b">
        <h3 className="text-base font-semibold">Thông tin sự kiện</h3>
      </div>
      <div className="p-4 space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          <div className="flex items-start gap-3 p-3 rounded-sm border border-base-300">
            <Calendar className="text-primary mt-0.5" size={18} />
            <div>
              <p className="text-xs text-base-content/60 mb-1">Thời gian bắt đầu</p>
              <p className="font-medium text-sm">{DateUtils.formatDateTime(event.startDate)}</p>
            </div>
          </div>

          <div className="flex items-start gap-3 p-3 rounded-sm border border-base-300">
            <Calendar className="text-primary mt-0.5" size={18} />
            <div>
              <p className="text-xs text-base-content/60 mb-1">Thời gian kết thúc</p>
              <p className="font-medium text-sm">{DateUtils.formatDateTime(event.endDate)}</p>
            </div>
          </div>
        </div>

        <div className="flex flex-wrap gap-2 items-center">
          <div className="badge badge-soft badge-primary gap-2">
            <Users size={14} />
            {getCategoryLabel(event.category)}
          </div>
          <div className={`badge badge-soft badge-${color} gap-2`}>
            <div className="w-1.5 h-1.5 rounded-full bg-current"></div>
            {text}
          </div>
        </div>

        {event.location && (
          <div className="flex items-start gap-3 p-4 rounded-sm border border-base-300">
            <MapPin className="text-primary mt-0.5" size={18} />
            <div>
              <p className="text-xs text-base-content/60 mb-1">Địa điểm tổ chức</p>
              <p className="font-medium text-sm">{event.location}</p>
            </div>
          </div>
        )}

        {event.description && (
          <div className="p-4 rounded-sm border border-base-300">
            <div className="flex items-center gap-2 mb-2">
              <FileText size={16} className="text-base-content/60" />
              <span className="text-sm font-medium">Mô tả sự kiện</span>
            </div>
            <p className="text-sm text-base-content/80 leading-relaxed">{event.description}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default EventInfo;
