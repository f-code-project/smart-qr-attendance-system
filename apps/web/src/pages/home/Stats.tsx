const Stats = () => {
  return (
    <div className="space-y-4 mb-6">
      <div className="stats stats-vertical lg:stats-horizontal shadow-xs bg-base-100 w-full">
        <div className="stat">
          <div className="stat-title">Tổng số dư quỹ</div>
          <div className="stat-value text-info">125.500.000đ</div>
          <div className="stat-desc">Số dư thực tế hiện tại</div>
        </div>

        <div className="stat">
          <div className="stat-title">Tổng thu tháng này</div>
          <div className="stat-value text-success">45.200.000đ</div>
          <div className="stat-desc">Tiền nhận được trong tháng</div>
        </div>

        <div className="stat">
          <div className="stat-title">Tổng chi tháng này</div>
          <div className="stat-value text-error">18.500.000đ</div>
          <div className="stat-desc">Tiền đã chi tiêu trong tháng</div>
        </div>

        <div className="stat">
          <div className="stat-title">Chênh lệch</div>
          <div className="stat-value text-success">+26.700.000đ</div>
          <div className="stat-desc">So với tháng trước</div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="stats shadow-xs bg-base-100">
          <div className="stat">
            <div className="stat-title">Thành viên đã đóng</div>
            <div className="stat-value">42/50</div>
            <div className="stat-desc">84% đã hoàn thành</div>
          </div>
        </div>

        <div className="stats shadow-xs bg-base-100">
          <div className="stat">
            <div className="stat-title">Vi phạm tháng này</div>
            <div className="stat-value text-warning">12</div>
            <div className="stat-desc">Trường hợp cần xử lý</div>
          </div>
        </div>

        <div className="stats shadow-xs bg-base-100">
          <div className="stat">
            <div className="stat-title">Sự kiện đang diễn ra</div>
            <div className="stat-value">2</div>
            <div className="stat-desc">Tất niên, Team building</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stats;
