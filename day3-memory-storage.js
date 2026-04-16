// ============================================= Memory Storage =================================================

// ======================================= Memory Storage (Bản Chất của Vùng Nhớ)
// trong JS khi khai báo biến , máy tính sẽ cấp phát bộ nhớ theo 2 khu vực :
/**
 * - Stack (ngăn xếp): Lưu trữ các giá trị nguyên thủy (String, Number, Boolean, null, undefined).
 * Nó giống như một chồng đĩa , truy cập cực nhanh nhưng dung lượng lại hạn chế.
 * - Heap (đống): Lưu trữ các dữ liệu phúc tạp (Object, Array, Function). Nó giống như một
 * kho hàng lớn, lộn xộn hơn nhưng chứa được rất nhiều.
 *
 * Ví dụ thực tế :
 *  - Stack giống như tờ hóa đơn ghi địa chỉ kho hàng
 *  - Heap chính là cái kho hàng chứa đồ đạc thật. Khi copy một Object, thực chất chỉ đang copy
 *  tờ hóa đơn (địa chỉ), chứ không phải copy toàn bộ cái kho hàng.
 *
 */

// ======================================= Scope (Phạm vi) & Scope Chain
/**
 * Scope xác định nơi nào có quyền truy vập vào biến :
 *  - Global Scope: Cả chương trình đều thấy
 *  - Function Scope: Chỉ trong hàm đó mới thấy
 *  - Block Scope: (let, const): Chỉ trong cặp ngoặc nhọn {} (như if, for) mới thấy;
 *
 * Scope Chain (Chuỗi phạm vi): Khi tìm một biến, Js sẽ nhìn từ trong ra ngoài. Nếu trong nhà không có
 * nó sẽ ra ngoài sân tìm, rồi ra ngoài phố (Global).
 */

// ======================================= Closure (Đóng gói ngữ cảnh)
/**
 * Đây là khái niệm quan trọng nhất. Closure là một hàm có khả năng "ghi nhớ" và truy cập vào các biến
 * ở scope cha của nó, ngay cả khi scope cha đó đã thực thi xong.
 *
 * Ví dụ thực tế : Closure giống như một cái balo di động. Khi hàm con được sinh ra, nó đeo một cái balo chứa tất cả
 * các biến môi trường xung quanh nó lúc đó. Dù đi đâu, nó cũng mang theo cái balo chứa đầy kỉ niệm ấy.
 */

// ======================================= Giải phẫu code thực chiến ==============================================

/**
 * Hàm tạo bộ đếm ID đơn hàng (Order ID generator)
 * Giúp mã đơn hàng tăng dần và không bị sửa đổi từ bên ngoài
 */

// function createOrderTracker() {
//     let count = 0; // Biến này nằm trong Heap và  được Closure bảo vệ
//     const orders = [];

//     return {
//         addOrder: function(productName, price) {
//             count++; // Truy cập và thay đổi biến count ở scope cha
//             const newOrder = {
//                 id: count,
//                 product: productName,
//                 price: price,
//             };
//             orders.push(newOrder);
//             return `Đã tạo đơn #${count}: ${productName}`;
//         },
//         getReport: function () {
//             const total = orders.reduce((sum, item) => sum + item.price, 0);
//             return {
//                 totalOrder: count,
//                 revenue: total
//             };
//         }
//     }
// }

// // Thực thi
// const myStore = createOrderTracker();
// console.log(myStore.addOrder("Laptop Dell", 1500)); // Đã tạo đơn #1
// console.log(myStore.addOrder("Chuột Logitech", 50));  // Đã tạo đơn #2
// // Biến 'count' và 'orders' hoàn toàn không thể bị truy cập trực tiếp từ đây
// // console.log(myStore.count); // Kết quả: undefined
// console.log(myStore.getReport()); // { totalOrders: 2, revenue: 1550 }

// ======================================= Tổng kết kiến thức ==============================================
/**
 *  . Memory: Primitive ở Stack, Reference (Object/Array) ở Heap.
 *  . Scope: Quy tắc "trong thấy ngoài, ngoài không thấy trong". let/const cso block scope giúp hạn chế rò rỉ biến
 *  . Closure: Xảy ra khi haàm con được định nghĩa bên trong hàm cha. Nó dùng để đóng gói (Encapsulation) và bảo mật
 *  dữ liệu, tránh việc biến bị ghi đè lung tung trong các dự án lớn.
 */

// ======================================= Bài tập thực hành ==============================================

/**
 *
 * Bài tập 1: Quản lý số dư ví điện tử
 * Viết một hàm createWallet(ownerName). Hàm này trả về một object có 2 phương thức:
 * deposit(amount): Cộng thêm tiền vào ví.
 * withdraw(amount): Trừ tiền khỏi ví (Nếu số dư không đủ thì thông báo "Số dư không đủ").
 *
 * Yêu cầu: Biến balance (số dư) phải được giấu kín, không được truy cập trực tiếp từ bên ngoài.
 */

// ===================================== Bài làm

// function createWallet(ownerName, initialBalance = 0) {
//   let balance = initialBalance;
//   return {
//     deposit: function (amount) {
//       if (amount <= 0) return "Số tiền nạp phải lớn hơn 0";
//       balance += amount;
//       return `[${ownerName}] +${amount} VNĐ. Dư cuối: ${balance} VNĐ`;
//     },
//     withDraw: function (amount) {
//       if (amount > balance) {
//         return `[${ownerName}] Giao dịch thất bại: Số dư không đủ (Hiện có: ${balance})`;
//       }
//       if (amount <= 0) return "Số tiền rút không hợp lệ";

//       balance -= amount;
//       return `[${ownerName}] -${amount} VNĐ. Dư cuối: ${balance} VNĐ`;
//     },
//   };
// }

// let viCuaToi = createWallet("Ví Của Tôi");

// console.log(viCuaToi.deposit(200000));
// console.log(viCuaToi.deposit(0));
// console.log(viCuaToi.withDraw(300000));
// console.log(viCuaToi.withDraw(300));
// console.log(viCuaToi.withDraw(0));
// // console.log(balance);
