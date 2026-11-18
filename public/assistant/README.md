# Trợ lý AI giọng nói (app điện thoại)

Khách mở app lên, bấm micro và nói chuyện với robot trợ lý. Robot trả lời bằng chữ và giọng đọc tiếng Việt.

## Chỉnh nội dung
Sửa `config.js`: tên, câu chào, các gợi ý nhanh, bộ câu hỏi - trả lời mẫu (`faq`).
Muốn nối với AI thật, điền `apiEndpoint`: app gửi `POST {"message": "..."}` và nhận `{"reply": "..."}`.

## Cài lên điện thoại
Đưa thư mục `public/` lên hosting HTTPS rồi mở `/assistant/index.html`:
- Android (Chrome): menu ⋮ -> Cài đặt ứng dụng.
- iPhone (Safari): Chia sẻ -> Thêm vào Màn hình chính.

Nhận giọng nói hoạt động tốt nhất trên Chrome Android. Trình duyệt không hỗ trợ thì khách vẫn nhập chữ được.
