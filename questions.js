window.CATEGORIES = { SQL: "SQL", DB_DESIGN: "Thiết kế CSDL" };

window.QUIZ_DATA = [
  // ... nội dung các câu hỏi của bạn ở đây
  { id: "q001", category: window.CATEGORIES.SQL, content: "Foreign Key dùng để làm gì?", options: ["Mã hóa", "Liên kết bảng", "Xóa dữ liệu", "Giao diện"], correctIndex: 1, explanation: "Liên kết bảng con và bảng cha." },
  // ...
];

window.checkAnswer = function(questionId, selectedIndex) {
  const q = window.QUIZ_DATA.find(x => x.id === questionId);
  return { isCorrect: (selectedIndex === q.correctIndex), explanation: q.explanation };
};
