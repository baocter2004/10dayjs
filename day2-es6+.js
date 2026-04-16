// ============================================= ES6 - HOF =================================================

// ======================================= Arrow function ( Hàm mũi tên )

/**
 * - Bản chất: Là cách viết hàm ngắn gọn hơn function. Điểm khác biệt lớn nhất là nó không tạo ra
 * ngữ cảnh this riêng mà "mượn" this từ nơi nó được định nghĩa ( Lexical Scoping )
 * - Thực tế: Dùng để viết các hàm callback cho .map(), .filter(), cực kì gọn, hoặc để giữ
 * ngữ cảnh this trong các phương thức của React Component.
 */

// Cú pháp cũ :
// const gapDoi = function (n) {
//   return n * 2;
// };

// // Cú pháp Arrow function

// const gapDoiES6 = (n) => n * 2;

// // Ứng dụng HOF
// const numbers = [1, 2, 3];
// const x2 = numbers.map((s) => s * 2);

// console.log(x2);
// console.log(gapDoi(2), gapDoiES6(2));

// ======================================= Destructuring (Phá vỡ cấu trúc)

/**
 * - Bản chất: Cho phép "lôi" các giá trị từ trong mảng hoặc thuộc tính từ trong object
 *  ra ngoài và gán vào biến riêng biệt chỉ bằng một dòng code.
 * - Thực tế: Dùng khi nhận dữ liệu từ API (thường là object lớn) hoặc khi nhận props trong React.
 */

// const sinhVien = {
//     hoTen: "Chu Van Thai Bao",
//     tuoi: 20,
//     queQuan: "Ha Noi",
// };

// const { hoTen, tuoi, avatar = "default.png"} = sinhVien;

// console.log(hoTen);
// console.log(tuoi);
// console.log(avatar);

// ======================================= Bài Tập

// 📝 Bài tập 1: "Phẫu thuật" Object (Destructuring & Rest)
// Cho một object trả về từ API của một hệ thống quản lý sinh viên PTIT như sau:

// const response = {
//   status: 200,
//   data: {
//     id: "B21DCCN001",
//     fullname: "Nguyễn Văn Bắc",
//     major: "ATTT",
//     scores: {
//       toan: 9,
//       ly: 8,
//       anh: 10
//     },
//     hobbies: ["Code", "Gym", "Game"]
//   }
// };

// Yêu cầu:
// Dùng Destructuring để lấy fullname và major ra khỏi object data.
// Dùng Destructuring lồng nhau để lấy điểm anh ra và đặt tên biến mới là englishScore.
// Dùng Rest Operator để lấy phần còn lại của object data (trừ id và fullname) vào một biến tên là otherInfo.

// ======================================= Bài làm
// const response = {
//   status: 200,
//   data: {
//     id: "B21DCCN001",
//     fullname: "Nguyễn Văn Bắc",
//     major: "ATTT",
//     scores: {
//       toan: 9,
//       ly: 8,
//       anh: 10,
//     },
//     hobbies: ["Code", "Gym", "Game"],
//   },
// };
// const { fullname, major, scores: { toan, ly, anh: englishScore} } = response.data;
// console.log(fullname, major, toan, ly, englishScore);

// ======================================= Spread & Rest Operator (...)

/**
 * - Bản chất:
 * Spread (Trải ra): Dùng để "đổ" các phần tử của một mảng/object cũ vào một mảng/object mới. (Tạo bản sao - Shallow Copy).
 * Rest (Gom lại): Dùng ở tham số hàm để gom tất cả các đối số còn lại vào một mảng duy nhất.
 * - Thực tế: Dùng để cập nhật State trong React (không làm thay đổi biến gốc) hoặc viết các hàm nhận số lượng tham số không giới hạn.
 */

// Spread: coppy mảng/object.
// const mangCu = [1,2,3];
// const mangMoi = [...mangCu, 4, 5];

// // Rest: gom tham số
// function tinhTong(...soNhanVao) {
//     return soNhanVao.reduce((acc, curr) => acc + curr, 0);
// }

// console.log(tinhTong(1,2,3,4,5));

