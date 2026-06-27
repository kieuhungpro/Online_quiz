window.QUIZ_DAYS = window.CATEGORIES = { SQL: "SQL", DB_DESIGN: "Thiết kế CSDL" };

window.QUIZ_DATA = [
  { id: "q001", category: window.CATEGORIES.SQL, content: "Foreign Key dùng để làm gì?", options: ["Mã hóa", "Liên kết bảng", "Xóa dữ liệu", "Giao diện"], correctIndex: 1, explanation: "Liên kết bảng con và bảng cha." },
  { id: "q002", category: window.CATEGORIES.SQL, content: "WHERE khác HAVING ở điểm nào?", options: ["WHERE lọc sau GROUP BY", "HAVING lọc trước GROUP BY", "WHERE lọc trước, HAVING lọc sau", "Không khác nhau"], correctIndex: 2, explanation: "WHERE lọc hàng trước nhóm, HAVING lọc sau nhóm." },
  { id: "q003", category: window.CATEGORIES.SQL, content: "Lệnh xóa dữ liệu nhưng giữ cấu trúc?", options: ["DELETE", "DROP", "TRUNCATE", "REMOVE"], correctIndex: 2, explanation: "TRUNCATE giữ lại cấu trúc bảng." },
  { id: "q004", category: window.CATEGORIES.SQL, content: "Từ khóa loại bỏ dòng trùng lặp?", options: ["UNIQUE", "DISTINCT", "DIFFERENT", "REMOVE"], correctIndex: 1, explanation: "DISTINCT dùng để lọc giá trị trùng." },
  { id: "q005", category: window.CATEGORIES.SQL, content: "LEFT JOIN trả về gì?", options: ["Chỉ giao nhau", "Tất cả bảng trái", "Tất cả bảng phải", "Cả hai bảng"], correctIndex: 1, explanation: "LEFT JOIN lấy toàn bộ bên trái và phần khớp bên phải." },
  // ... Tôi sẽ tạo tiếp các đợt 50 câu nếu bạn cần.
];

window.checkAnswer = function(questionId, selectedIndex) {
  const q = window.QUIZ_DATA.find(x => x.id === questionId);
  return { isCorrect: (selectedIndex === q.correctIndex), explanation: q.explanation };
};
