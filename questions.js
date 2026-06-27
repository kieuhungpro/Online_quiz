// VNPT Exam Bank - Bộ 01: Java Core + OOP
// 50 câu - đáp án đã random cân bằng A/B/C/D
// Thống kê đáp án: A=13, B=12, C=13, D=12

window.QUIZ_DAYS = [
  {
    "day": 1,
    "title": "Bộ 01 - Java Core + OOP",
    "duration": 60,
    "questions": [
      {
        "id": "JAVA-OOP-001",
        "category": "Java Core + OOP",
        "topic": "String",
        "difficulty": 1,
        "question": "Trong Java, phát biểu nào đúng về String?",
        "options": [
          "String chỉ được lưu trong Stack.",
          "String là mutable object.",
          "String là immutable object.",
          "String không override equals()."
        ],
        "answer": 2,
        "explain": "String là immutable. Khi thay đổi chuỗi, Java thường tạo object mới hoặc dùng tối ưu String Pool."
      },
      {
        "id": "JAVA-OOP-002",
        "category": "Java Core + OOP",
        "topic": "String",
        "difficulty": 1,
        "question": "Kết quả của đoạn code sau là gì?\nString s1 = \"VNPT\";\nString s2 = new String(\"VNPT\");\nSystem.out.println(s1 == s2);",
        "options": [
          "Runtime Error",
          "false",
          "true",
          "Compile Error"
        ],
        "answer": 1,
        "explain": "`==` so sánh tham chiếu object. s1 ở String Pool, còn s2 là object mới."
      },
      {
        "id": "JAVA-OOP-003",
        "category": "Java Core + OOP",
        "topic": "String",
        "difficulty": 1,
        "question": "Kết quả của đoạn code sau là gì?\nString s1 = \"VNPT\";\nString s2 = new String(\"VNPT\");\nSystem.out.println(s1.equals(s2));",
        "options": [
          "Compile Error",
          "true",
          "NullPointerException",
          "false"
        ],
        "answer": 1,
        "explain": "`equals()` của String so sánh nội dung chuỗi."
      },
      {
        "id": "JAVA-OOP-004",
        "category": "Java Core + OOP",
        "topic": "String",
        "difficulty": 1,
        "question": "StringBuilder có đặc điểm nào đúng?",
        "options": [
          "Immutable và thread-safe.",
          "Chỉ dùng được với kiểu int.",
          "Mutable và luôn thread-safe.",
          "Mutable và không thread-safe."
        ],
        "answer": 3,
        "explain": "StringBuilder thay đổi được nội dung nhưng không synchronized nên không an toàn mặc định trong đa luồng."
      },
      {
        "id": "JAVA-OOP-005",
        "category": "Java Core + OOP",
        "topic": "String",
        "difficulty": 1,
        "question": "StringBuffer khác StringBuilder chủ yếu ở điểm nào?",
        "options": [
          "StringBuffer không cho nối chuỗi.",
          "StringBuffer là immutable.",
          "StringBuffer luôn nhanh hơn StringBuilder.",
          "StringBuffer thread-safe hơn do các method quan trọng được synchronized."
        ],
        "answer": 3,
        "explain": "StringBuffer synchronized nên an toàn hơn trong đa luồng nhưng thường chậm hơn."
      },
      {
        "id": "JAVA-OOP-006",
        "category": "Java Core + OOP",
        "topic": "OOP",
        "difficulty": 1,
        "question": "Trong Java, OOP gồm 4 tính chất cơ bản nào?",
        "options": [
          "Đóng gói, kế thừa, đa hình, trừu tượng.",
          "Bean, entity, repository, service.",
          "HTTP, TCP, UDP, DNS.",
          "Index, view, trigger, procedure."
        ],
        "answer": 0,
        "explain": "OOP gồm Encapsulation, Inheritance, Polymorphism và Abstraction."
      },
      {
        "id": "JAVA-OOP-007",
        "category": "Java Core + OOP",
        "topic": "OOP",
        "difficulty": 1,
        "question": "Overloading trong Java là gì?",
        "options": [
          "Một interface có nhiều implementation.",
          "Lớp con ghi đè phương thức của lớp cha.",
          "Một class chỉ có một constructor.",
          "Nhiều phương thức cùng tên nhưng khác danh sách tham số."
        ],
        "answer": 3,
        "explain": "Overloading dựa trên khác signature như số lượng, thứ tự hoặc kiểu tham số."
      },
      {
        "id": "JAVA-OOP-008",
        "category": "Java Core + OOP",
        "topic": "OOP",
        "difficulty": 1,
        "question": "Overriding trong Java là gì?",
        "options": [
          "Nhiều method cùng tên nhưng khác tham số.",
          "Ẩn biến local bằng biến global.",
          "Lớp con định nghĩa lại phương thức đã có ở lớp cha.",
          "Tạo object bằng từ khóa new."
        ],
        "answer": 2,
        "explain": "Overriding giúp lớp con thay đổi hành vi method kế thừa."
      },
      {
        "id": "JAVA-OOP-009",
        "category": "Java Core + OOP",
        "topic": "OOP",
        "difficulty": 1,
        "question": "Từ khóa final khi áp dụng cho class có ý nghĩa gì?",
        "options": [
          "Class đó tự động thread-safe.",
          "Class đó chỉ chứa static method.",
          "Class đó không thể bị kế thừa.",
          "Class đó không thể tạo object."
        ],
        "answer": 2,
        "explain": "final class không cho class khác extends."
      },
      {
        "id": "JAVA-OOP-010",
        "category": "Java Core + OOP",
        "topic": "OOP",
        "difficulty": 1,
        "question": "Từ khóa final khi áp dụng cho biến có ý nghĩa gì?",
        "options": [
          "Object bên trong biến luôn immutable.",
          "Biến không thể được gán lại sau khi đã khởi tạo.",
          "Biến được lưu ngoài Heap.",
          "Biến chỉ dùng trong static method."
        ],
        "answer": 1,
        "explain": "final ngăn gán lại biến. Nếu biến là reference tới object mutable thì object vẫn có thể đổi trạng thái."
      },
      {
        "id": "JAVA-OOP-011",
        "category": "Java Core + OOP",
        "topic": "OOP",
        "difficulty": 1,
        "question": "Abstract class khác interface ở điểm nào trong thiết kế thông thường?",
        "options": [
          "Abstract class có thể có state và constructor.",
          "Interface luôn có constructor.",
          "Abstract class không thể có method đã implement.",
          "Interface không thể khai báo method."
        ],
        "answer": 0,
        "explain": "Abstract class có thể có field, constructor và method đã cài đặt."
      },
      {
        "id": "JAVA-OOP-012",
        "category": "Java Core + OOP",
        "topic": "OOP",
        "difficulty": 1,
        "question": "Khi nào nên ưu tiên interface?",
        "options": [
          "Khi chỉ cần tạo private constructor.",
          "Khi muốn lưu trạng thái bắt buộc cho mọi object.",
          "Khi muốn cấm mọi class implement.",
          "Khi muốn định nghĩa hợp đồng hành vi cho nhiều class không nhất thiết cùng cây kế thừa."
        ],
        "answer": 3,
        "explain": "Interface phù hợp để mô tả hành vi chung và giảm phụ thuộc vào class cụ thể."
      },
      {
        "id": "JAVA-OOP-013",
        "category": "Java Core + OOP",
        "topic": "OOP",
        "difficulty": 1,
        "question": "Encapsulation có mục đích chính là gì?",
        "options": [
          "Bắt buộc mọi class phải extends nhau.",
          "Tự động tạo REST API.",
          "Che giấu dữ liệu nội bộ và kiểm soát truy cập qua method.",
          "Tăng tốc độ truy vấn SQL."
        ],
        "answer": 2,
        "explain": "Đóng gói giúp bảo vệ trạng thái object và giảm phụ thuộc trực tiếp."
      },
      {
        "id": "JAVA-OOP-014",
        "category": "Java Core + OOP",
        "topic": "OOP",
        "difficulty": 1,
        "question": "Polymorphism trong Java thể hiện rõ nhất ở tình huống nào?",
        "options": [
          "Một file Java có nhiều comment.",
          "Biến kiểu cha/interface tham chiếu tới object lớp con và gọi method override.",
          "Một biến primitive đổi kiểu ngầm định.",
          "Một câu SQL có nhiều JOIN."
        ],
        "answer": 1,
        "explain": "Đa hình cho phép cùng lời gọi method nhưng hành vi phụ thuộc object runtime."
      },
      {
        "id": "JAVA-OOP-015",
        "category": "Java Core + OOP",
        "topic": "Operator",
        "difficulty": 1,
        "question": "Kết quả của đoạn code sau là gì?\nint a = 5;\nSystem.out.println(a++);",
        "options": [
          "6",
          "Runtime Error",
          "Compile Error",
          "5"
        ],
        "answer": 3,
        "explain": "a++ là hậu tố: dùng giá trị hiện tại trước, sau đó mới tăng."
      },
      {
        "id": "JAVA-OOP-016",
        "category": "Java Core + OOP",
        "topic": "Operator",
        "difficulty": 2,
        "question": "Kết quả của đoạn code sau là gì?\nint a = 5;\nSystem.out.println(++a);",
        "options": [
          "Compile Error",
          "Runtime Error",
          "6",
          "5"
        ],
        "answer": 2,
        "explain": "++a là tiền tố: tăng trước rồi mới sử dụng giá trị."
      },
      {
        "id": "JAVA-OOP-017",
        "category": "Java Core + OOP",
        "topic": "Primitive",
        "difficulty": 2,
        "question": "Kiểu dữ liệu nào là primitive trong Java?",
        "options": [
          "Integer",
          "BigDecimal",
          "int",
          "String"
        ],
        "answer": 2,
        "explain": "int là primitive. String, Integer và BigDecimal là object."
      },
      {
        "id": "JAVA-OOP-018",
        "category": "Java Core + OOP",
        "topic": "Wrapper",
        "difficulty": 2,
        "question": "Wrapper class của int là gì?",
        "options": [
          "Integer",
          "Long",
          "NumberOnly",
          "Int"
        ],
        "answer": 0,
        "explain": "int có wrapper class tương ứng là Integer."
      },
      {
        "id": "JAVA-OOP-019",
        "category": "Java Core + OOP",
        "topic": "Wrapper",
        "difficulty": 2,
        "question": "Autoboxing trong Java là gì?",
        "options": [
          "Tự động chuyển String sang SQL.",
          "Tự động đóng file.",
          "Tự động tạo thread.",
          "Tự động chuyển primitive sang wrapper object."
        ],
        "answer": 3,
        "explain": "Ví dụ int được tự động đóng gói thành Integer khi cần."
      },
      {
        "id": "JAVA-OOP-020",
        "category": "Java Core + OOP",
        "topic": "Wrapper",
        "difficulty": 2,
        "question": "Unboxing trong Java là gì?",
        "options": [
          "Tự động chuyển wrapper object sang primitive.",
          "Tự động giải nén file zip.",
          "Tự động chuyển class sang interface.",
          "Tự động rollback transaction."
        ],
        "answer": 0,
        "explain": "Ví dụ Integer được tự động chuyển về int khi cần."
      },
      {
        "id": "JAVA-OOP-021",
        "category": "Java Core + OOP",
        "topic": "Wrapper",
        "difficulty": 2,
        "question": "Điều gì có thể xảy ra khi unboxing một Integer đang null?",
        "options": [
          "ClassCastException.",
          "Compile Error luôn xảy ra.",
          "Giá trị tự động thành 0.",
          "NullPointerException."
        ],
        "answer": 3,
        "explain": "Unboxing null sang primitive sẽ gây NullPointerException."
      },
      {
        "id": "JAVA-OOP-022",
        "category": "Java Core + OOP",
        "topic": "Collection",
        "difficulty": 2,
        "question": "ArrayList phù hợp nhất khi nào?",
        "options": [
          "Cần truy cập phần tử theo index nhiều.",
          "Cần tự động thread-safe.",
          "Cần lưu key-value.",
          "Cần thêm/xóa liên tục ở đầu danh sách rất lớn."
        ],
        "answer": 0,
        "explain": "ArrayList dựa trên mảng động nên truy cập random theo index nhanh."
      },
      {
        "id": "JAVA-OOP-023",
        "category": "Java Core + OOP",
        "topic": "Collection",
        "difficulty": 2,
        "question": "LinkedList trong Java là cấu trúc gì?",
        "options": [
          "Hash table.",
          "Mảng cố định.",
          "Cây nhị phân cân bằng.",
          "Danh sách liên kết đôi."
        ],
        "answer": 3,
        "explain": "LinkedList là doubly-linked list và implement List, Deque."
      },
      {
        "id": "JAVA-OOP-024",
        "category": "Java Core + OOP",
        "topic": "Collection",
        "difficulty": 2,
        "question": "HashMap dùng để lưu dữ liệu dạng nào?",
        "options": [
          "Chỉ stack LIFO.",
          "Chỉ danh sách có thứ tự.",
          "Chỉ hàng đợi FIFO.",
          "Key-value."
        ],
        "answer": 3,
        "explain": "Map lưu dữ liệu theo cặp key-value."
      },
      {
        "id": "JAVA-OOP-025",
        "category": "Java Core + OOP",
        "topic": "Collection",
        "difficulty": 2,
        "question": "HashMap có cho phép null key không?",
        "options": [
          "Cho phép nhiều null key.",
          "Có, cho phép tối đa một null key.",
          "Không bao giờ.",
          "Chỉ cho phép null key khi synchronized."
        ],
        "answer": 1,
        "explain": "HashMap cho phép một null key và nhiều null value."
      },
      {
        "id": "JAVA-OOP-026",
        "category": "Java Core + OOP",
        "topic": "Collection",
        "difficulty": 2,
        "question": "ConcurrentHashMap có cho phép null key hoặc null value không?",
        "options": [
          "Không.",
          "Có nhiều null key.",
          "Chỉ null value, không null key.",
          "Có một null key."
        ],
        "answer": 0,
        "explain": "ConcurrentHashMap không cho phép null để tránh mơ hồ trong môi trường concurrent."
      },
      {
        "id": "JAVA-OOP-027",
        "category": "Java Core + OOP",
        "topic": "Collection",
        "difficulty": 2,
        "question": "HashSet có đặc điểm nào?",
        "options": [
          "Cho phép key-value.",
          "Không cho phần tử trùng lặp theo equals/hashCode.",
          "Luôn sort tăng dần.",
          "Luôn giữ thứ tự insert."
        ],
        "answer": 1,
        "explain": "HashSet không lưu phần tử trùng theo logic equals/hashCode."
      },
      {
        "id": "JAVA-OOP-028",
        "category": "Java Core + OOP",
        "topic": "Collection",
        "difficulty": 2,
        "question": "TreeSet có đặc điểm nào?",
        "options": [
          "Lưu phần tử theo thứ tự sắp xếp.",
          "Luôn giữ thứ tự thêm vào.",
          "Chỉ lưu được String.",
          "Cho phép phần tử trùng lặp."
        ],
        "answer": 0,
        "explain": "TreeSet sắp xếp theo natural order hoặc Comparator."
      },
      {
        "id": "JAVA-OOP-029",
        "category": "Java Core + OOP",
        "topic": "Collection",
        "difficulty": 2,
        "question": "LinkedHashMap khác HashMap ở điểm nào?",
        "options": [
          "LinkedHashMap không cho null value.",
          "LinkedHashMap không lưu key-value.",
          "LinkedHashMap luôn thread-safe.",
          "LinkedHashMap duy trì thứ tự duyệt ổn định theo insertion/access order."
        ],
        "answer": 3,
        "explain": "LinkedHashMap có danh sách liên kết để duy trì thứ tự duyệt."
      },
      {
        "id": "JAVA-OOP-030",
        "category": "Java Core + OOP",
        "topic": "Object",
        "difficulty": 2,
        "question": "equals() và hashCode() có quan hệ đúng nào?",
        "options": [
          "Nếu hashCode bằng nhau thì equals chắc chắn true.",
          "Không có quan hệ gì.",
          "Nếu hai object equals true thì hashCode phải bằng nhau.",
          "Chỉ áp dụng cho String."
        ],
        "answer": 2,
        "explain": "Contract bắt buộc equals true thì hashCode giống nhau; hash collision vẫn có thể xảy ra."
      },
      {
        "id": "JAVA-OOP-031",
        "category": "Java Core + OOP",
        "topic": "Collection",
        "difficulty": 2,
        "question": "Nếu dùng object mutable làm key trong HashMap rồi thay đổi field dùng trong hashCode, rủi ro là gì?",
        "options": [
          "Có thể không tìm lại được value bằng key đó.",
          "HashMap tự động cập nhật vị trí key.",
          "Compile Error.",
          "JVM tự rollback thay đổi."
        ],
        "answer": 0,
        "explain": "Thay đổi hashCode sau khi đưa vào HashMap làm sai bucket tra cứu."
      },
      {
        "id": "JAVA-OOP-032",
        "category": "Java Core + OOP",
        "topic": "Exception",
        "difficulty": 2,
        "question": "Checked exception là gì?",
        "options": [
          "Warning không ảnh hưởng compile.",
          "Exception chỉ xảy ra ở runtime và không cần khai báo.",
          "Exception bị compiler yêu cầu catch hoặc throws.",
          "Lỗi nghiêm trọng của JVM."
        ],
        "answer": 2,
        "explain": "Checked exception phải được xử lý hoặc khai báo throws."
      },
      {
        "id": "JAVA-OOP-033",
        "category": "Java Core + OOP",
        "topic": "Exception",
        "difficulty": 2,
        "question": "RuntimeException thuộc nhóm nào?",
        "options": [
          "Checked exception.",
          "Unchecked exception.",
          "Error.",
          "Annotation."
        ],
        "answer": 1,
        "explain": "RuntimeException và các lớp con là unchecked exception."
      },
      {
        "id": "JAVA-OOP-034",
        "category": "Java Core + OOP",
        "topic": "Exception",
        "difficulty": 2,
        "question": "finally block trong Java thường dùng để làm gì?",
        "options": [
          "Thực hiện logic dọn dẹp tài nguyên sau try/catch.",
          "Chỉ chạy khi có return.",
          "Chỉ chạy khi không có exception.",
          "Chỉ dùng để khai báo biến static."
        ],
        "answer": 0,
        "explain": "finally thường chạy sau try/catch để cleanup, trừ một số trường hợp đặc biệt như System.exit."
      },
      {
        "id": "JAVA-OOP-035",
        "category": "Java Core + OOP",
        "topic": "Exception",
        "difficulty": 2,
        "question": "try-with-resources yêu cầu resource implement interface nào?",
        "options": [
          "Runnable.",
          "AutoCloseable.",
          "Serializable.",
          "Cloneable."
        ],
        "answer": 1,
        "explain": "Resource trong try-with-resources cần implement AutoCloseable hoặc Closeable."
      },
      {
        "id": "JAVA-OOP-036",
        "category": "Java Core + OOP",
        "topic": "JVM",
        "difficulty": 3,
        "question": "Garbage Collector thu hồi object khi nào?",
        "options": [
          "Khi biến final được khai báo.",
          "Khi object không còn reachable từ GC roots.",
          "Ngay khi object ra khỏi method trong mọi trường hợp.",
          "Khi CPU đạt 100%."
        ],
        "answer": 1,
        "explain": "GC dựa trên reachability, không đơn giản chỉ là hết scope."
      },
      {
        "id": "JAVA-OOP-037",
        "category": "Java Core + OOP",
        "topic": "JVM",
        "difficulty": 3,
        "question": "Memory leak trong Java thường do nguyên nhân nào?",
        "options": [
          "Object không còn cần nhưng vẫn còn tham chiếu giữ lại.",
          "Dùng quá nhiều biến primitive.",
          "Dùng package private class.",
          "Java không có Garbage Collector."
        ],
        "answer": 0,
        "explain": "Leak xảy ra khi object vẫn reachable dù không còn được sử dụng."
      },
      {
        "id": "JAVA-OOP-038",
        "category": "Java Core + OOP",
        "topic": "Thread",
        "difficulty": 3,
        "question": "Từ khóa synchronized dùng để làm gì?",
        "options": [
          "Tạo REST API.",
          "Đồng bộ truy cập vào vùng tài nguyên dùng chung.",
          "Tăng tốc mọi method.",
          "Tự động serialize object."
        ],
        "answer": 1,
        "explain": "synchronized dùng monitor lock để tránh race condition."
      },
      {
        "id": "JAVA-OOP-039",
        "category": "Java Core + OOP",
        "topic": "Thread",
        "difficulty": 3,
        "question": "volatile KHÔNG đảm bảo điều gì?",
        "options": [
          "Giúp thread thấy giá trị mới hơn.",
          "Có thể dùng cho flag dừng thread đơn giản.",
          "Không đảm bảo atomic cho thao tác count++.",
          "Đảm bảo visibility."
        ],
        "answer": 2,
        "explain": "count++ gồm nhiều bước đọc-sửa-ghi, volatile không biến thao tác này thành atomic."
      },
      {
        "id": "JAVA-OOP-040",
        "category": "Java Core + OOP",
        "topic": "Collection",
        "difficulty": 3,
        "question": "ArrayList có thread-safe mặc định không?",
        "options": [
          "Có.",
          "Chỉ trên Java 17.",
          "Không.",
          "Chỉ khi size nhỏ hơn 10."
        ],
        "answer": 2,
        "explain": "ArrayList không synchronized. Nhiều thread sửa đồng thời cần cơ chế đồng bộ."
      },
      {
        "id": "JAVA-OOP-041",
        "category": "Java Core + OOP",
        "topic": "Collection",
        "difficulty": 3,
        "question": "Iterator fail-fast nghĩa là gì?",
        "options": [
          "Iterator tự copy toàn bộ collection.",
          "Iterator luôn chạy nhanh hơn for loop.",
          "Có thể ném ConcurrentModificationException khi collection bị sửa cấu trúc ngoài iterator.",
          "Iterator tự khóa collection."
        ],
        "answer": 2,
        "explain": "Fail-fast giúp phát hiện sửa đổi đồng thời không hợp lệ khi duyệt."
      },
      {
        "id": "JAVA-OOP-042",
        "category": "Java Core + OOP",
        "topic": "Generic",
        "difficulty": 3,
        "question": "Generic trong Java giúp ích gì?",
        "options": [
          "Tăng type-safety tại compile time.",
          "Bỏ cần JVM.",
          "Tự động mã hóa dữ liệu.",
          "Tăng tốc network."
        ],
        "answer": 0,
        "explain": "Generic giúp compiler kiểm tra kiểu, giảm cast sai ở runtime."
      },
      {
        "id": "JAVA-OOP-043",
        "category": "Java Core + OOP",
        "topic": "Lambda",
        "difficulty": 3,
        "question": "Lambda expression thường dùng với loại interface nào?",
        "options": [
          "Marker interface.",
          "Functional interface.",
          "Class abstract có constructor.",
          "Interface có nhiều abstract method."
        ],
        "answer": 1,
        "explain": "Functional interface có đúng một abstract method, phù hợp với lambda."
      },
      {
        "id": "JAVA-OOP-044",
        "category": "Java Core + OOP",
        "topic": "Stream",
        "difficulty": 3,
        "question": "Stream API phù hợp nhất cho việc gì?",
        "options": [
          "Tạo index CSDL.",
          "Thay thế mọi vòng lặp trong mọi trường hợp.",
          "Quản lý transaction.",
          "Xử lý dữ liệu theo pipeline như filter, map, reduce."
        ],
        "answer": 3,
        "explain": "Stream hỗ trợ xử lý collection theo phong cách khai báo."
      },
      {
        "id": "JAVA-OOP-045",
        "category": "Java Core + OOP",
        "topic": "Optional",
        "difficulty": 3,
        "question": "Optional nên dùng để làm gì?",
        "options": [
          "Bắt buộc dùng cho mọi method.",
          "Biểu diễn rõ một giá trị có thể vắng mặt.",
          "Tăng tốc HashMap.",
          "Thay thế mọi field null trong entity JPA."
        ],
        "answer": 1,
        "explain": "Optional phù hợp cho return value có thể không có, tránh lạm dụng trong field/entity."
      },
      {
        "id": "JAVA-OOP-046",
        "category": "Java Core + OOP",
        "topic": "Design Pattern",
        "difficulty": 3,
        "question": "Singleton Pattern có rủi ro gì nếu triển khai không đúng trong môi trường đa luồng?",
        "options": [
          "Không thể dùng với interface.",
          "Không thể compile.",
          "Không thể có constructor private.",
          "Có thể tạo ra nhiều instance."
        ],
        "answer": 3,
        "explain": "Lazy singleton không đồng bộ có thể bị race condition."
      },
      {
        "id": "JAVA-OOP-047",
        "category": "Java Core + OOP",
        "topic": "Design Pattern",
        "difficulty": 3,
        "question": "Factory Pattern giúp giảm phụ thuộc như thế nào?",
        "options": [
          "Client không cần biết chi tiết class cụ thể được khởi tạo.",
          "Client không cần xử lý exception bao giờ.",
          "Client tự động có database.",
          "Client không cần JVM."
        ],
        "answer": 0,
        "explain": "Factory che giấu logic tạo object, giúp code dễ mở rộng."
      },
      {
        "id": "JAVA-OOP-048",
        "category": "Java Core + OOP",
        "topic": "Design Pattern",
        "difficulty": 3,
        "question": "Builder Pattern phù hợp khi nào?",
        "options": [
          "Object có nhiều tham số tùy chọn hoặc constructor quá dài.",
          "Cần tạo thread-safe collection.",
          "Cần sort list nhanh hơn.",
          "Cần thay thế garbage collector."
        ],
        "answer": 0,
        "explain": "Builder giúp code tạo object dễ đọc, tránh telescoping constructor."
      },
      {
        "id": "JAVA-OOP-049",
        "category": "Java Core + OOP",
        "topic": "Design Pattern",
        "difficulty": 3,
        "question": "Strategy Pattern dùng để giải quyết vấn đề gì?",
        "options": [
          "Tự động tạo bảng database.",
          "Đảm bảo chỉ có một object trong JVM.",
          "Thay đổi thuật toán/hành vi linh hoạt tại runtime.",
          "Tự động tăng heap."
        ],
        "answer": 2,
        "explain": "Strategy đóng gói các thuật toán có thể hoán đổi."
      },
      {
        "id": "JAVA-OOP-050",
        "category": "Java Core + OOP",
        "topic": "SOLID",
        "difficulty": 3,
        "question": "SOLID: chữ S - Single Responsibility Principle nghĩa là gì?",
        "options": [
          "Một interface chỉ có một implementation.",
          "Một project chỉ có một package.",
          "Một class nên có một lý do chính để thay đổi.",
          "Một class chỉ được có một method."
        ],
        "answer": 2,
        "explain": "SRP giúp class tập trung vào một trách nhiệm rõ ràng."
      }
    ]
  }
];

// Tương thích với các bản web chỉ đọc window.QUESTIONS
window.QUESTIONS = window.QUIZ_DAYS[0].questions;
