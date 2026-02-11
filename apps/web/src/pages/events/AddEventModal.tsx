import { Plus, X } from 'lucide-react';
import { useRef } from 'react';

const AddEventModal = () => {
  const modal = useRef<HTMLDialogElement | null>(null);

  const openModal = () => {
    modal.current?.showModal();
  };

  const closeModal = () => {
    modal.current?.close();
  };

  return (
    <>
      <button className="btn btn-primary" onClick={openModal}>
        <Plus size={18} />
        Tạo sự kiện mới
      </button>

      <dialog id="add_event_modal" className="modal" ref={modal}>
        <div className="modal-box max-w-3xl">
          <form method="dialog">
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2" onClick={closeModal}>
              <X />
            </button>
          </form>
          <h3 className="font-bold text-lg mb-4">Tạo sự kiện mới</h3>

          <form className="space-y-4">
            {/* Thông tin cơ bản */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-xs mb-2">Tên sự kiện</span>
                  <span className="label-text-alt text-error">*</span>
                </label>
                <input type="text" placeholder="VD: Tất niên 2026" className="input input-bordered w-full" />
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text text-xs mb-2">Mã sự kiện</span>
                  <span className="label-text-alt text-error">*</span>
                </label>
                <input type="text" placeholder="VD: TatNien2026" className="input input-bordered w-full" />
              </div>
            </div>

            {/* Mô tả */}
            <div className="form-control">
              <label className="label">
                <span className="label-text text-xs mb-2">Mô tả sự kiện</span>
              </label>
              <textarea
                className="textarea textarea-bordered h-24 w-full"
                placeholder="Nhập mô tả chi tiết về sự kiện..."
              ></textarea>
            </div>

            {/* Thể loại và số tiền */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-xs mb-2">Thể loại sự kiện</span>
                  <span className="label-text-alt text-error">*</span>
                </label>
                <select className="select select-bordered w-full">
                  <option value="">Chọn thể loại</option>
                  <option value="EVENT">Sự kiện</option>
                  <option value="CLUB_FUND">Đóng quỹ CLB</option>
                  <option value="OTHERS">Khác</option>
                </select>
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text text-xs mb-2">Số tiền thu/người (đ)</span>
                  <span className="label-text-alt text-error">*</span>
                </label>
                <input type="number" placeholder="50000" className="input input-bordered w-full" min="0" step="1000" />
              </div>
            </div>

            {/* Thời gian */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-xs mb-2">Ngày bắt đầu</span>
                  <span className="label-text-alt text-error">*</span>
                </label>
                <input type="datetime-local" className="input input-bordered w-full" />
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text text-xs mb-2">Ngày kết thúc</span>
                  <span className="label-text-alt text-error">*</span>
                </label>
                <input type="datetime-local" className="input input-bordered w-full" />
              </div>
            </div>

            {/* Trạng thái và thông báo */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-xs mb-2">Trạng thái</span>
                </label>
                <select className="select select-bordered w-full">
                  <option value="ACTIVE">Hoạt động</option>
                  <option value="INACTIVE">Chưa hoạt động</option>
                </select>
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text text-xs mb-2">Thông báo email xác nhận</span>
                </label>
                <select className="select select-bordered w-full">
                  <option value="1">Có gửi email</option>
                  <option value="0">Không gửi email</option>
                </select>
              </div>
            </div>

            {/* Ghi chú thêm */}
            <div className="form-control">
              <label className="label">
                <span className="label-text text-xs mb-2">Ghi chú</span>
              </label>
              <textarea
                className="textarea textarea-bordered h-20 w-full"
                placeholder="Ghi chú thêm (nếu có)..."
              ></textarea>
            </div>

            <div className="divider"></div>

            {/* Actions */}
            <div className="modal-action">
              <button type="button" className="btn btn-ghost" onClick={closeModal}>
                Hủy
              </button>
              <button type="submit" className="btn btn-primary">
                Tạo sự kiện
              </button>
            </div>
          </form>
        </div>
        <form method="dialog" className="modal-backdrop">
          <button onClick={closeModal}>close</button>
        </form>
      </dialog>
    </>
  );
};

export default AddEventModal;
