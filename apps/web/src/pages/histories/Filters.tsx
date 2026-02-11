import { FileDown, RefreshCcw, Search } from 'lucide-react';

const Filters = () => {
  return (
    <div className="bg-base-100 shadow-xs rounded-lg p-4 mb-4">
      <h3 className="text-base font-semibold mb-4">Lọc lịch sử giao dịch</h3>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <div className="form-control">
          <label className="label">
            <span className="label-text text-sm mb-2">Từ ngày</span>
          </label>
          <input type="date" className="input input-bordered w-full" placeholder="Chọn ngày bắt đầu" />
        </div>

        <div className="form-control">
          <label className="label">
            <span className="label-text text-sm mb-2">Đến ngày</span>
          </label>
          <input type="date" className="input input-bordered w-full" placeholder="Chọn ngày kết thúc" />
        </div>

        <div className="form-control">
          <label className="label">
            <span className="label-text text-sm mb-2">Loại sự kiện</span>
          </label>
          <select className="select select-bordered w-full">
            <option value="">Tất cả</option>
            <option value="quy_thang">Quỹ tháng</option>
            <option value="tat_nien">Tất niên</option>
            <option value="team_building">Team Building</option>
            <option value="vi_pham">Vi phạm</option>
          </select>
        </div>

        <div className="form-control">
          <label className="label">
            <span className="label-text text-sm mb-2">Mã sinh viên</span>
          </label>
          <input type="text" className="input input-bordered w-full" placeholder="VD: SE200947" />
        </div>

        <div className="form-control">
          <label className="label">
            <span className="label-text text-sm mb-2">Tên thành viên</span>
          </label>
          <input type="text" className="input input-bordered w-full" placeholder="Nhập tên" />
        </div>

        <div className="form-control">
          <label className="label">
            <span className="label-text text-sm mb-2">Mã giao dịch</span>
          </label>
          <input type="text" className="input input-bordered w-full" placeholder="VD: SE200947_QT2" />
        </div>

        {/* Số tiền từ */}
        <div className="form-control">
          <label className="label">
            <span className="label-text text-sm mb-2">Số tiền từ (đ)</span>
          </label>
          <input type="number" className="input input-bordered w-full" placeholder="0" min="0" />
        </div>

        <div className="form-control">
          <label className="label">
            <span className="label-text text-sm mb-2">Số tiền đến (đ)</span>
          </label>
          <input type="number" className="input input-bordered w-full" placeholder="10000000" min="0" />
        </div>

        <div className="form-control">
          <label className="label">
            <span className="label-text text-sm mb-2">Trạng thái</span>
          </label>
          <select className="select select-bordered w-full">
            <option value="">Tất cả</option>
            <option value="success">Thành công</option>
            <option value="pending">Đang xử lý</option>
            <option value="failed">Thất bại</option>
          </select>
        </div>

        <label className="select">
          <span className="label">Type</span>
          <select>
            <option value="">Tất cả</option>
            <option value="success">Thành công</option>
            <option value="pending">Đang xử lý</option>
            <option value="failed">Thất bại</option>
          </select>
        </label>
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
        <button className="btn btn-sort btn-accent text-white/90">
          <FileDown size={15} />
          Xuất Excel
        </button>
      </div>
    </div>
  );
};

export default Filters;
