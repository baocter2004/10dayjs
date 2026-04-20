// ============================================= Hoisting , This, & Higher-Order Functions =================================================

// ============================================= Hoisting (cần trục trong javascript)
/**
 * Trong JS, trước khi code được thực thi, trình biên dịch sẽ lướt qua và "nhấc" các khai báo
 * lên đầu phạm vi của nó.
 *
 * Ví dụ thực tế : Hoisting giống như việc bạn đọc mục lục của một cuốn sách trước khi đọc
 * nội dung. Bạn biết các chương (biến, hàm) nằm ở đâu trước khi thực sự lật đến trang đó.
 *
 *  - với "var" được hoisted nhưng khởi tạo là undefined
 *  - với "let", "const" được hoisted nhưng rơi vào Temporal Dead Zone (vùng chết tạm thời).
 *  Sẽ báo lỗi nếu dùng trước khi khai báo.
 *  - với Function Declaration được hoisted toàn bộ. Có thể gọi hàm trước khi viết code định
 *  nghĩa nó.
 */

// ============================================= Higher Order Functions (Xử lý mảng nâng cao)
/**
 * Đây là "vũ khí" chính khi làm Node.js để xử lý dữ liệu từ Database. Thay vì dùng vòng lặp
 * for thủ công, ta dùng các phương thức có sẵn:
 *  - .forEach(): Duyệt qua từng phần tử trong mảng để thực hiện hành động.                 - TRả về undefined (không tạo mảng mới)
 *  - .map(): Biến đổi mảng cũ thành mảng mới cùng kích thước.                              - Mảng mới cùng độ dài với mảng cũ.
 *  - .filter(): Lọc các phần tử thỏa mãn điều kiện.                                        - Mảng mới chứa các phần tử thỏa mãn.
 *  - .reduce(): Gom tất cả các phần tử về 1 giá trị duy nhất.                              - Một giá trị (số, chuỗi hoặc là object)
 *
 *  - .find(): Tìm kiếm phần tử đầu tiên thỏa mãn điều kiện.                                - Phần tử đó hoặc là undefined
 *  - .findIndex(): Tìm vị trí index của phần tử đầu tiên thỏa mãn.                         - Số nguyên (ví trí) hoặc -1
 *  - .every(): Kiểm tra xem tất cả phần tử có thỏa mãn điều kiện hay không.                - True hoặc false
 *  - .some(): Kiểm tra xem có ít nhất một phần tử thỏa mãn điều kiện.                      - True hoặc false
 *
 *  - .sort(): Sắp xếp mảng , mặc định sắp xêp theo chuỗi , để xếp số cần
 *             truyền callback (a,b) => a -b
 *  - .reverse(): Đảo ngược thứ tự các phần tử trong mảng.
 *
 *
 *  *** Chuyên sâu về reduce ***
 *  Cấu trúc : array.reducce((accumulator, currentValue) => ..., initialValue);
 *  - Accumulator (biến tích lũy): giống như cái thùng chứa kết quả cộng dồn qua từng bước.
 *  - InitialValue: Khởi tạo giá trị ban đầu.
 */

//=========================================== Ví dụ minh họa tổng hợp
// const orders = [
//     { id: 1, product: 'Mouse', price: 20, status: 'shipped' },
//     { id: 2, product: 'Keyboard', price: 50, status: 'pending' },
//     { id: 3, product: 'Monitor', price: 200, status: 'shipped' }
// ];

// // 1. Lấy danh sách tên sản phẩm (map)
// const names = orders.map(item => item.product); // ['Mouse', 'Keyboard', 'Monitor']

// // 2. Lọc các đơn đã giao hàng (filter)
// const shipped = orders.filter(item => item.status === 'shipped');

// // 3. Kiểm tra xem có đơn nào giá > 100 không? (some)
// const hasExpensive = orders.some(item => item.price > 100); // true

// // 4. Tính tổng tiền các đơn hàng (reduce)
// const totalMoney = orders.reduce((sum, item) => sum + item.price, 0); // 270

// console.log(names);
// console.log(shipped);
// console.log(hasExpensive);
// console.log(totalMoney);

// ======================================= Bài tập thực hành ==============================================
// 📝 Bài tập: Hệ thống Quản lý Học sinh (Classroom Management)
// Ngữ cảnh: Bạn đang xây dựng một module nhỏ cho hệ thống quản lý trường học. Dữ liệu học sinh cần được bảo mật để không ai có thể tự ý thay đổi điểm số từ bên ngoài.
// Yêu cầu: Viết hàm createClassroom(className). Hàm này trả về một Object chứa các phương thức sau:
// addStudent(name, score): Thêm một học sinh mới vào danh sách.
// Mỗi học sinh là một Object: { id, name, score }.
// id phải tự động tăng (dùng biến count trong Closure).
// getPassedStudents(): Trả về danh sách (mảng) các học sinh có điểm từ 5.0 trở lên.
// Sử dụng: .filter()
// getStudentNames(): Trả về một mảng chỉ chứa Tên của các học sinh và tất cả tên phải được viết hoa.
// Sử dụng: .map()
// getAverageScore(): Tính điểm trung bình của cả lớp.
// Sử dụng: .reduce()
// getStudentRankings(): Trả về một danh sách mới, mỗi học sinh có thêm thuộc tính rank:
// Nếu điểm >= 8: rank = "Giỏi"
// Còn lại: rank = "Cần cố gắng"
// Sử dụng: .map()
// removeStudent(id): Xóa một học sinh khỏi danh sách dựa trên ID.
// Sử dụng: .filter() (Gợi ý: lọc lấy những người có ID khác với ID truyền vào)

