window.ASSISTANT_CONFIG = {
  name: 'Trợ lý AI',
  greeting: 'Xin chào! Mình là trợ lý AI. Bạn cần mình hỗ trợ gì ạ?',
  fallback: 'Mình chưa hiểu rõ ý bạn. Bạn có thể nói lại hoặc chọn một gợi ý bên dưới nhé.',
  speechLang: 'vi-VN',
  // Nếu có máy chủ AI riêng: app sẽ POST {"message": "..."} và nhận {"reply": "..."}.
  // Để trống thì app dùng các câu trả lời mẫu trong "faq".
  apiEndpoint: '',
  suggestions: ['Đặt lịch hẹn', 'Bảng giá dịch vụ', 'Gặp nhân viên', 'Giờ làm việc'],
  faq: [
    { keys: ['xin chao', 'chao ban', 'hello', 'hi'], reply: 'Chào bạn! Mình có thể giúp bạn đặt lịch, xem bảng giá hoặc kết nối nhân viên.' },
    { keys: ['dat lich', 'hen', 'lich hen'], reply: 'Bạn muốn đặt lịch vào ngày và giờ nào ạ? Bạn cho mình biết họ tên và số điện thoại để nhân viên xác nhận nhé.' },
    { keys: ['gia', 'bang gia', 'chi phi', 'bao nhieu'], reply: 'Bạn cho mình biết dịch vụ bạn quan tâm, mình sẽ gửi bảng giá chi tiết. Hoặc để lại số điện thoại để nhân viên tư vấn.' },
    { keys: ['nhan vien', 'tu van', 'gap nguoi', 'goi dien'], reply: 'Mình sẽ chuyển bạn đến nhân viên tư vấn. Bạn vui lòng để lại số điện thoại, nhân viên sẽ gọi lại sớm nhất.' },
    { keys: ['gio lam viec', 'may gio', 'mo cua', 'dong cua'], reply: 'Bên mình làm việc từ 8 giờ sáng đến 6 giờ chiều, từ thứ Hai đến thứ Bảy.' },
    { keys: ['cam on', 'thanks'], reply: 'Không có gì ạ! Chúc bạn một ngày tốt lành.' }
  ]
};
