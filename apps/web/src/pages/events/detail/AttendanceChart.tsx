import { TrendingUp, UserCheck, Users, UserX } from 'lucide-react';

interface AttendanceChartProps {
  participantsCount: number;
  attendeeCount: number;
}

const AttendanceChart = ({ participantsCount, attendeeCount }: AttendanceChartProps) => {
  const absentCount = participantsCount - attendeeCount;
  const attendanceRate = ((attendeeCount / participantsCount) * 100).toFixed(1);
  const absentRate = ((absentCount / participantsCount) * 100).toFixed(1);

  return (
    <div className="bg-base-100 shadow-xs rounded-sm">
      <div className="p-4 border-b">
        <h3 className="text-base font-semibold">Thống kê tham gia</h3>
      </div>
      <div className="p-4 space-y-4">
        <div className="flex items-center gap-2 h-10 rounded-sm overflow-hidden">
          <div
            className="bg-success h-full flex items-center justify-center transition-all"
            style={{ width: `${attendanceRate}%` }}
          >
            {parseFloat(attendanceRate) > 15 && <span className="text-white font-semibold text-xs">{attendanceRate}%</span>}
          </div>
          <div
            className="bg-error h-full flex items-center justify-center transition-all"
            style={{ width: `${absentRate}%` }}
          >
            {parseFloat(absentRate) > 15 && <span className="text-white font-semibold text-xs">{absentRate}%</span>}
          </div>
        </div>

        <div className="grid grid-cols-3 gap-3">
          <div className="p-3 rounded-sm border border-base-300">
            <div className="flex items-center gap-2 mb-2">
              <Users size={16} className="text-base-content/60" />
              <span className="text-xs text-base-content/60 font-medium">Tổng số</span>
            </div>
            <p className="text-2xl font-bold">{participantsCount}</p>
          </div>

          <div className="p-3 rounded-sm border border-base-300">
            <div className="flex items-center gap-2 mb-2">
              <UserCheck size={16} className="text-success" />
              <span className="text-xs text-success font-medium">Có mặt</span>
            </div>
            <p className="text-2xl font-bold text-success">{attendeeCount}</p>
          </div>

          <div className="p-3 rounded-sm border border-base-300">
            <div className="flex items-center gap-2 mb-2">
              <UserX size={16} className="text-error" />
              <span className="text-xs text-error font-medium">Vắng</span>
            </div>
            <p className="text-2xl font-bold text-error">{absentCount}</p>
          </div>
        </div>

        <div className={`alert alert-soft ${parseFloat(attendanceRate) >= 80 ? 'alert-success' : 'alert-warning'}`}>
          <TrendingUp size={18} />
          <div>
            <p className="font-medium text-sm">
              {parseFloat(attendanceRate) >= 80 ? 'Tỷ lệ tham gia tốt!' : 'Cần cải thiện tỷ lệ tham gia'}
            </p>
            <p className="text-xs opacity-70">
              {parseFloat(attendanceRate) >= 80
                ? 'Sự kiện đang thu hút đông đảo thành viên'
                : 'Cân nhắc gửi thông báo nhắc nhở'}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AttendanceChart;
