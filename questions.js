const questions = [
  {
    "Test": 1,
    "title": "SQL cơ bản",
    "duration": 20,
    "questions": [
      {
        "question": "Foreign Key dùng để làm gì?",
        "options": [
          "Mã hóa dữ liệu",
          "Liên kết dữ liệu giữa bảng",
          "Xóa dữ liệu",
          "Tạo giao diện"
        ],
        "answer": 1,
        "explain": "Foreign Key liên kết bảng con với bảng cha.",
        "category": "SQL"
      },
      {
        "question": "WHERE khác HAVING ở điểm nào?",
        "options": [
          "WHERE lọc sau GROUP BY",
          "HAVING lọc trước GROUP BY",
          "WHERE lọc trước GROUP BY, HAVING lọc sau GROUP BY",
          "Không khác nhau"
        ],
        "answer": 2,
        "explain": "WHERE lọc dòng trước nhóm, HAVING lọc nhóm.",
        "category": "SQL"
      },
      {
        "question": "INNER JOIN trả về gì?",
        "options": [
          "Toàn bộ bảng trái",
          "Chỉ bản ghi khớp giữa hai bảng",
          "Toàn bộ bảng phải",
          "Tích Descartes"
        ],
        "answer": 1,
        "explain": "INNER JOIN chỉ lấy bản ghi thỏa điều kiện join.",
        "category": "SQL"
      },
      {
        "question": "LEFT JOIN trả về gì?",
        "options": [
          "Toàn bộ bảng trái và phần khớp bảng phải",
          "Chỉ bản ghi khớp",
          "Toàn bộ bảng phải",
          "Không có NULL"
        ],
        "answer": 0,
        "explain": "LEFT JOIN giữ toàn bộ dữ liệu bảng bên trái.",
        "category": "SQL"
      },
      {
        "question": "Index dùng để làm gì?",
        "options": [
          "Tăng tốc truy vấn",
          "Backup dữ liệu",
          "Mã hóa dữ liệu",
          "Xóa bảng"
        ],
        "answer": 0,
        "explain": "Index giúp tăng tốc tìm kiếm nhưng có thể làm chậm ghi.",
        "category": "SQL"
      },
      {
        "question": "ACID gồm gì?",
        "options": [
          "Atomicity, Consistency, Isolation, Durability",
          "Access, Control, Identity, Data",
          "Audit, Cache, Index, Disk",
          "Không đáp án nào"
        ],
        "answer": 0,
        "explain": "ACID là 4 tính chất của transaction.",
        "category": "SQL"
      },
      {
        "question": "GROUP BY dùng để làm gì?",
        "options": [
          "Nhóm dữ liệu",
          "Xóa dữ liệu",
          "Sắp xếp dữ liệu",
          "Tạo user"
        ],
        "answer": 0,
        "explain": "GROUP BY dùng nhóm dữ liệu theo cột.",
        "category": "SQL"
      },
      {
        "question": "ORDER BY dùng để làm gì?",
        "options": [
          "Lọc dữ liệu",
          "Sắp xếp dữ liệu",
          "Nhóm dữ liệu",
          "Tạo khóa"
        ],
        "answer": 1,
        "explain": "ORDER BY sắp xếp tăng/giảm.",
        "category": "SQL"
      },
      {
        "question": "COUNT(*) dùng để làm gì?",
        "options": [
          "Đếm dòng",
          "Tính tổng",
          "Tính trung bình",
          "Tìm lớn nhất"
        ],
        "answer": 0,
        "explain": "COUNT(*) đếm số bản ghi.",
        "category": "SQL"
      },
      {
        "question": "Primary Key có đặc điểm nào?",
        "options": [
          "Cho phép NULL",
          "Được trùng lặp",
          "Không NULL và không trùng",
          "Không tạo index"
        ],
        "answer": 2,
        "explain": "Primary Key dùng định danh duy nhất bản ghi.",
        "category": "SQL"
      }
    ]
  },
  {
    "day": 2,
    "title": "SQL nâng cao",
    "duration": 20,
    "questions": [
      {
        "question": "WHERE khác HAVING ở điểm nào?",
        "options": [
          "WHERE lọc sau GROUP BY",
          "HAVING lọc trước GROUP BY",
          "WHERE lọc trước GROUP BY, HAVING lọc sau GROUP BY",
          "Không khác nhau"
        ],
        "answer": 2,
        "explain": "WHERE lọc dòng trước nhóm, HAVING lọc nhóm.",
        "category": "SQL"
      },
      {
        "question": "INNER JOIN trả về gì?",
        "options": [
          "Toàn bộ bảng trái",
          "Chỉ bản ghi khớp giữa hai bảng",
          "Toàn bộ bảng phải",
          "Tích Descartes"
        ],
        "answer": 1,
        "explain": "INNER JOIN chỉ lấy bản ghi thỏa điều kiện join.",
        "category": "SQL"
      },
      {
        "question": "LEFT JOIN trả về gì?",
        "options": [
          "Toàn bộ bảng trái và phần khớp bảng phải",
          "Chỉ bản ghi khớp",
          "Toàn bộ bảng phải",
          "Không có NULL"
        ],
        "answer": 0,
        "explain": "LEFT JOIN giữ toàn bộ dữ liệu bảng bên trái.",
        "category": "SQL"
      },
      {
        "question": "Index dùng để làm gì?",
        "options": [
          "Tăng tốc truy vấn",
          "Backup dữ liệu",
          "Mã hóa dữ liệu",
          "Xóa bảng"
        ],
        "answer": 0,
        "explain": "Index giúp tăng tốc tìm kiếm nhưng có thể làm chậm ghi.",
        "category": "SQL"
      },
      {
        "question": "ACID gồm gì?",
        "options": [
          "Atomicity, Consistency, Isolation, Durability",
          "Access, Control, Identity, Data",
          "Audit, Cache, Index, Disk",
          "Không đáp án nào"
        ],
        "answer": 0,
        "explain": "ACID là 4 tính chất của transaction.",
        "category": "SQL"
      },
      {
        "question": "GROUP BY dùng để làm gì?",
        "options": [
          "Nhóm dữ liệu",
          "Xóa dữ liệu",
          "Sắp xếp dữ liệu",
          "Tạo user"
        ],
        "answer": 0,
        "explain": "GROUP BY dùng nhóm dữ liệu theo cột.",
        "category": "SQL"
      },
      {
        "question": "ORDER BY dùng để làm gì?",
        "options": [
          "Lọc dữ liệu",
          "Sắp xếp dữ liệu",
          "Nhóm dữ liệu",
          "Tạo khóa"
        ],
        "answer": 1,
        "explain": "ORDER BY sắp xếp tăng/giảm.",
        "category": "SQL"
      },
      {
        "question": "COUNT(*) dùng để làm gì?",
        "options": [
          "Đếm dòng",
          "Tính tổng",
          "Tính trung bình",
          "Tìm lớn nhất"
        ],
        "answer": 0,
        "explain": "COUNT(*) đếm số bản ghi.",
        "category": "SQL"
      },
      {
        "question": "Primary Key có đặc điểm nào?",
        "options": [
          "Cho phép NULL",
          "Được trùng lặp",
          "Không NULL và không trùng",
          "Không tạo index"
        ],
        "answer": 2,
        "explain": "Primary Key dùng định danh duy nhất bản ghi.",
        "category": "SQL"
      },
      {
        "question": "Foreign Key dùng để làm gì?",
        "options": [
          "Mã hóa dữ liệu",
          "Liên kết dữ liệu giữa bảng",
          "Xóa dữ liệu",
          "Tạo giao diện"
        ],
        "answer": 1,
        "explain": "Foreign Key liên kết bảng con với bảng cha.",
        "category": "SQL"
      }
    ]
  }
];