// TRƯỜNG HỢP 1: Trong hàm
// function thietLap(uuTien1, uuTien2, ...cacCaiKhac) {
//     console.log(uuTien1); // "Học JS"
//     console.log(uuTien2);
//     console.log(cacCaiKhac); // ["Ngủ", "Game", "Người yêu"] -> Gom lại thành mảng
// }
// thietLap("Học JS", "Làm Project", "Ngủ", "Game", "Người yêu");

// TRƯỜNG HỢP 2: Trong Destructuring
// const [vang, bac, ...conLai] = [10, 8, 5, 3, 2];
// vang = 10, bac = 8
// conLai = [5, 3, 2]

/**
 * *** Lưu ý :
 *      Với giá trị nguyên thủy (Số, chuỗi): Nó copy giá trị. An toàn.
 *      Với Object/Mảng lồng bên trong: Nó chỉ copy cái địa chỉ (Reference).
 */

// const phongHoc = {
//     ten: "PTIT_01",
//     thietBi: ["Máy chiếu", "Điều hòa"]
// };

// const phongCopy = { ...phongHoc };

// Thử sửa cái mảng bên trong của bản copy
// phongCopy.thietBi.push("Loa thùng");

// console.log(phongCopy);
// console.log(phongHoc);

// KẾT QUẢ: Phòng gốc cũng bị thêm "Loa thùng" luôn!
// Vì Spread chỉ copy cái 'vỏ' phongHoc, còn cái mảng 'thietBi' vẫn dùng chung địa chỉ vùng nhớ.

// ======================================= Bài Tập

// 📝 Bài tập 2: "Bản sao an toàn" (Spread Operator & Logic)
// Giả sử em đang làm chức năng "Cập nhật giỏ hàng" cho một app Ecommerce bằng React.
// JavaScript
// const cart = {
//   user: "Bắc",
//   items: [
//     { id: 1, name: "Chuột Logitech", price: 500 },
//     { id: 2, name: "Bàn phím cơ", price: 1200 }
//   ],
//   total: 1700
// };
// Yêu cầu:
// Hãy dùng Spread Operator để tạo ra một object newCart sao chép từ cart nhưng thay đổi total thành 2000.
// Câu hỏi tư duy: Nếu em dùng newCart.items.push({ id: 3, name: "Tai nghe", price: 300 }), thì mảng items ở cart gốc có bị thêm phần tử không? Tại sao?
// (Hãy nhớ về cơ chế Shallow Copy).

// ======================================= Bài làm

// const cart = {
//     user: "Bắc",
//     items: [
//         { id: 1, name: "Chuột Logitech", price: 500},
//         { id: 2, name: "Bàn phím cơ", price: 1200}
//     ],
//     total: 1700
// };

// const newCart = { ...cart };
// newCart.items.push({ id: 3, name: "Tai nghe", price: 300 })
// newCart.total = 2000;
// console.log(cart);
// console.log(newCart);

// Trả lời : cả cart gốc và newCart đều được thêm id = 3 nhé , vì speard chỉ coppy cái vỏ cart còn "items" thì coppy địa chỉ vùng nhớ ạ!

/**
 * Yêu cầu: Cho Object student dưới đây. Hãy tạo ra một bản sao tên là updatedStudent sao cho:
 * Thay đổi name thành "Bảo Pro".
 * Thêm một sở thích "Photography" vào mảng hobbies.
 * Thay đổi điểm math trong scores thành 10.
 * Quan trọng: Sau khi thay đổi, object student gốc không được phép bị thay đổi bất cứ giá trị nào.
 */

const student = {
  name: "Bảo",
  hobbies: ["Code", "Gym"],
  scores: {
    math: 8,
    english: 9,
  },
};

const updatedStudent = {
  ...student, // 1. Copy cái vỏ ngoài (name, hobbies, scores)
  name: "Bảo Pro", // 2. Ghi đè name mới
  hobbies: [...student.hobbies, "Photography"], // 3. Copy mảng cũ và thêm phần tử mới
  scores: {
    ...student.scores, // 4. Copy các điểm cũ (english)
    math: 10, // 5. Ghi đè điểm math mới
  },
};

// Kiểm tra
console.log("Gốc:", student.hobbies); // ["Code", "Gym"] -> Vẫn nguyên vẹn
console.log("Mới:", updatedStudent.hobbies); // ["Code", "Gym", "Photography"]
