import { Search } from 'lucide-react';

const FilterMembers = () => {
  return (
    <div className="bg-base-100 shadow-xs rounded-lg p-4">
      <h3 className="text-base font-semibold mb-4">Bộ lọc thành viên</h3>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="form-control">
          <label className="label">
            <span className="label-text text-xs">Tìm kiếm</span>
          </label>
          <div className="relative">
            <input type="text" className="input input-bordered w-full" placeholder="Tên hoặc MSSV..." />
          </div>
        </div>

        <div className="form-control">
          <label className="label">
            <span className="label-text text-xs">Chuyên ngành</span>
          </label>
          <select className="select select-bordered w-full">
            <option value="">Tất cả</option>
            <option value="SE">Software Engineering</option>
            <option value="IA">Information Assurance</option>
            <option value="AI">Artificial Intelligence</option>
            <option value="IoT">Internet of Things</option>
          </select>
        </div>

        <div className="form-control">
          <label className="label">
            <span className="label-text text-xs">Khóa</span>
          </label>
          <select className="select select-bordered w-full">
            <option value="">Tất cả</option>
            <option value="K15">K15</option>
            <option value="K16">K16</option>
            <option value="K17">K17</option>
            <option value="K18">K18</option>
          </select>
        </div>

        <div className="form-control">
          <label className="label">
            <span className="label-text text-xs">Trạng thái</span>
          </label>
          <select className="select select-bordered w-full">
            <option value="">Tất cả</option>
            <option value="ACTIVE">Hoạt động</option>
            <option value="INACTIVE">Không hoạt động</option>
          </select>
        </div>

        <div className="form-control">
          <label className="label">
            <span className="label-text text-xs">Số lần vi phạm</span>
          </label>
          <select className="select select-bordered w-full">
            <option value="">Tất cả</option>
            <option value="0">Chưa vi phạm</option>
            <option value="1-3">1-3 lần</option>
            <option value="4-6">4-6 lần</option>
            <option value="7+">Trên 7 lần</option>
          </select>
        </div>

        <div className="form-control">
          <label className="label">
            <span className="label-text text-xs">Năm gia nhập</span>
          </label>
          <select className="select select-bordered w-full">
            <option value="">Tất cả</option>
            <option value="2022">2022</option>
            <option value="2023">2023</option>
            <option value="2024">2024</option>
            <option value="2025">2025</option>
          </select>
        </div>

        <div className="form-control md:col-span-2 flex justify-end items-end">
          <div className="flex gap-2 w-full md:w-auto">
            <button className="btn btn-outline flex-1 md:flex-none">Xóa bộ lọc</button>
            <button className="btn btn-primary flex-1 md:flex-none">
              <Search size={16} />
              Tìm kiếm
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FilterMembers;
