const Paginate = () => {
  return (
    <div className="p-4 border-t flex justify-between items-center">
      <div className="text-sm text-gray-500">Hiển thị 1-10 trong tổng số 200 giao dịch</div>
      <div className="join">
        <input className="join-item btn btn-square" type="radio" name="options" aria-label="1" checked="checked" />
        <input className="join-item btn btn-square" type="radio" name="options" aria-label="2" />
        <input className="join-item btn btn-square" type="radio" name="options" aria-label="3" />
        <input className="join-item btn btn-square" type="radio" name="options" aria-label="4" />
      </div>
    </div>
  );
};

export default Paginate;
