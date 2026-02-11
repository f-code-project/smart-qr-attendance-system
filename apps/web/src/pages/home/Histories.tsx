import Paginate from '../../components/Paginate';
import DateUtils from '../../utils/date';
import Helper from '../../utils/helpers';

const Histories = () => {
  const mockData = [
    {
      id: 1,
      eventName: 'Họp CLB định kỳ tháng 2',
      participantsCount: 50,
      attendeeCount: 45,
      description: 'Họp tổng kết hoạt động tháng 1 và lên kế hoạch cho tháng 2',
      startDate: '2026-02-13 14:00:00',
      endDate: '2026-03-10 16:00:00',
      status: 'Sắp diễn ra',
      statusColor: 'info',
    },
    {
      id: 2,
      eventName: 'Team Building 2026',
      participantsCount: 50,
      attendeeCount: 45,
      description: 'Hoạt động team building tại Vũng Tàu, gắn kết thành viên',
      startDate: '2026-02-08 08:00:00',
      endDate: '2026-02-09 18:00:00',
      status: 'Đã hoàn thành',
      statusColor: 'success',
    },
    {
      id: 3,
      eventName: 'Workshop: Kỹ năng thuyết trình',
      participantsCount: 50,
      attendeeCount: 45,
      description: 'Workshop về kỹ năng thuyết trình và giao tiếp hiệu quả',
      startDate: '2026-02-10 09:00:00',
      endDate: '2026-02-10 12:00:00',
      status: 'Đã hoàn thành',
      statusColor: 'success',
    },
    {
      id: 4,
      eventName: 'Tất Niên CLB 2026',
      participantsCount: 50,
      attendeeCount: 45,
      description: 'Tiệc tất niên và tổng kết hoạt động năm 2025',
      startDate: '2026-01-25 18:00:00',
      endDate: '2026-01-25 22:00:00',
      status: 'Đã hoàn thành',
      statusColor: 'success',
    },
    {
      id: 5,
      eventName: 'Hoạt động tình nguyện',
      participants: ['Hoàng Văn E', 'Phạm Thị D'],
      participantsCount: 20,
      description: 'Hoạt động thiện nguyện tại trung tâm trẻ em khó khăn',
      startDate: '2026-02-20 07:00:00',
      endDate: '2026-02-20 17:00:00',
      status: 'Sắp diễn ra',
      statusColor: 'info',
    },
  ];

  return (
    <div className="bg-base-100 shadow-xs rounded-lg">
      <div className="p-4 border-b flex justify-between items-center">
        <h3 className="text-base font-semibold">Danh sách các sự kiện</h3>
        {/* <Link to={'/history-transactions'} className="text-xs flex items-center gap-1">
          Xem tất cả <ArrowRight size={15} />
        </Link> */}
      </div>
      <div className="overflow-x-auto">
        <table className="table">
          <thead>
            <tr>
              <th>STT</th>
              <th>Tên sự kiện</th>
              <th>Tham gia</th>
              <th>Mô tả sự kiện</th>
              <th>Diễn ra</th>
              <th>Trạng thái</th>
              <th>Thao tác</th>
            </tr>
          </thead>
          <tbody>
            {mockData.map((item) => {
              const { text, color, status } = DateUtils.formatTimeRange(item.startDate, item.endDate);
              const isActive = ['near', 'active'].includes(status);
              return (
                <tr key={item.id}>
                  <th>{item.id}</th>
                  <td>
                    <div className="font-medium">{item.eventName}</div>
                  </td>
                  <td>
                    <span
                      className={`font-bold ${Helper.belowAverage(item.attendeeCount ?? 0, item.participantsCount ?? 0) ? 'text-red-500' : 'text-green-500'}`}
                    >
                      {item.attendeeCount ?? 0}
                    </span>
                    /<span className="text-xs font-bold">{item.participantsCount ?? 0}</span>
                  </td>
                  <td>
                    <div className="text-sm max-w-xs truncate" title={item.description}>
                      {item.description.slice(0, 50)} {item.description.length > 50 ? '...' : ''}
                    </div>
                  </td>
                  <td>
                    <div className="flex flex-col text-sm gap-1">
                      <span>
                        <span className="font-semibold text-gray-600">Start:</span>{' '}
                        <span className="text-primary">{DateUtils.formatDateTime(item.startDate)}</span>
                      </span>
                      <span>
                        <span className="font-semibold text-gray-600">End:</span>{' '}
                        <span className="text-secondary">{DateUtils.formatDateTime(item.endDate)}</span>
                      </span>
                    </div>
                  </td>
                  <td>
                    <span className={`badge badge-soft badge-${color} badge-sm`}>{text}</span>
                  </td>
                  <td>
                    <button className="btn btn-primary btn-sm" disabled={!isActive}>
                      Điểm danh
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      <Paginate />
    </div>
  );
};

export default Histories;
