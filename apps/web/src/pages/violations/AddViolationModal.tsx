import { Plus, X } from 'lucide-react';
import { useRef } from 'react';

const AddViolationModal = () => {
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
        Thêm vi phạm
      </button>

      <dialog id="add_violation_modal" className="modal" ref={modal}>
        <div className="modal-box max-w-2xl">
          <form method="dialog">
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2" onClick={closeModal}>
              <X />
            </button>
          </form>
          <h3 className="font-bold text-lg mb-4">Thêm vi phạm mới</h3>

          <form className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-xs mb-2">Mã sinh viên</span>
                </label>
                <input type="text" placeholder="VD: SE200947" className="input input-bordered w-full" />
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text text-xs mb-2">Tên thành viên</span>
                </label>
                <input
                  type="text"
                  placeholder="Tên thành viên"
                  className="input input-bordered w-full"
                  value="Phạm Hoàng Tuấn"
                  disabled
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-xs mb-2">Loại vi phạm</span>
                </label>
                <select className="select select-bordered w-full">
                  <option value="">Chọn loại vi phạm</option>
                  <option value="NO_UNIFORM">Không mặc đồng phục</option>
                  <option value="LATE_MEETING">Đi họp muộn</option>
                  <option value="OTHER">Khác</option>
                </select>
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text text-xs mb-2">Số tiền phạt (đ)</span>
                </label>
                <input type="number" placeholder="20000" className="input input-bordered w-full" min="0" />
              </div>
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text text-xs mb-2">Thời gian vi phạm</span>
              </label>
              <input type="datetime-local" className="input input-bordered w-full" />
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text text-xs mb-2">Ghi chú</span>
              </label>
              <textarea
                className="textarea textarea-bordered h-24 w-full"
                placeholder="Nhập ghi chú (nếu có)"
              ></textarea>
            </div>

            <div className="modal-action">
              <button type="button" className="btn btn-ghost" onClick={closeModal}>
                Hủy
              </button>
              <button type="submit" className="btn btn-primary">
                Thêm vi phạm
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

export default AddViolationModal;
