# VNPT Hà Nội Quiz

Website tĩnh miễn phí để luyện vòng thi online Kỹ sư phần mềm/Kỹ sư CNTT.

## Cách chạy trên máy tính
Mở file `index.html` bằng Chrome/Edge.

## Đưa lên GitHub Pages
1. Tạo repository mới trên GitHub, ví dụ `vnpt-quiz`.
2. Upload toàn bộ file trong thư mục này.
3. Vào Settings → Pages.
4. Source: Deploy from branch.
5. Branch: main / root.
6. Lấy link dạng: `https://<username>.github.io/vnpt-quiz/`

## Đưa lên Vercel
1. Vào vercel.com.
2. New Project.
3. Import repo GitHub.
4. Deploy.

## Sửa câu hỏi
Mở file `questions.js`, sửa nội dung trong `window.QUIZ_DAYS`.

Mỗi câu gồm:
- question: câu hỏi
- options: 4 đáp án
- answer: số thứ tự đáp án đúng, bắt đầu từ 0
- explain: giải thích
- category: nhóm kiến thức
