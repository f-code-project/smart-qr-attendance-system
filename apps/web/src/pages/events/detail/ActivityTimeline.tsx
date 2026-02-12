import { AlertCircle, CheckCircle, Clock, Mail, UserCheck } from 'lucide-react';

interface Activity {
  id: number;
  type: 'attendance' | 'notification' | 'update' | 'alert';
  title: string;
  description: string;
  time: string;
  user?: string;
}

const ActivityTimeline = () => {
  const activities: Activity[] = [
    {
      id: 1,
      type: 'attendance',
      title: 'Nguyễn Văn A đã điểm danh',
      description: 'Điểm danh thành công qua QR Code',
      time: '2 phút trước',
      user: 'Nguyễn Văn A',
    },
    {
      id: 2,
      type: 'attendance',
      title: 'Trần Thị B đã điểm danh',
      description: 'Điểm danh thành công qua QR Code',
      time: '5 phút trước',
      user: 'Trần Thị B',
    },
    {
      id: 3,
      type: 'notification',
      title: 'Gửi email thông báo',
      description: 'Đã gửi email nhắc nhở đến 15 thành viên chưa điểm danh',
      time: '10 phút trước',
    },
    {
      id: 4,
      type: 'update',
      title: 'Cập nhật thông tin sự kiện',
      description: 'Thay đổi địa điểm tổ chức',
      time: '1 giờ trước',
    },
    {
      id: 5,
      type: 'alert',
      title: 'Cảnh báo tỷ lệ tham gia thấp',
      description: 'Chỉ có 60% thành viên đã điểm danh',
      time: '2 giờ trước',
    },
  ];

  const getIcon = (type: Activity['type']) => {
    switch (type) {
      case 'attendance':
        return <UserCheck size={20} className="text-success" />;
      case 'notification':
        return <Mail size={20} className="text-info" />;
      case 'update':
        return <CheckCircle size={20} className="text-primary" />;
      case 'alert':
        return <AlertCircle size={20} className="text-warning" />;
      default:
        return <Clock size={20} className="text-gray-400" />;
    }
  };

  const getColorClass = (type: Activity['type']) => {
    switch (type) {
      case 'attendance':
        return 'bg-success/10 border-success/20';
      case 'notification':
        return 'bg-info/10 border-info/20';
      case 'update':
        return 'bg-primary/10 border-primary/20';
      case 'alert':
        return 'bg-warning/10 border-warning/20';
      default:
        return 'bg-gray-100 border-gray-200';
    }
  };

  return (
    <div className="bg-base-100 shadow-xs rounded-lg">
      <div className="p-4 border-b">
        <h3 className="text-base font-semibold">Hoạt động gần đây</h3>
      </div>
      <div className="p-4">
        <div className="space-y-3">
          {activities.map((activity, index) => (
            <div key={activity.id} className="flex gap-3">
              {/* Timeline line */}
              <div className="flex flex-col items-center">
                <div
                  className={`flex items-center justify-center w-10 h-10 rounded-full border-2 ${getColorClass(activity.type)}`}
                >
                  {getIcon(activity.type)}
                </div>
                {index < activities.length - 1 && <div className="w-0.5 h-full bg-gray-200 mt-1"></div>}
              </div>

              {/* Content */}
              <div className="flex-1 pb-4">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <h4 className="font-semibold text-sm text-gray-800">{activity.title}</h4>
                    <p className="text-xs text-gray-600 mt-1">{activity.description}</p>
                  </div>
                  <span className="text-xs text-gray-400 whitespace-nowrap ml-2">{activity.time}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ActivityTimeline;
