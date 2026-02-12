import { Check, UserCheck, X } from 'lucide-react';
import { useState } from 'react';

interface Member {
  id: number;
  name: string;
  studentId: string;
  email: string;
  phone: string;
  isAttended: boolean;
  attendedAt: string | null;
}

interface RollCallProps {
  eventId: number;
  isActive: boolean;
  setMemberActive: (studentId: string | null) => void;
}

const RollCall = ({ eventId, isActive, setMemberActive }: RollCallProps) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterStatus, setFilterStatus] = useState<'all' | 'attended' | 'not-attended'>('all');

  // Mock data - Thay bằng API call thực tế
  const [members, setMembers] = useState<Member[]>([
    {
      id: 1,
      name: 'Nguyễn Văn A',
      studentId: 'SE200947',
      email: 'a.nguyen@example.com',
      phone: '0901234567',
      isAttended: false,
      attendedAt: '2026-02-12 14:30:00',
    },
    {
      id: 2,
      name: 'Trần Thị B',
      studentId: 'SE203677',
      email: 'b.tran@example.com',
      phone: '0902234567',
      isAttended: false,
      attendedAt: '2026-02-12 14:32:00',
    },
    {
      id: 3,
      name: 'Lê Văn C',
      studentId: 'SE210518',
      email: 'c.le@example.com',
      phone: '0903234567',
      isAttended: false,
      attendedAt: null,
    },
    {
      id: 4,
      name: 'Phạm Thị D',
      studentId: 'SV004',
      email: 'd.pham@example.com',
      phone: '0904234567',
      isAttended: false,
      attendedAt: null,
    },
    {
      id: 5,
      name: 'Hoàng Văn E',
      studentId: 'SV005',
      email: 'e.hoang@example.com',
      phone: '0905234567',
      isAttended: true,
      attendedAt: '2026-02-12 14:35:00',
    },
  ]);

  const handleAttendance = (memberId: number, studentId: string, checked: boolean) => {
    setMemberActive(studentId);
    setMembers((prev) =>
      prev.map((member) =>
        member.id === memberId
          ? {
              ...member,
              isAttended: checked,
              attendedAt: checked ? new Date().toISOString().replace('T', ' ').slice(0, 19) : null,
            }
          : member,
      ),
    );
    // TODO: Call API to update attendance
  };

  const handleMarkAll = () => {
    const allAttended = members.every((m) => m.isAttended);
    setMembers((prev) =>
      prev.map((member) => ({
        ...member,
        isAttended: !allAttended,
        attendedAt: !allAttended ? new Date().toISOString().replace('T', ' ').slice(0, 19) : null,
      })),
    );
  };

  const filteredMembers = members.filter((member) => {
    const matchesSearch =
      member.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      member.studentId.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesFilter =
      filterStatus === 'all' ||
      (filterStatus === 'attended' && member.isAttended) ||
      (filterStatus === 'not-attended' && !member.isAttended);

    return matchesSearch && matchesFilter;
  });

  const attendedCount = members.filter((m) => m.isAttended).length;
  const totalCount = members.length;

  return (
    <div className="bg-base-100 shadow-xs rounded-sm">
      <div className="p-4 border-b">
        <div className="flex justify-between items-center">
          <h3 className="text-base font-semibold">Điểm danh thành viên</h3>
          <div className="flex items-center gap-2">
            <span className="text-sm text-base-content/70">
              Đã điểm danh: <span className="font-semibold text-success">{attendedCount}</span>/{totalCount}
            </span>
          </div>
        </div>
      </div>

      <div className="p-4 border-b">
        <div className="flex flex-col sm:flex-row gap-3">
          <div className="flex-1">
            <input
              type="text"
              placeholder="Tìm kiếm theo tên hoặc MSSV..."
              className="input input-bordered w-full"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <div className="flex gap-2">
            <select
              className="select select-bordered"
              value={filterStatus}
              onChange={(e) => setFilterStatus(e.target.value as any)}
            >
              <option value="all">Tất cả</option>
              <option value="attended">Đã điểm danh</option>
              <option value="not-attended">Chưa điểm danh</option>
            </select>
            <button className="btn btn-primary gap-2" onClick={handleMarkAll} disabled={!isActive}>
              <UserCheck size={16} />
              {members.every((m) => m.isAttended) ? 'Bỏ chọn tất cả' : 'Chọn tất cả'}
            </button>
          </div>
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="table">
          <thead>
            <tr>
              <th className="w-12">
                <input
                  type="checkbox"
                  className="checkbox checkbox-primary"
                  checked={members.length > 0 && members.every((m) => m.isAttended)}
                  onChange={handleMarkAll}
                  disabled={!isActive}
                />
              </th>
              <th>STT</th>
              <th>MSSV</th>
              <th>Họ và tên</th>
              <th>Email</th>
              <th>Số điện thoại</th>
              <th>Thời gian điểm danh</th>
              <th className="w-50">Trạng thái</th>
            </tr>
          </thead>
          <tbody>
            {filteredMembers.length === 0 ? (
              <tr>
                <td colSpan={8} className="text-center py-8 text-base-content/50">
                  Không tìm thấy thành viên nào
                </td>
              </tr>
            ) : (
              filteredMembers.map((member, index) => (
                <tr key={member.id} className={member.isAttended ? 'bg-primary/5' : ''}>
                  <td>
                    <input
                      type="checkbox"
                      className="checkbox checkbox-primary"
                      checked={member.isAttended}
                      onChange={(e) => handleAttendance(member.id, member.studentId, e.target.checked)}
                    />
                  </td>
                  <td>{index + 1}</td>
                  <td>
                    <span className="font-medium">{member.studentId}</span>
                  </td>
                  <td>
                    <div className="font-medium">{member.name}</div>
                  </td>
                  <td>
                    <span className="text-sm text-base-content/70">{member.email}</span>
                  </td>
                  <td>
                    <span className="text-sm text-base-content/70">{member.phone}</span>
                  </td>
                  <td>
                    {member.attendedAt ? (
                      <span className="text-sm text-success">{member.attendedAt}</span>
                    ) : (
                      <span className="text-sm text-base-content/40">Chưa điểm danh</span>
                    )}
                  </td>
                  <td>
                    {member.isAttended ? (
                      <span className="badge badge-soft badge-success gap-1">
                        <Check size={14} />
                        Đã điểm danh
                      </span>
                    ) : (
                      <span className="badge badge-soft badge-error gap-1">
                        <X size={14} />
                        Vắng
                      </span>
                    )}
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

      <div className="p-4 border-t">
        <div className="flex justify-between items-center text-sm">
          <span className="text-base-content/70">
            Hiển thị {filteredMembers.length} / {totalCount} thành viên
          </span>
          <div className="flex gap-4">
            <span>
              Có mặt: <span className="font-semibold text-success">{attendedCount}</span>
            </span>
            <span>
              Vắng: <span className="font-semibold text-error">{totalCount - attendedCount}</span>
            </span>
            <span>
              Tỷ lệ: <span className="font-semibold">{((attendedCount / totalCount) * 100).toFixed(1)}%</span>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RollCall;
