import { X } from 'lucide-react';
import { useRef } from 'react';

interface EditEventModalProps {
  // Props này sẽ được truyền vào khi có logic
}

const EditEventModal = () => {
  const modal = useRef<HTMLDialogElement | null>(null);

  const openModal = () => {
    modal.current?.showModal();
  };

  const closeModal = () => {
    modal.current?.close();
  };

  // Mock data để pre-fill form
  const eventData = {
    name: 'Tất niên 2026',
    eventCode: 'TatNien2026',
    description: 'Sự kiện tất niên cuối năm của CLB',
    type: 'EVENT',
    amountPerMember: 200000,
    startDate: '2026-12-20T00:00',
    endDate: '2026-12-25T23:59',
    status: 'ACTIVE',
    isNotification: 1,
    note: 'Vui lòng đóng đủ và đúng hạn',
  };

  return (
    <>
      <dialog id="edit_event_modal" className="modal" ref={modal}>
        <div className="modal-box max-w-3xl">
          <form method="dialog">
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2" onClick={closeModal}>
              <X />
            </button>
          </form>
          <h3 className="font-bold text-lg mb-4">Chỉnh sửa sự kiện</h3>

          <form className="space-y-4">
            {/* Thông tin cơ bản */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-xs">Tên sự kiện</span>
                  <span className="label-text-alt text-error">*</span>
                </label>
                <input
                  type="text"
                  defaultValue={eventData.name}
                  className="input input-bordered w-full"
                />
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text text-xs">Mã sự kiện</span>
                  <span className="label-text-alt text-error">*</span>
                </label>
                <input
                  type="text"
                  defaultValue={eventData.eventCode}
                  className="input input-bordered w-full"
                  disabled
                />
                <label className="label">
                  <span className="label-text-alt text-gray-500">Mã sự kiện không thể thay đổi</span>
                </label>
              </div>
            </div>

            {/* Mô tả */}
            <div className="form-control">
              <label className="label">
                <span className="label-text text-xs">Mô tả sự kiện</span>
              </label>
              <textarea
                className="textarea textarea-bordered h-24 w-full"
                defaultValue={eventData.description}
              ></textarea>
            </div>

            {/* Thể loại và số tiền */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-xs">Thể loại sự kiện</span>
                  <span className="label-text-alt text-error">*</span>
                </label>
                <select className="select select-bordered w-full" defaultValue={eventData.type}>
                  <option value="">Chọn thể loại</option>
                  <option value="EVENT">Sự kiện</option>
                  <option value="CLUB_FUND">Đóng quỹ CLB</option>
                  <option value="OTHERS">Khác</option>
                </select>
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text text-xs">Số tiền thu/người (đ)</span>
                  <span className="label-text-alt text-error">*</span>
                </label>
                <input
                  type="number"
                  defaultValue={eventData.amountPerMember}
                  className="input input-bordered w-full"
                  min="0"
                  step="1000"
                />
              </div>
            </div>

            {/* Thời gian */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-xs">Ngày bắt đầu</span>
                  <span className="label-text-alt text-error">*</span>
                </label>
                <input
                  type="datetime-local"
                  defaultValue={eventData.startDate}
                  className="input input-bordered w-full"
                />
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text text-xs">Ngày kết thúc</span>
                  <span className="label-text-alt text-error">*</span>
                </label>
                <input
                  type="datetime-local"
                  defaultValue={eventData.endDate}
                  className="input input-bordered w-full"
                />
              </div>
            </div>

            {/* Trạng thái và thông báo */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-xs">Trạng thái</span>
                </label>
                <select className="select select-bordered w-full" defaultValue={eventData.status}>
                  <option value="ACTIVE">Hoạt động</option>
                  <option value="INACTIVE">Chưa hoạt động</option>
                </select>
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text text-xs">Thông báo email xác nhận</span>
                </label>
                <select className="select select-bordered w-full" defaultValue={eventData.isNotification}>
                  <option value="1">Có gửi email</option>
                  <option value="0">Không gửi email</option>
                </select>
              </div>
            </div>

            {/* Ghi chú thêm */}
            <div className="form-control">
              <label className="label">
                <span className="label-text text-xs">Ghi chú</span>
              </label>
              <textarea
                className="textarea textarea-bordered h-20 w-full"
                defaultValue={eventData.note}
              ></textarea>
            </div>

            <div className="divider"></div>

            {/* Actions */}
            <div className="modal-action">
              <button type="button" className="btn btn-ghost" onClick={closeModal}>
                Hủy
              </button>
              <button type="submit" className="btn btn-primary">
                Lưu thay đổi
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

export default EditEventModal;
