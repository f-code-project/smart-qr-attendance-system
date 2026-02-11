import { Pencil, Trash2 } from 'lucide-react';
import Paginate from '../../components/Paginate';
import CurrencyUtils from '../../utils/currency';

const EventsTable = () => {
  const mockData = [
    {
      id: 1,
      name: 'Tất niên 2026',
      eventCode: 'TatNien2026',
      type: 'EVENT',
      typeText: 'Sự kiện',
      amountPerMember: 200000,
      startDate: '2026-12-20',
      endDate: '2026-12-25',
      status: 'ACTIVE',
      statusText: 'Hoạt động',
      isNotification: 1,
      totalMembers: 150,
      paidMembers: 120,
      description: 'Sự kiện tất niên cuối năm của CLB',
    },
    {
      id: 2,
      name: 'Quỹ CLB tháng 2',
      eventCode: 'QT2',
      type: 'CLUB_FUND',
      typeText: 'Đóng quỹ CLB',
      amountPerMember: 50000,
      startDate: '2026-02-01',
      endDate: '2026-02-28',
      status: 'ACTIVE',
      statusText: 'Hoạt động',
      isNotification: 1,
      totalMembers: 300,
      paidMembers: 245,
      description: 'Đóng quỹ CLB hàng tháng',
    },
    {
      id: 3,
      name: 'Team Building Q1',
      eventCode: 'TeamBuildingQ1',
      type: 'EVENT',
      typeText: 'Sự kiện',
      amountPerMember: 150000,
      startDate: '2026-03-15',
      endDate: '2026-03-17',
      status: 'INACTIVE',
      statusText: 'Chưa hoạt động',
      isNotification: 0,
      totalMembers: 80,
      paidMembers: 0,
      description: 'Hoạt động team building quý 1',
    },
    {
      id: 4,
      name: 'Workshop AI',
      eventCode: 'WorkshopAI2026',
      type: 'EVENT',
      typeText: 'Sự kiện',
      amountPerMember: 100000,
      startDate: '2026-04-10',
      endDate: '2026-04-12',
      status: 'INACTIVE',
      statusText: 'Chưa hoạt động',
      isNotification: 1,
      totalMembers: 200,
      paidMembers: 0,
      description: 'Workshop về AI và Machine Learning',
    },
    {
      id: 5,
      name: 'Quỹ CLB tháng 3',
      eventCode: 'QT3',
      type: 'CLUB_FUND',
      typeText: 'Đóng quỹ CLB',
      amountPerMember: 50000,
      startDate: '2026-03-01',
      endDate: '2026-03-31',
      status: 'INACTIVE',
      statusText: 'Chưa hoạt động',
      isNotification: 1,
      totalMembers: 300,
      paidMembers: 0,
      description: 'Đóng quỹ CLB hàng tháng',
    },
  ];

  const formatDate = (date: string) => {
    return new Date(date).toLocaleDateString('vi-VN', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
    });
  };

  return (
    <div className="bg-base-100 shadow-xs rounded-lg">
      <div className="p-4 border-b">
        <div className="flex justify-between items-center">
          <h3 className="text-base font-semibold">Danh sách sự kiện</h3>
          <span className="text-sm text-gray-500">Tổng: {mockData.length} sự kiện</span>
        </div>
      </div>
      <div className="overflow-x-auto">
        <table className="table">
          <thead>
            <tr>
              <th>STT</th>
              <th>Tên sự kiện</th>
              <th>Mã sự kiện</th>
              <th>Thể loại</th>
              <th>Số tiền/người</th>
              <th>Thời gian</th>
              <th>Tiến độ</th>
              <th>Trạng thái</th>
              <th>Email</th>
              <th className="text-center">Thao tác</th>
            </tr>
          </thead>
          <tbody>
            {mockData.map((event, index) => (
              <tr key={event.id}>
                <th>{index + 1}</th>
                <td>
                  <div>
                    <div className="font-medium">{event.name}</div>
                    <div className="text-sm opacity-60">{event.description}</div>
                  </div>
                </td>
                <td>
                  <code className="text-sm bg-base-200 px-2 py-1 rounded">{event.eventCode}</code>
                </td>
                <td>
                  <span className="badge badge-sm">{event.typeText}</span>
                </td>
                <td className="font-semibold text-primary">{CurrencyUtils.formatVND(event.amountPerMember)}</td>
                <td>
                  <div className="text-sm">
                    <div>{formatDate(event.startDate)}</div>
                    <div className="opacity-60">{formatDate(event.endDate)}</div>
                  </div>
                </td>
                <td>
                  <div className="text-sm">
                    {event.paidMembers}/{event.totalMembers}
                  </div>
                </td>
                <td>
                  {event.status === 'ACTIVE' ? (
                    <span className="badge badge-success badge-sm">Hoạt động</span>
                  ) : (
                    <span className="badge badge-ghost badge-sm">Chưa hoạt động</span>
                  )}
                </td>
                <td>
                  <span className="text-sm">{event.isNotification === 1 ? 'Có' : 'Không'}</span>
                </td>
                <td>
                  <div className="flex items-center justify-center gap-2">
                    <button className="btn btn-ghost btn-xs">
                      <Pencil size={16} />
                    </button>
                    <button className="btn btn-ghost btn-xs text-error">
                      <Trash2 size={16} />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <Paginate />
    </div>
  );
};

export default EventsTable;
