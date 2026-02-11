import { RefreshCcw } from 'lucide-react';

const FilterViolations = () => {
  return (
    <div className="bg-base-100 shadow-xs rounded-lg p-4 mb-4">
      <h3 className="text-base font-semibold mb-4">Lọc vi phạm</h3>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
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
            <span className="label-text text-xs mb-2">Loại vi phạm</span>
          </label>
          <select className="select select-bordered w-full">
            <option value="">Tất cả</option>
            <option value="NO_UNIFORM">Không mặc đồng phục</option>
            <option value="LATE_MEETING">Đi họp muộn</option>
            <option value="OTHER">Khác</option>
          </select>
        </div>

        <div className="form-control">
          <label className="label">
            <span className="label-text text-xs mb-2">Mã sinh viên</span>
          </label>
          <input type="text" className="input input-bordered w-full" placeholder="VD: SE200947" />
        </div>

        <div className="form-control">
          <label className="label">
            <span className="label-text text-xs mb-2">Tên thành viên</span>
          </label>
          <input type="text" className="input input-bordered w-full" placeholder="Nhập tên" />
        </div>

        <div className="form-control">
          <label className="label">
            <span className="label-text text-xs mb-2">Trạng thái</span>
          </label>
          <select className="select select-bordered w-full">
            <option value="">Tất cả</option>
            <option value="PENDING">Chưa đóng</option>
            <option value="PAID">Đã đóng</option>
          </select>
        </div>
      </div>

      <div className="flex gap-2 mt-6">
        <button className="btn btn-primary">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-5 h-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
            />
          </svg>
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

export default FilterViolations;
