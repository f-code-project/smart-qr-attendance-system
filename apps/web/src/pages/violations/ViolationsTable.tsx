import Paginate from '../../components/Paginate';

const ViolationsTable = () => {
  const mockData = [
    {
      id: 1,
      name: 'Nguyễn Văn A',
      studentId: 'SE200947',
      violationType: 'NO_UNIFORM',
      violationTypeText: 'Không mặc đồng phục',
      amount: 20000,
      status: 'PENDING',
      statusText: 'Chưa đóng',
      time: '2026-02-08 14:30:00',
      timeAgo: '1 ngày trước',
    },
    {
      id: 2,
      name: 'Trần Thị B',
      studentId: 'SE201234',
      violationType: 'LATE_MEETING',
      violationTypeText: 'Đi họp muộn',
      amount: 10000,
      status: 'PAID',
      statusText: 'Đã đóng',
      time: '2026-02-07 18:15:00',
      timeAgo: '2 ngày trước',
    },
    {
      id: 3,
      name: 'Lê Văn C',
      studentId: 'SE202156',
      violationType: 'NO_UNIFORM',
      violationTypeText: 'Không mặc đồng phục',
      amount: 20000,
      status: 'PENDING',
      statusText: 'Chưa đóng',
      time: '2026-02-06 10:20:00',
      timeAgo: '3 ngày trước',
    },
    {
      id: 4,
      name: 'Phạm Thị D',
      studentId: 'SE199876',
      violationType: 'OTHER',
      violationTypeText: 'Khác',
      amount: 50000,
      status: 'PAID',
      statusText: 'Đã đóng',
      time: '2026-02-05 16:45:00',
      timeAgo: '4 ngày trước',
    },
    {
      id: 5,
      name: 'Hoàng Văn E',
      studentId: 'SE203456',
      violationType: 'LATE_MEETING',
      violationTypeText: 'Đi họp muộn',
      amount: 10000,
      status: 'PENDING',
      statusText: 'Chưa đóng',
      time: '2026-02-04 09:10:00',
      timeAgo: '5 ngày trước',
    },
    {
      id: 6,
      name: 'Võ Thị F',
      studentId: 'SE204567',
      violationType: 'NO_UNIFORM',
      violationTypeText: 'Không mặc đồng phục',
      amount: 20000,
      status: 'PAID',
      statusText: 'Đã đóng',
      time: '2026-02-03 15:30:00',
      timeAgo: '6 ngày trước',
    },
    {
      id: 7,
      name: 'Trương Văn G',
      studentId: 'SE198765',
      violationType: 'OTHER',
      violationTypeText: 'Khác',
      amount: 30000,
      status: 'PENDING',
      statusText: 'Chưa đóng',
      time: '2026-02-02 11:20:00',
      timeAgo: '7 ngày trước',
    },
  ];

  const getViolationTypeBadge = (type: string) => {
    switch (type) {
      case 'NO_UNIFORM':
        return 'badge-error';
      case 'LATE_MEETING':
        return 'badge-warning';
      case 'OTHER':
        return 'badge-info';
      default:
        return 'badge-ghost';
    }
  };

  return (
    <div className="bg-base-100 shadow-xs rounded-lg">
      <div className="p-4 border-b">
        <div className="flex justify-between items-center">
          <h3 className="text-base font-semibold">Danh sách vi phạm</h3>
          <span className="text-sm opacity-60">Tổng: {mockData.length} vi phạm</span>
        </div>
      </div>
      <div className="overflow-x-auto">
        <table className="table">
          <thead>
            <tr>
              <th>STT</th>
              <th>Thành viên</th>
              <th>Loại vi phạm</th>
              <th>Số tiền phạt</th>
              <th>Trạng thái</th>
              <th>Thời gian</th>
            </tr>
          </thead>
          <tbody>
            {mockData.map((item) => (
              <tr key={item.id}>
                <th>{item.id}</th>
                <td>
                  <div>
                    <div className="font-medium">{item.name}</div>
                    <div className="text-sm opacity-60">{item.studentId}</div>
                  </div>
                </td>
                <td>
                  <span
                    className={`badge badge-soft font-semibold ${getViolationTypeBadge(item.violationType)} badge-sm`}
                  >
                    {item.violationTypeText}
                  </span>
                </td>
                <td className="text-error font-semibold">{item.amount.toLocaleString('vi-VN')}đ</td>
                <td>
                  {item.status === 'PENDING' ? (
                    <span className="badge badge-soft font-semibold badge-warning badge-sm">Chưa đóng</span>
                  ) : (
                    <span className="badge badge-soft font-semibold badge-success badge-sm">Đã đóng</span>
                  )}
                </td>
                <td>
                  <div>
                    <div className="text-sm">{item.time}</div>
                    <div className="text-xs opacity-60">{item.timeAgo}</div>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <Paginate />
    </div>
  );
};

export default ViolationsTable;
