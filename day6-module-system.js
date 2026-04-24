// ============================================= ES6+ Nâng cao & Module System (Chia để trị). =================================================

/**
 * 1. Destructuring & Spread/Rest (Dọn dẹp code)
 * - Destructuring (Phá vỡ cấu trúc): giúp bạn lấy dữ liệu từ Object hoặc Array một cách dễ dàng.
 * - Spread/Rest: giúp bạn làm việc với nhiều phần tử trong Array hoặc Object một cách linh hoạt.
 * 2. Module System (Hệ thống module): giúp bạn tổ chức code thành các phần nhỏ, dễ quản lý và tái sử dụng.
 */

// 1. Destructuring: Không chỉ là lấy biến, mà còn là lấy dữ liệu sâu bên trong cấu trúc phức tạp một cách dễ dàng.
// Destructuring
// const response = {
//   data: {
//     user: {
//       id: 101,
//       fullName: "Alice",
//       email: "alice@example.com",
//       address: { city: "New York", country: "USA" },
//     },
//   },
//   status: 200,
// };

// const {
//   data: {
//     user: {
//       fullName: name,
//       address: { city },
//     },
//   },
// } = response;
// console.log(name); // Alice
// console.log(city); // New York

// 2. Spread & Rest: Tư duy "Bất biến" (Immutability)

// Spread/Rest : Tư duy bất biến (Immutability)
// Rest (... ở vế trái): gom những phần tử còn lại vào một mảng hoặc đối tượng mới.
// Spread (... ở vế phải): trải rộng phần tử của một mảng hoặc đối tượng vào một mảng hoặc đối tượng mới.
// const customer = {
//   id: 1,
//   name: "Bob",
//   email: "bob@example.com",
//   points: 1500,
//   phone: "123-456-7890",
// };

// Rest: gom những phần tử còn lại vào một đối tượng mới.
// Kỹ thuật xóa không sửa gốc
// const { id, ...customerWithoutId } = customer;
// console.log(id);

// Spread: trải rộng phần tử của một đối tượng vào một đối tượng mới.
// Kỹ thuật update không sửa gốc
// const updatedCustomer = { ...customer, points: 2000 }; // tạo một đối tượng mới với điểm số được cập nhật
// console.log(updatedCustomer);

// 3. Module System: Xử lý xung đột và Dynamic Import
/**
 * . Namespace Import : khi một file export quá nhiều thứ , gom tất cả vào một object duy nhất để tránh xung đột tên.
 *    Ví dụ : import * as SmsHelper from './smsHelper.js'; -> dùng smsHelper.sendSMS() để gọi hàm.
 * . Dynamic Import : khi bạn chỉ muốn load một module khi cần thiết, giúp tối ưu hiệu suất.
 *    Ví dụ : if (userWantsToSendSMS) {
 *              const { sendSMS } = await import('./smsHelper.js');
 *              sendSMS();
 *            }
 */

// ======================================= Bài tập thực hành ==============================================
// 🚀 Bài tập "Chốt hạ" Ngày 6 cho Bao
// Hãy viết một hệ thống quản lý tin nhắn nhỏ gọn áp dụng tất cả kiến thức từ đầu buổi:
// Hàm addCustomer(list, newPhone): Trả về danh sách mới có thêm số điện thoại đó ở đầu mảng.
// Hàm updateCustomerPoints(list, phone, bonusPoints): Tìm khách hàng có số điện thoại đó, dùng Spread để cập nhật points = points + bonusPoints.
// Hàm summarize(...messages): Nhận vào số lượng tin nhắn không giới hạn, dùng Rest để gom lại và trả về một
// chuỗi: "Tổng số tin: [X]. Nội dung: [Tin 1], [Tin 2]..." (Sử dụng Template Literals).

// ======================================= Bai lam
let myCustomers = [
  { phone: "090", points: 10 },
  { phone: "091", points: 20 },
];

function addCustomer(list, newPhone) {
  return [...list, { phone: newPhone, points: 0 }];
}

function updateCustomerPoints(list, phone, bonusPoints) {
    return list.map((customer) => {
        if (customer.phone === phone) {
            return { ...customer, points: customer.points + bonusPoints };
        }
        return customer;
    });
}

function summarize(...messages) {
    
}

const newCustomers = addCustomer(myCustomers, "092");
console.log(newCustomers);

const updatedCustomers = updateCustomerPoints(newCustomers, "092", 5);
console.log(updatedCustomers);
