import { RefreshCcw, Search } from 'lucide-react';

const FilterEvents = () => {
  return (
    <div className="bg-base-100 shadow-xs rounded-lg p-4">
      <h3 className="text-base font-semibold mb-4">Bộ lọc sự kiện</h3>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="form-control">
          <label className="label">
            <span className="label-text text-xs mb-2">Tìm kiếm</span>
          </label>
          <div className="relative">
            <input type="text" className="input input-bordered w-full " placeholder="Tên hoặc mã sự kiện..." />
          </div>
        </div>

        <div className="form-control">
          <label className="label">
            <span className="label-text text-xs mb-2">Thể loại</span>
          </label>
          <select className="select select-bordered w-full">
            <option value="">Tất cả</option>
            <option value="EVENT">Sự kiện</option>
            <option value="CLUB_FUND">Đóng quỹ CLB</option>
            <option value="OTHERS">Khác</option>
          </select>
        </div>

        <div className="form-control">
          <label className="label">
            <span className="label-text text-xs mb-2">Trạng thái</span>
          </label>
          <select className="select select-bordered w-full">
            <option value="">Tất cả</option>
            <option value="ACTIVE">Hoạt động</option>
            <option value="INACTIVE">Chưa hoạt động</option>
          </select>
        </div>

        <div className="form-control">
          <label className="label">
            <span className="label-text text-xs mb-2">Từ ngày</span>
          </label>
          <input type="date" className="input input-bordered w-full" />
        </div>

        <div className="form-control">
          <label className="label">
            <span className="label-text text-xs mb-2">Đến ngày</span>
          </label>
          <input type="date" className="input input-bordered w-full" />
        </div>

        <div className="form-control">
          <label className="label">
            <span className="label-text text-xs mb-2">Email thông báo</span>
          </label>
          <select className="select select-bordered w-full">
            <option value="">Tất cả</option>
            <option value="1">Có gửi email</option>
            <option value="0">Không gửi email</option>
          </select>
        </div>
      </div>
      <div className="flex gap-2 mt-6 pt-6 border-t-1 ">
        <button className="btn btn-primary">
          <Search size={15} />
          Tìm kiếm
        </button>
        <button className="btn btn-ghost">
          <RefreshCcw size={15} />
          Đặt lại
        </button>
      </div>
    </div>
  );
};

export default FilterEvents;
