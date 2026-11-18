# Titan Keygen (app điện thoại)

Trang `public/keygen.html` đã được chuyển thành app web cài được (PWA): có icon riêng, mở toàn màn hình và dùng được khi không có mạng.

## Cách dùng trên điện thoại

1. Đưa thư mục `public/` lên một hosting HTTPS (GitHub Pages, Netlify, Vercel, Cloudflare Pages...). Bắt buộc phải là HTTPS thì điện thoại mới cho cài app.
2. Mở `https://<tên-miền-của-bạn>/keygen.html` trên điện thoại.
   - Android (Chrome): menu ⋮ → **Cài đặt ứng dụng** / **Thêm vào màn hình chính**.
   - iPhone (Safari): nút Chia sẻ → **Thêm vào Màn hình chính**.
3. Mở app từ icon "Titan Keygen" trên màn hình chính.

## Chạy thử trên máy tính

```bash
cd public && python3 -m http.server 8000
```

Mở http://localhost:8000/keygen.html
