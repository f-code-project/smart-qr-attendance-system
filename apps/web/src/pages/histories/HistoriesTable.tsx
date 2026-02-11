import Paginate from '../../components/Paginate';

const HistoriesTable = () => {
  const mockData = [
    {
      id: 1,
      name: 'Nguyễn Văn A',
      studentId: 'SE200947',
      transactionCode: 'SE200947_QT2',
      content: 'DINH NHU TOAN chuyen tien...',
      amount: 50000,
      event: 'Quỹ Tháng 02',
      time: '2026-02-09 14:30:00',
      timeAgo: '10 giây trước',
      status: 'success',
    },
    {
      id: 2,
      name: 'Trần Thị B',
      studentId: 'SE201234',
      transactionCode: 'SE201234_TatNien',
      content: 'DINH NHU TOAN chuyen tien...',
      amount: 200000,
      event: 'Tất Niên 2026',
      time: '2026-02-09 13:15:00',
      timeAgo: '1 giờ trước',
      status: 'success',
    },
    {
      id: 3,
      name: 'Lê Văn C',
      studentId: 'SE202156',
      transactionCode: 'SE202156_QT2',
      content: 'DINH NHU TOAN chuyen tien...',
      amount: 50000,
      event: 'Quỹ Tháng 02',
      time: '2026-02-09 11:20:00',
      timeAgo: '3 giờ trước',
      status: 'success',
    },
    {
      id: 4,
      name: 'Phạm Thị D',
      studentId: 'SE199876',
      transactionCode: 'SE199876_TeamBuilding',
      content: 'DINH NHU TOAN chuyen tien...',
      amount: 150000,
      event: 'Team Building',
      time: '2026-02-08 16:45:00',
      timeAgo: '22 giờ trước',
      status: 'success',
    },
    {
      id: 5,
      name: 'Hoàng Văn E',
      studentId: 'SE203456',
      transactionCode: 'SE203456_QT2',
      content: 'DINH NHU TOAN chuyen tien...',
      amount: 50000,
      event: 'Quỹ Tháng 02',
      time: '2026-02-08 09:10:00',
      timeAgo: '1 ngày trước',
      status: 'success',
    },
    {
      id: 6,
      name: 'Võ Thị F',
      studentId: 'SE204567',
      transactionCode: 'SE204567_QT2',
      content: 'DINH NHU TOAN chuyen tien...',
      amount: 50000,
      event: 'Quỹ Tháng 02',
      time: '2026-02-07 15:45:00',
      timeAgo: '2 ngày trước',
      status: 'success',
    },
    {
      id: 7,
      name: 'Trương Văn G',
      studentId: 'SE198765',
      transactionCode: 'SE198765_ViPham01',
      content: 'DINH NHU TOAN chuyen tien...',
      amount: 20000,
      event: 'Vi phạm',
      time: '2026-02-07 10:20:00',
      timeAgo: '2 ngày trước',
      status: 'success',
    },
    {
      id: 8,
      name: 'Bùi Thị H',
      studentId: 'SE205678',
      transactionCode: 'SE205678_TatNien',
      content: 'DINH NHU TOAN chuyen tien...',
      amount: 200000,
      event: 'Tất Niên 2026',
      time: '2026-02-06 18:30:00',
      timeAgo: '3 ngày trước',
      status: 'success',
    },
    {
      id: 9,
      name: 'Đặng Văn I',
      studentId: 'SE197654',
      transactionCode: 'SE197654_QT2',
      content: 'DINH NHU TOAN chuyen tien...',
      amount: 50000,
      event: 'Quỹ Tháng 02',
      time: '2026-02-06 14:15:00',
      timeAgo: '3 ngày trước',
      status: 'success',
    },
    {
      id: 10,
      name: 'Hồ Thị K',
      studentId: 'SE206789',
      transactionCode: 'SE206789_TeamBuilding',
      content: 'DINH NHU TOAN chuyen tien...',
      amount: 150000,
      event: 'Team Building',
      time: '2026-02-05 09:00:00',
      timeAgo: '4 ngày trước',
      status: 'success',
    },
  ];

  return (
    <div className="bg-base-100 shadow-xs rounded-lg">
      <div className="p-4 border-b">
        <div className="flex justify-between items-center">
          <h3 className="text-base font-semibold">Danh sách giao dịch</h3>
          <span className="text-sm text-gray-500">Tổng: {mockData.length} giao dịch</span>
        </div>
      </div>
      <div className="overflow-x-auto">
        <table className="table">
          <thead>
            <tr>
              <th>STT</th>
              <th>Thành viên</th>
              <th>Mã giao dịch</th>
              <th>Số tiền</th>
              <th>Sự kiện</th>
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
                <td className="text-sm flex flex-col gap-1">
                  <span className="font-medium text-gray-600">{item.transactionCode}</span>
                  <span className="text-xs text-gray-400">{item.content}</span>
                </td>
                <td className="text-success font-semibold">+{item.amount.toLocaleString('vi-VN')}đ</td>
                <td>{item.event}</td>
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

export default HistoriesTable;
