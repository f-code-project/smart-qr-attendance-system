import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router';

const Histories = () => {
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
  ];

  return (
    <div className="bg-base-100 shadow-xs rounded-lg">
      <div className="p-4 border-b flex justify-between items-center">
        <h3 className="text-base font-semibold"> 100 giao dịch nhận tiền gần nhất</h3>
        <Link to={'/history-transactions'} className="text-xs flex items-center gap-1">
          Xem tất cả <ArrowRight size={15} />
        </Link>
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
                <td className=" text-sm flex flex-col gap-1">
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
    </div>
  );
};

export default Histories;