// function createClassroom(className) {
//   let students = [];
//   let count = 1;
//   return {
//     addStudent(name, score) {
//       let student = { id: count++, name, score };
//       students.push(student);
//       return `Đã Thêm Sinh Viên : ${name}`;
//     },
//     getPassedStudents() {
//       return students.filter((student) => student.score > 5);
//     },
//     getStudentNames() {
//       return students.map((student) => student.name.toUpperCase());
//     },
//     getAverageScore() {
//       if (students.length === 0) return 0;
//       const total = students.reduce((acc, student) => acc + student.score, 0);
//       return total;
//     },
//     getStudentRankings() {
//       return students.map((student) => ({
//         ...student,
//         rank: student.score >= 8 ? "Giỏi" : "Cần cố gắng",
//       }));
//     },
//     removeStudent(id) {
//       students = students.filter((student) => student.id !== id);
//       return `Đã xóa học sinh có ID: ${id}`;
//     },
//     showAll() {
//       return students;
//     },
//   };
// }

// const myClass = createClassroom("NodeJS Backend");
// myClass.addStudent("Anh Tuấn", 9);
// myClass.addStudent("Bảo Ngọc", 4);
// myClass.addStudent("Hoàng Nam", 7);

// console.log("Danh sách tên (Viết hoa):", myClass.getStudentNames());
// console.log("Học sinh đạt:", myClass.getPassedStudents());
// console.log("Điểm trung bình lớp:", myClass.getAverageScore());
// console.log("Xếp loại:", myClass.getStudentRankings());
// console.log(myClass.removeStudent(2));
// console.log("Sau khi xóa ID 2:", myClass.showAll());

// ======================================= Bài tập thực hành (bài tập mới) ==============================================
// 📝 Bài tập nâng cấp: Hệ thống phân tích đơn hàng (Order Analytics)
// Ngữ cảnh: Bạn có một mảng các đơn hàng từ Database. Mỗi đơn hàng có danh sách sản phẩm, trạng thái và ngày tạo.
//  Bạn cần viết một hàm analyzeOrders(orders) trả về một báo cáo chi tiết.

// Dữ liệu đầu vào:
// JavaScript
// const orders = [
//   { id: 1, customer: "Alice", items: [{ name: "Laptop", price: 1000 }, { name: "Mouse", price: 50 }], status: "completed" },
//   { id: 2, customer: "Bob", items: [{ name: "Phone", price: 500 }], status: "pending" },
//   { id: 3, customer: "Alice", items: [{ name: "Keyboard", price: 100 }], status: "completed" },
//   { id: 4, customer: "Charlie", items: [{ name: "Monitor", price: 300 }], status: "completed" },
// ];
// Yêu cầu bạn cần thực hiện:
// Tính tổng doanh thu của các đơn hàng completed: (Dùng .filter() và .reduce()).
// Thống kê chi tiêu theo từng khách hàng: Trả về một Object với Key là tên khách hàng, Value là tổng số tiền họ đã mua (Chỉ tính đơn completed).
// Ví dụ: { "Alice": 1100, "Charlie": 300 }
// Gợi ý: Dùng .reduce() với initialValue là một Object {}.
// Tìm danh sách các sản phẩm độc nhất (Unique Products): Trả về một mảng chứa tên tất cả các sản phẩm đã được bán, nhưng không được lặp lại tên.
// Gợi ý: Dùng .flatMap() để trải phẳng mảng items, sau đó dùng new Set() hoặc .filter() để lọc trùng.
// Kiểm tra đơn hàng "VIP": Trả về true nếu tất cả đơn hàng completed đều có tổng giá trị > 100. (Dùng .every()).
// 💡 Gợi ý kỹ thuật mới cho bạn: .flatMap()
// Khi bạn có một mảng chứa các mảng con (như items trong orders), map() sẽ tạo ra mảng lồng nhau. flatMap() sẽ giúp bạn vừa biến đổi vừa "làm phẳng" chúng.

// ======================================= Bai lam

const orders = [
  {
    id: 1,
    customer: "Alice",
    items: [
      { name: "Laptop", price: 1000 },
      { name: "Mouse", price: 50 },
    ],
    status: "completed",
  },
  {
    id: 2,
    customer: "Bob",
    items: [{ name: "Phone", price: 500 }],
    status: "pending",
  },
  {
    id: 3,
    customer: "Alice",
    items: [{ name: "Keyboard", price: 100 }],
    status: "completed",
  },
  {
    id: 4,
    customer: "Charlie",
    items: [{ name: "Monitor", price: 300 }],
    status: "completed",
  },
];

function analyzeOrders(orders) {
  return {
  };
}

const analytics = analyzeOrders(orders);
console.log("Doanh thu:", analytics.getTotalRevenue());
console.log("Chi tiêu mỗi khách:", analytics.getCustomerSpending());
console.log("Sản phẩm đã bán:", analytics.getUniqueProducts());
console.log("Tất cả đơn > 100?", analytics.isAllHighValue());

console.log(analyzeOrders(orders));
