// Cấu hình trang thi môn "Lập và Đánh giá kế hoạch xạ trị" (hệ thống riêng, dự án Firebase riêng).
// Các khóa Firebase là công khai theo thiết kế; dữ liệu được bảo vệ bằng firestore.rules.
window.QUIZ_CONFIG = {
  SITE: "Thi Lập và Đánh giá kế hoạch xạ trị",
  // Đơn vị mặc định in trên phiếu khi thêm đề mới (sửa được ở từng đề)
  ORG: "Đại học Bách Khoa Hà Nội",
  // Thông tin sinh viên điền khi vào thi
  FIELDS: {
    idLabel: "Mã số sinh viên", idShort: "MSSV",
    idPattern: "^\\d{6,10}$", idHint: "mã số sinh viên (6–10 chữ số)",
    unitLabel: "Lớp", unitShort: "Lớp"
  },
  // THAY khối dưới bằng firebaseConfig của dự án Firebase MỚI (Bước 1.6 trong hướng dẫn)
  firebase: {
    apiKey: "AIzaSyCo3-xoR2Yt6EJ257RYIyuNDVxv9AHxXI8",
  authDomain: "ldgkh-thi.firebaseapp.com",
  projectId: "ldgkh-thi",
  storageBucket: "ldgkh-thi.firebasestorage.app",
  messagingSenderId: "974260168761",
  appId: "1:974260168761:web:9336cbe415cba57ec185e8",
  measurementId: "G-KMWQVVQ2KM"
  }
};
