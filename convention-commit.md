Dưới đây là danh sách đầy đủ các **Type** (loại) commit phổ biến nhất theo chuẩn `@commitlint/config-conventional`:

### 1. Các loại chính (Hay dùng nhất)

| Loại         | Ý nghĩa                                                                                                 | Ví dụ                             |
| ------------ | ------------------------------------------------------------------------------------------------------- | --------------------------------- |
| **feat**     | (Feature) Thêm một tính năng mới cho sản phẩm.                                                          | `feat: add Google login`          |
| **fix**      | (Bug fix) Sửa một lỗi nào đó trong code.                                                                | `fix: resolve crash on mobile`    |
| **docs**     | (Documentation) Chỉ thay đổi về tài liệu (README, hướng dẫn...).                                        | `docs: update installation guide` |
| **style**    | (Formatting) Thay đổi về format code (khoảng trắng, dấu chấm phẩy...) mà không làm thay đổi logic code. | `style: fix indentation`          |
| **refactor** | (Refactoring) Sửa lại code cho tối ưu hơn nhưng không thêm tính năng cũng không sửa lỗi.                | `refactor: simplify user logic`   |

### 2. Các loại mở rộng (Dành cho quy trình Build & CI/CD)

| Loại       | Ý nghĩa                                                                                             | Ví dụ                                  |
| ---------- | --------------------------------------------------------------------------------------------------- | -------------------------------------- |
| **perf**   | (Performance) Code cải thiện về tốc độ xử lý hoặc hiệu năng.                                        | `perf: speed up data loading`          |
| **test**   | (Testing) Thêm test case mới hoặc sửa lại các bài test hiện có.                                     | `test: add unit test for auth`         |
| **build**  | Thay đổi ảnh hưởng đến hệ thống build (npm, bun, webpack, dependencies).                            | `build: upgrade bun version`           |
| **ci**     | Thay đổi cấu hình CI/CD (GitHub Actions, Docker, Jenkins...).                                       | `ci: add github action workflow`       |
| **chore**  | (Vặt vãnh) Các thay đổi nhỏ khác không liên quan đến logic hay test (ví dụ: cập nhật `.gitignore`). | `chore: add node_modules to gitignore` |
| **revert** | (Quay xe) Khi bạn muốn hủy bỏ một commit trước đó.                                                  | `revert: feat: add login`              |

---

### 3. Cấu trúc đầy đủ của một Commit chuẩn

Một commit message chuyên nghiệp thường có cấu trúc 3 phần:

```text
<type>(<scope>): <description>

[body]

[footer]

```

- **Type:** Một trong các loại ở bảng trên (Bắt buộc).
- **Scope:** Phạm vi thay đổi (Không bắt buộc). Ví dụ: `feat(auth): ...`, `fix(api): ...`.
- **Description:** Mô tả ngắn gọn về thay đổi (Bắt buộc).
- **Body:** Giải thích chi tiết tại sao làm vậy (Nếu cần).
- **Footer:** Dùng để ghi chú Breaking Changes hoặc ID của Task (ví dụ: `Fixes #123`).

---

### 4. Quy tắc "Vàng" khi viết commit

1. **Sử dụng dấu chấm than (`!`) cho Breaking Changes:** Nếu tính năng của bạn làm hỏng code cũ, hãy thêm `!` sau type.

- Ví dụ: `feat!: change API response structure`

2. **Không viết hoa chữ cái đầu** của phần description (nếu theo chuẩn gắt gao).
3. **Không có dấu chấm** ở cuối dòng description.
4. **Luôn dùng thể hiện tại** (Imperative mood). Ví dụ: dùng `add` thay vì `added` hoặc `adds`.

Bây giờ, với `commitlint` đã cài, nếu bạn gõ `git commit -m "cc"`, nó sẽ báo lỗi ngay. Bạn phải viết kiểu `feat: setup husky` thì nó mới cho qua.

Bạn có muốn mình cài đặt giúp một bộ "quy tắc riêng" cho dự án của bạn không, hay dùng chuẩn quốc tế này là đủ rồi?
