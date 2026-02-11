import { Pencil, Trash2 } from 'lucide-react';
import Paginate from '../../components/Paginate';

const MembersTable = () => {
  const mockData = [
    {
      id: 1,
      studentId: 'SE200947',
      fullName: 'Nguyễn Văn A',
      email: 'anvse200947@fpt.edu.vn',
      phone: '0912345678',
      major: 'Software Engineering',
      generation: 'K16',
      status: 'ACTIVE',
      warningCount: 2,
      joinDate: '2023-09-01',
    },
    {
      id: 2,
      studentId: 'SE201234',
      fullName: 'Trần Thị B',
      email: 'bttse201234@fpt.edu.vn',
      phone: '0923456789',
      major: 'Software Engineering',
      generation: 'K16',
      status: 'ACTIVE',
      warningCount: 0,
      joinDate: '2023-09-01',
    },
    {
      id: 3,
      studentId: 'SE202156',
      fullName: 'Lê Văn C',
      email: 'clvse202156@fpt.edu.vn',
      phone: '0934567890',
      major: 'Information Assurance',
      generation: 'K17',
      status: 'ACTIVE',
      warningCount: 5,
      joinDate: '2024-09-01',
    },
    {
      id: 4,
      studentId: 'SE199876',
      fullName: 'Phạm Thị D',
      email: 'dptse199876@fpt.edu.vn',
      phone: '0945678901',
      major: 'Software Engineering',
      generation: 'K15',
      status: 'INACTIVE',
      warningCount: 1,
      joinDate: '2022-09-01',
    },
    {
      id: 5,
      studentId: 'SE203456',
      fullName: 'Hoàng Văn E',
      email: 'ehvse203456@fpt.edu.vn',
      phone: '0956789012',
      major: 'Artificial Intelligence',
      generation: 'K17',
      status: 'ACTIVE',
      warningCount: 3,
      joinDate: '2024-09-01',
    },
    {
      id: 6,
      studentId: 'SE204567',
      fullName: 'Võ Thị F',
      email: 'fvtse204567@fpt.edu.vn',
      phone: '0967890123',
      major: 'Software Engineering',
      generation: 'K17',
      status: 'ACTIVE',
      warningCount: 0,
      joinDate: '2024-09-01',
    },
    {
      id: 7,
      studentId: 'SE198765',
      fullName: 'Trương Văn G',
      email: 'gtvse198765@fpt.edu.vn',
      phone: '0978901234',
      major: 'Software Engineering',
      generation: 'K15',
      status: 'ACTIVE',
      warningCount: 7,
      joinDate: '2022-09-01',
    },
    {
      id: 8,
      studentId: 'SE205678',
      fullName: 'Bùi Thị H',
      email: 'hbtse205678@fpt.edu.vn',
      phone: '0989012345',
      major: 'Information Assurance',
      generation: 'K17',
      status: 'ACTIVE',
      warningCount: 1,
      joinDate: '2024-09-01',
    },
  ];

  return (
    <div className="bg-base-100 shadow-xs rounded-lg">
      <div className="p-4 border-b">
        <div className="flex justify-between items-center">
          <h3 className="text-base font-semibold">Danh sách thành viên</h3>
          <span className="text-sm text-gray-500">Tổng: {mockData.length} thành viên</span>
        </div>
      </div>
      <div className="overflow-x-auto">
        <table className="table">
          <thead>
            <tr>
              <th>STT</th>
              <th>Họ và tên</th>
              <th>MSSV</th>
              <th>Vi phạm</th>
              <th>Trạng thái</th>
              <th className="text-center">Thao tác</th>
            </tr>
          </thead>
          <tbody>
            {mockData.map((member, index) => (
              <tr key={member.id}>
                <th>{index + 1}</th>

                <td>
                  <p className="flex items-center gap-2 font-semibold">{member.fullName}</p>
                  <p className="mt-0.5 text-xs text-gray-600 italic">Ngành: {member.major}</p>
                </td>

                <td className="text-sm">
                  <p className="text-blue-gray-900 font-semibold">{`[${member.generation}] - ${member.studentId}`}</p>
                </td>
                <td className="text-xs">
                  <div className="flex flex-col gap-1">
                    <span className="text-yellow-600">Nhắc nhở: {member.warningCount}</span>
                    <span className="text-red-600">Cảnh báo: {Math.floor(member.warningCount / 3)}</span>
                  </div>
                </td>

                <td>
                  {member.status === 'ACTIVE' ? (
                    <span className="badge badge-outline badge-sm badge-success">Hoạt động</span>
                  ) : (
                    <span className="badge badge-ghost badge-sm">Không hoạt động</span>
                  )}
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

export default MembersTable;
