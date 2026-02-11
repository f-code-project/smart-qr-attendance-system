import { ArrowLeft } from 'lucide-react';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router';
import TitlePage from '../../../components/TitlePage';
import useTitle from '../../../hooks/useTitle';

interface EventFormData {
  eventName: string;
  eventCode: string;
  description: string;
  category: string;
  amount: number;
  startDate: string;
  endDate: string;
  status: string;
  sendEmail: string;
  participantsCount: number;
  location: string;
  note: string;
}

const AddEventPage = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState<EventFormData>({
    eventName: '',
    eventCode: '',
    description: '',
    category: '',
    amount: 0,
    startDate: '',
    endDate: '',
    status: 'ACTIVE',
    sendEmail: '1',
    participantsCount: 0,
    location: '',
    note: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: name === 'amount' || name === 'participantsCount' ? Number(value) : value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form data:', formData);
    // TODO: Call API to create event
    // navigate('/events');
  };

  const handleCancel = () => {
    navigate('/events');
  };
  useTitle('Tạo sự kiện mới');

  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <TitlePage title="Tạo sự kiện mới" description="Điền đầy đủ thông tin để tạo sự kiện cho câu lạc bộ" />
        <Link to="/events" className="btn btn-ghost btn-sm gap-2">
          <ArrowLeft size={18} />
          Quay lại
        </Link>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="bg-base-100 shadow-xs rounded-lg">
          <div className="p-4 border-b">
            <h3 className="text-base font-semibold">Thông tin cơ bản</h3>
          </div>
          <div className="p-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-xs mb-2">
                    Tên sự kiện <span className="text-error">*</span>
                  </span>
                </label>
                <input
                  type="text"
                  name="eventName"
                  value={formData.eventName}
                  onChange={handleChange}
                  placeholder="VD: Tất niên CLB 2026"
                  className="input input-bordered w-full"
                  required
                />
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text text-xs mb-2">
                    Mã sự kiện <span className="text-error">*</span>
                  </span>
                </label>
                <input
                  type="text"
                  name="eventCode"
                  value={formData.eventCode}
                  onChange={handleChange}
                  placeholder="VD: TN2026"
                  className="input input-bordered w-full"
                  disabled
                  required
                />
              </div>

              <div className="form-control md:col-span-2">
                <label className="label">
                  <span className="label-text text-xs mb-2">Mô tả sự kiện</span>
                </label>
                <textarea
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                  className="textarea textarea-bordered h-24 w-full"
                  placeholder="Nhập mô tả chi tiết về sự kiện..."
                ></textarea>
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text text-xs mb-2">
                    Thể loại sự kiện <span className="text-error">*</span>
                  </span>
                </label>
                <select
                  name="category"
                  value={formData.category}
                  onChange={handleChange}
                  className="select select-bordered w-full"
                  required
                >
                  <option value="">-- Chọn thể loại --</option>
                  <option value="EVENT">Sự kiện</option>
                  <option value="MEETING">Họp thường niên</option>
                </select>
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text text-xs mb-2">Trạng thái</span>
                </label>
                <select
                  name="status"
                  value={formData.status}
                  onChange={handleChange}
                  className="select select-bordered w-full"
                >
                  <option value="ACTIVE">Hoạt động</option>
                  <option value="INACTIVE">Tạm dừng</option>
                </select>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-base-100 shadow-xs rounded-lg">
          <div className="p-4 border-b">
            <h3 className="text-base font-semibold">Thời gian và địa điểm</h3>
          </div>
          <div className="p-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-xs mb-2">
                    Ngày giờ bắt đầu <span className="text-error">*</span>
                  </span>
                </label>
                <input
                  type="datetime-local"
                  name="startDate"
                  value={formData.startDate}
                  onChange={handleChange}
                  className="input input-bordered w-full"
                  required
                />
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text text-xs mb-2">
                    Ngày giờ kết thúc <span className="text-error">*</span>
                  </span>
                </label>
                <input
                  type="datetime-local"
                  name="endDate"
                  value={formData.endDate}
                  onChange={handleChange}
                  className="input input-bordered w-full"
                  required
                />
              </div>

              <div className="form-control md:col-span-2">
                <label className="label">
                  <span className="label-text text-xs mb-2">Địa điểm tổ chức</span>
                </label>
                <input
                  type="text"
                  name="location"
                  value={formData.location}
                  onChange={handleChange}
                  placeholder="VD: Hội trường A, Tầng 3, Nhà G2"
                  className="input input-bordered w-full"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="bg-base-100 shadow-xs rounded-lg">
          <div className="p-4 border-b">
            <h3 className="text-base font-semibold">Nhân sự tham gia</h3>
          </div>
          <div className="p-4">
            <div className="grid grid-cols-1 max-h-200">
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-xs mb-2">Danh sách nhân sự tham gia</span>
                </label>
                <div className="max-h-60 overflow-y-auto border rounded p-2 ">
                  {Array.from({ length: 100 }).map((_, idx) => (
                    <label key={idx} className="flex items-center gap-2 mb-1">
                      <input type="checkbox" name={`participant_${idx}`} className="checkbox checkbox-sm" />
                      [SE200947] Phạm Hoàng Tuấn #{idx + 1}
                    </label>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex gap-3 justify-end">
          <button type="button" onClick={handleCancel} className="btn btn-ghost">
            Hủy bỏ
          </button>
          <button type="submit" className="btn btn-primary">
            Tạo sự kiện
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddEventPage;
