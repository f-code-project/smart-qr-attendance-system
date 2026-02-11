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
    <div className="bg-base-100 shadow-xs rounded-lg">
      <div className="p-4 border-b">
        <h3 className="text-base font-semibold">Biểu đồ tham gia</h3>
      </div>
      <div className="p-4 space-y-4">
        {/* Visual Chart */}
        <div className="flex items-center gap-2 h-12">
          <div
            className="bg-gradient-to-r from-green-400 to-green-500 h-full rounded-l-lg flex items-center justify-center transition-all"
            style={{ width: `${attendanceRate}%` }}
          >
            {parseFloat(attendanceRate) > 15 && <span className="text-white font-bold text-sm">{attendanceRate}%</span>}
          </div>
          <div
            className="bg-gradient-to-r from-red-400 to-red-500 h-full rounded-r-lg flex items-center justify-center transition-all"
            style={{ width: `${absentRate}%` }}
          >
            {parseFloat(absentRate) > 15 && <span className="text-white font-bold text-sm">{absentRate}%</span>}
          </div>
        </div>

        {/* Legend */}
        <div className="grid grid-cols-3 gap-3">
          <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-3 rounded-lg border border-blue-200">
            <div className="flex items-center gap-2 mb-1">
              <Users size={16} className="text-blue-600" />
              <span className="text-xs text-blue-600 font-medium">Tổng số</span>
            </div>
            <p className="text-2xl font-bold text-blue-700">{participantsCount}</p>
          </div>

          <div className="bg-gradient-to-br from-green-50 to-green-100 p-3 rounded-lg border border-green-200">
            <div className="flex items-center gap-2 mb-1">
              <UserCheck size={16} className="text-green-600" />
              <span className="text-xs text-green-600 font-medium">Có mặt</span>
            </div>
            <p className="text-2xl font-bold text-green-700">{attendeeCount}</p>
          </div>

          <div className="bg-gradient-to-br from-red-50 to-red-100 p-3 rounded-lg border border-red-200">
            <div className="flex items-center gap-2 mb-1">
              <UserX size={16} className="text-red-600" />
              <span className="text-xs text-red-600 font-medium">Vắng</span>
            </div>
            <p className="text-2xl font-bold text-red-700">{absentCount}</p>
          </div>
        </div>

        {/* Performance indicator */}
        <div className={`alert ${parseFloat(attendanceRate) >= 80 ? 'alert-success' : 'alert-warning'}`}>
          <TrendingUp size={20} />
          <div>
            <p className="font-semibold text-sm">
              {parseFloat(attendanceRate) >= 80 ? 'Tỷ lệ tham gia tốt!' : 'Cần cải thiện tỷ lệ tham gia'}
            </p>
            <p className="text-xs">
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
