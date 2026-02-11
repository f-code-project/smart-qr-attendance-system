# Dự án Smart QR-Attendance System

# I. Mục tiêu xây dựng

Hệ thống được đề xuất nhằm:

- Chuẩn hóa quy trình điểm danh tại các sự kiện nội bộ.
- Giảm thời gian kiểm tra thủ công và sai sót.
- Tăng tính minh bạch và chuyên nghiệp khi tổ chức hoạt động.
- Tự động hóa việc ghi nhận tham gia và tích hợp cơ chế điểm thưởng (F-Coin nếu có).

---

# II. Phạm vi áp dụng

Áp dụng cho:

- Họp thường niên
- Buổi học Crew
- Workshop, training nội bộ
- Sự kiện giới hạn số lượng
- ….

---

# III. Mô hình vận hành tại sự kiện

Hệ thống sử dụng **ít nhất** 2 \*\*\*\*thiết bị:

1. Laptop quản lý

   Dùng để theo dõi trạng thái điểm danh, hiển thị danh sách và xử lý thủ công khi xảy ra sự c.

2. Điện thoại

   Dùng để quét mã QR của thành viên.

---

# IV. Cơ chế hoạt động theo từng sự kiện

## 1. Kích hoạt chế độ điểm danh theo sự kiện

Tại mỗi sự kiện, sẽ tồn tại một chế độ điểm danh riêng biệt.

Trước khi bắt đầu:

- Sự kiện được tạo sẵn trên hệ thống.
- Các quy tắc riêng của sự kiện đã được thiết lập trước.

Tại thời điểm diễn ra:

- Trên laptop chọn đúng sự kiện đang onsite.
- Nhấn “Bắt đầu điểm danh”.

Ngay khi kích hoạt:

- Hệ thống **khóa** các sự kiện khác.
- Toàn bộ hoạt động quét chỉ được ghi nhận cho sự kiện đang mở.
- Giao diện hiển thị rõ ràng tên sự kiện để tránh nhầm lẫn.

Điện thoại quét không cần chọn lại sự kiện. Môi trường quét đã được xác định từ phía hệ thống.

---

## 2. Cơ chế quét mã QR

Mỗi thành viên sở hữu một mã QR cá nhân được tạo từ thông tin định danh riêng và có thời hạn.

Tại khu vực check-in:

- Mở giao diện quét trên điện thoại nội bộ.
- Bật camera.
- Đưa mã QR vào khung hình.

Sau khi quét:

- Hệ thống tự động xác thực thông tin.
- Kiểm tra xem thành viên có thuộc sự kiện đang mở hay không.
- Kiểm tra xem đã check-in trước đó chưa.
- Kiểm tra thời gian có nằm trong khung cho phép hay không.

Nếu hợp lệ:

- Ghi nhận tham gia ngay lập tức.
- Laptop cập nhật trạng thái theo thời gian thực.
- **Phát thông báo bằng giọng nói xác nhận tên thành viên. (VD: Phạm Hoàng Tuấn đã check in thành công)**
- Cộng điểm F-Coin (Nếu có - chỉ áp dụng thành viên CLB)

Nếu không hợp lệ:

- Thông báo rõ lý do: không thuộc sự kiện, đã check-in, hết thời gian, hoặc mã không hợp lệ.

---

# V. Thiết lập logic riêng cho từng loại sự kiện (Dự kiến)

Mỗi sự kiện có thể thiết lập quy tắc riêng trước khi diễn ra. Ví dụ:

## 1. Họp thường niên

- Chỉ cần một lần check-in.
- Cộng điểm cố định.
- Liên kết với hệ thống Đóng Quỹ CLB (Đến muộn sẽ tự động bắn mail cảnh báo)

## 2. Buổi học Crew

- Check-in trước giờ quy định được tính đủ.
- Sau mốc thời gian xác định sẽ ghi nhận là đi muộn.
- Sau một mốc khác có thể không được tính điểm.

……

---

# VI. Đồng bộ trạng thái theo thời gian thực

Ngay khi có người check-in:

- Danh sách trên laptop tự động cập nhật.
- Tên thành viên đổi trạng thái sang “Đã tham gia”.
- Tổng số người tham gia tăng lên.
- Tỷ lệ phần trăm tham gia được tính lại ngay lập tức.

---

# VII. Phát âm thanh xác nhận

Sau mỗi lượt quét hợp lệ:

- Hệ thống đọc to tên thành viên vừa xác nhận.
- Giúp kiểm soát trực tiếp tại chỗ.
- Tránh quét trùng hoặc nhầm người.
- Tạo cảm giác chuyên nghiệp khi tổ chức.

Nếu quét trùng, hệ thống sẽ phát thông báo phù hợp để tránh ghi nhận sai.

---

# VIII. Xử lý thủ công khi cần thiết

Trong trường hợp:

- Thành viên quên điện thoại.
- Thiết bị quét gặp sự cố.
- Mã QR không hiển thị được.

Giao diện trên laptop cho phép:

- Tìm kiếm theo tên hoặc mã số.
- Đánh dấu tham gia thủ công.
- Ghi chú lý do.

---

# IX. Tích hợp hệ thống điểm thưởng

Nếu có hệ thống F-Coin:

- Khi check-in thành công, điểm được cộng tự động.
- Lý do được ghi nhận rõ ràng: “Tham gia sự kiện A”.

Có thể thiết lập:

- Mức điểm khác nhau cho từng sự kiện.
- Thưởng thêm khi tham gia đủ số buổi.
- Trừ điểm khi đi muộn (có liên kết với hệ thống đóng quỹ).

---

# X. Báo cáo và thống kê sau sự kiện

Sau khi kết thúc:

- Xem danh sách đã tham gia.
- Xem danh sách vắng mặt.
- Xem tỷ lệ tham gia.
- Xuất báo cáo tổng hợp.

---

# XI. Cơ chế kiểm soát gian lận

Hệ thống được thiết kế để hạn chế tối đa việc gian lận:

- Không cho phép check-in nhiều lần.
- Mã QR có thời hạn.
- Chỉ thiết bị nội bộ mới có thể xác thực hợp lệ.
- Có thể hiển thị ảnh đại diện để đối chiếu trực tiếp nếu cần.
