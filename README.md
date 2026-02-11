# Hệ thống quản lý quỹ CLB

- Document: [Hệ thống quản lý quỹ CLB](https://www.notion.so/H-th-ng-qu-n-l-qu-CLB-2f3e38cf7abc80cb8e56dabde2df7fbb?source=copy_link)

**Ghi nhận quỹ tháng**

- Tự động ghi nhận giao dịch theo cú pháp: `MSSV_QT{Tháng}` (ví dụ: `SE200947_QT1`)
- Tự động xác định người nộp, tháng nộp và loại quỹ
- Áp dụng cho tất cả các tháng

---

**Ghi nhận quỹ sự kiện**

- Tự động ghi nhận giao dịch theo cú pháp: `MSSV_{TenSuKien}` (ví dụ: `SE200947_TatNien`)
- Quỹ sự kiện tách biệt với quỹ tháng
- Tên sự kiện do quản trị viên tạo và cấu hình
- Cho phép đóng tiền nhiều đợt cho cùng một sự kiện
- Tự động cộng dồn số tiền đã đóng
- Tự động gửi email xác nhận mỗi lần nhận tiền (đã nhận, còn thiếu hoặc đã đủ)

---

**Quản lý chi tiêu**

- Đồng bộ giao dịch chuyển tiền ra bên ngoài lên hệ thống

---

**Tổng hợp và báo cáo quỹ**

- Tổng số dư quỹ thực tế
- Tổng thu trong tháng
- Tổng chi trong tháng
- Chênh lệch quỹ so với tháng trước
- Tổng hợp theo từng sự kiện: thu, chi, số dư

---

**Quản lý vi phạm nội bộ**

- HR import danh sách vi phạm (ví dụ: không mặc áo CLB)
- Hệ thống tự động tạo mã QR cho từng trường hợp vi phạm
- Gửi email thông báo kèm mã QR đến cá nhân vi phạm

---

**Xuất dữ liệu**

- Xuất báo cáo ra file Excel
- Xuất dữ liệu sang Google Sheets
- Lọc theo tháng, sự kiện hoặc cá nhân

---

**Nhắc đóng quỹ tự động**

- Tự động gửi email nhắc đóng quỹ vào ngày 5 và ngày 15 hằng tháng
- Gửi cho các thành viên chưa đóng hoặc đóng chưa đủ

---

**Phân chia theo ROLE**

- ADMIN
- USER
