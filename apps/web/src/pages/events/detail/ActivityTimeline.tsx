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
        return <UserCheck size={18} className="text-success" />;
      case 'notification':
        return <Mail size={18} className="text-info" />;
      case 'update':
        return <CheckCircle size={18} className="text-primary" />;
      case 'alert':
        return <AlertCircle size={18} className="text-warning" />;
      default:
        return <Clock size={18} className="text-base-content/40" />;
    }
  };

  const getBadgeClass = (type: Activity['type']) => {
    switch (type) {
      case 'attendance':
        return 'badge-success';
      case 'notification':
        return 'badge-info';
      case 'update':
        return 'badge-primary';
      case 'alert':
        return 'badge-warning';
      default:
        return '';
    }
  };

  return (
    <div className="bg-base-100 shadow-xs rounded-sm">
      <div className="p-4 border-b">
        <h3 className="text-base font-semibold">Hoạt động gần đây</h3>
      </div>
      <div className="p-4">
        <div className="space-y-4">
          {activities.map((activity, index) => (
            <div key={activity.id} className="flex gap-4">
              <div className="flex flex-col items-center">
                <div className={`badge badge-soft ${getBadgeClass(activity.type)} p-2.5`}>
                  {getIcon(activity.type)}
                </div>
                {index < activities.length - 1 && <div className="w-px flex-1 bg-base-300 mt-2"></div>}
              </div>

              <div className="flex-1 pb-2">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <h4 className="font-medium text-sm">{activity.title}</h4>
                    <p className="text-xs text-base-content/60 mt-0.5">{activity.description}</p>
                  </div>
                  <span className="text-xs text-base-content/40 whitespace-nowrap">{activity.time}</span>
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
