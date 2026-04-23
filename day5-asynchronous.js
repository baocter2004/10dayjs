// ============================================= Đồng bộ (Sync) - Bất đồng bộ (Async) =================================================

// ============================================= Khái niệm: Đồng bộ (Sync) vs. Bất đồng bộ (Async)
/**
 * - Đồng bộ (synchronous): code chạy từ trên xuống dưới , việc này xong mới đến việc kia , nếu có một việc
 *   tốn 10 giây (như tải ảnh nặng) cả chương trình sẽ phải đứng đợi 10 giây.
 *
 * - Bất đồng bộ (asynchronous): cho phép những việc tốn thời gian "chạy ở hàng chờ", trong lúc đó code vẫn
 *   tiếp tục chạy các việc khác. Khi việc tốn thời gian xong, nó sẽ báo lại cho chúng ta.
 */

// ============================================= Event Loop - "Trái tim" của sự bất đồng bộ
/**
 * - JS là ngôn ngữ đơn luồng (Single thread), nghĩa là nó chỉ có một tay để làm việc, để làm được nhiều việc cùng một
 *   lúc, đây là lúc sử dụng tới Event Loop.
 * - Ví Dụ :
 *      + Bạn gọi món (gửi 1 yêu cầu async)
 *      + Nhân viên ghi hóa đơn rồi đưa bạn cái thẻ rung (Promise)
 *      + Bạn đi tìm bàn ngồi lướt điện thoại (tiếp tục chạy code khác)
 *      + Khi đồ uống xong, thẻ rung lên (Callback/Resolve). Bạn ra lấy đồ.
 */

// ============================================= Sự tiến hóa: Callback -> Promise -> Async/Await

/**
 * A. Callback (cổ điển - tôn trọng)
 * - là một hàm được truyền vào một hàm khác để chạy sau khi việc gì đó xong.
 * . Nhược điểm : dễ dẫn đến callback hell (các hàm lồng nhau như tổ quạ, cực kỳ khó đọc)
 *
 * B. Promise (lời hứa)
 * - thay vì lồng hàm, ta dùng promies. Nó hứa sẽ trả về kết quả (resolve / reject)
 * . Cách dùng : .then() (khi thành công) và .catch() (khi có lỗi)
 */

// ============================================= Async/Await (Đỉnh cao hiện đại)
/**
 * - Đây là cách viết code bất đồng bộ trông như code đồng bộ, nó giúp code sạch sẽ, dễ đọc.
 */

// async function fetchData() {
//     try {
//         console.log("Đang Tải Dữ Liệu ...");
//         // đợi (await) cho đến khi lấy xong
//         let data = await someAsyncFunction();
//         console.log("Kết quả : ", data);
//     } catch (error) {
//         console.log("Có Lỗi Rồi : ", error);
//     }
// }

// ======================================= Bài tập thực hành ==============================================
// 🚀 Bài tập thực hành Ngày 5 (Phần 1)
// Chúng ta sẽ không dùng dữ liệu thật ngay, mà sẽ tự tạo ra các "giả lập" để bạn hiểu bản chất.
// Yêu cầu: Viết một hệ thống "Giả lập đặt đồ ăn Online".

// Hàm orderFood(monAn): Trả về một Promise.
// Sau 2 giây (dùng setTimeout), nếu món ăn là "Cá viên chiên", hãy resolve (thành công) với thông báo: "Đã xong món [tên món]".

// Nếu món ăn là "Sườn xào chua ngọt", hãy reject (thất bại) với lỗi: "Hết nguyên liệu rồi!".
// Hàm processOrder():

// Sử dụng Async/Await để gọi hàm orderFood.
// Dùng try...catch để xử lý cả trường hợp thành công và thất bại.
// Log ra màn hình các bước: "Bắt đầu đặt hàng" -> "Kết quả trả về" -> "Kết thúc".

// ======================================= Bai lam
// function orderFood(monAn) {
//     return new Promise((resolve, reject) => {
//         console.log(`Đang chế biến : ${monAn} ...`);

//         setTimeout(() => {
//             if (monAn === "Cá viên chiên") {
//                 resolve(`Món ${monAn} đã hoàn thành!`);
//             } else {
//                 reject(`Rất tiếc món ăn ${monAn} đã hết`);
//             }
//         }, 2000);
//     });
// }

// async function processOrder(mon) {
//     try {
//         let data = await orderFood(mon);
//         console.log(data);
//     } catch (error) {
//         console.log('có lỗi : ' , error);
//     }
// }

// processOrder("Cá viên chiên");
// processOrder("Sườn xào chua ngọt");

// ======================================= Bài tập thực hành ==============================================
// 📝 Bài tập thực hành Ngày 5 (Phần 2)
// Chúng ta sẽ dùng một API thật (dành cho việc học tập) có tên là JSONPlaceholder.
// Dữ liệu đầu vào: Đường dẫn API chứa danh sách 10 người dùng: https://jsonplaceholder.typicode.com/users

// Yêu cầu:
// Hãy viết một hàm fetchAndAnalyzeUsers() sử dụng async/await để thực hiện các bước sau:
// Dùng fetch() để gọi đường dẫn API trên.
// Chuyển đổi dữ liệu trả về thành JSON.
// Kết hợp với kiến thức Array Methods của Ngày 4: Dùng .filter() để lọc ra những người dùng có tên công ty (thuộc tính company.name) chứa chữ "Group".
// In kết quả ra màn hình.

// ======================================= Bai lam
// async function fetchAndAnalyzeUsers() {
//   try {
//     let response = await fetch('https://jsonplaceholder.typicode.com/users');
//     let data = await response.json();
//     let filterData = data.filter((item) => {
//         return item.company.name.includes("Group");
//     });
//     return filterData;
//   } catch (error) {
//     console.log(error);
//   }
// }

// async function run() {
//   const data = await fetchAndAnalyzeUsers();
//   console.log(data);
// }

// run();

// ======================================= Bài tập thực hành ==============================================
// 📝 Bài tập nâng cao cuối cùng của Ngày 5 (Thử thách tổng hợp)
// Ngữ cảnh: Bạn muốn xem 3 bài đăng của người dùng có id: 1 và đồng thời lấy thông tin cá nhân của người đó.

// Yêu cầu: Viết hàm getUserDashboard(userId) thực hiện:
// Gọi đồng thời (dùng Promise.all) 2 API sau:

// Thông tin user: https://jsonplaceholder.typicode.com/users/[userId]
// Danh sách posts của user đó: https://jsonplaceholder.typicode.com/posts?userId=[userId]

// Sử dụng destructuring để lấy kết quả từ Promise.all.
// Chỉ lấy ra 3 bài post đầu tiên (Dùng .slice(0, 3)).
// Trả về một Object tổng hợp có dạng:
// JavaScript
// {
//   userName: "Tên người dùng",
//   recentPosts: ["Tiêu đề bài 1", "Tiêu đề bài 2", "Tiêu đề bài 3"]
// }

// ======================================= Bai lam
// async function getUserDashboard(userId) {
//   try {
//     const userUrl = `https://jsonplaceholder.typicode.com/users/${userId}`;
//     const postUrl = `https://jsonplaceholder.typicode.com/posts?userId=${userId}`;

//     const [userRes, postsRes] = await Promise.all([
//       fetch(userUrl),
//       fetch(postUrl),
//     ]);

//     const user = await userRes.json();
//     const posts = await postsRes.json();

//     return {
//       userName: user.name,
//       recentPosts: posts.map((post) => post.title),
//     };
//   } catch (error) {
//     console.log(error);
//   }
// }

// async function run() {
//   const checkData = await getUserDashboard(1);
//   console.log(checkData);
// }

// run();

// ======================================= Bài tập thực hành ==============================================
// 🚀 Thử thách nâng cao (Day 5 - Phần 2)
// Dưới đây là 2 bài tập thiết kế để "hack não" và giúp bạn làm chủ hoàn toàn luồng dữ liệu.

// Bài 1: Chế độ "Siêu đầu bếp" (Xử lý lỗi từng phần)
// Ngữ cảnh: Bạn đặt 3 món ăn cùng lúc. Thay vì dùng Promise.all (một cái lỗi là tất cả lỗi theo), bạn muốn cái nào xong thì báo xong, cái nào lỗi thì báo lỗi riêng cái đó.

// Yêu cầu:
// Viết hàm cookFood(foodName, time). Hàm này trả về một Promise, resolve sau time giây.
// Nếu món ăn là "Cá ươn", hãy reject ngay lập tức.
// Tạo một mảng gồm 3 món: cookFood("Bò bít tết", 2000), cookFood("Cá ươn", 1000), cookFood("Súp cua", 1500).

// Sử dụng Promise.allSettled() để thực thi mảng trên.
// In ra kết quả dưới dạng:
// "Thành công: [Tên món]"
// "Thất bại: [Lý do]"

// ======================================= Bai lam
// function cookFood(foodName, time) {
//   return new Promise((resolve, reject) => {
//     if (foodName === "Cá ươn") {
//       return reject("Cá không tươi rồi !");
//     }
//     setTimeout(() => {
//       resolve(foodName);
//     }, time);
//   });
// }

// async function serveFood() {
//   console.log("Đang Chuẩn Bị Món Ăn ....");
//   const menu = [
//     cookFood("Bò bít tết", 2000),
//     cookFood("Cá ươn", 1000),
//     cookFood("Súp cua", 1500),
//   ];

//   const results = await Promise.allSettled(menu);

//   results.forEach((res) => {
//     if (res.status === "fulfilled") {
//       console.log(`Thành công: ${res.value}`);
//     } else {
//       console.log(`Thất bại: ${res.reason}`);
//     }
//   });
// }

// serveFood().then(() => {
//   console.log("Hoàn tất quy trình òi !");
// });

// ======================================= Bài tập thực hành ==============================================

// Bài 2: Hệ thống quản lý bài viết thông minh (Data Mapping nâng cao)
// Ngữ cảnh: Bạn cần lấy dữ liệu từ API nhưng lần này yêu cầu phức tạp hơn để kiểm tra kỹ năng xử lý Object.
// API sử dụng: - Users: https://jsonplaceholder.typicode.com/users
// Posts: https://jsonplaceholder.typicode.com/posts
// Yêu cầu: Viết hàm getSuperUserData():
// Lấy toàn bộ danh sách Users và Posts.
// Sử dụng .map() và .filter() để trả về một mảng các Object mới. Mỗi Object bao gồm:
// id: ID của user.
// name: Tên user.
// postCount: Tổng số bài viết mà user đó đã đăng.
// isInfluencer: Nếu postCount > 5 thì là true, ngược lại false.

// ======================================= Bai lam
// async function getSuperUserData() {
//   try {
//     const usersUrl = "https://jsonplaceholder.typicode.com/users";
//     const postsUrl = "https://jsonplaceholder.typicode.com/posts";

//     const [userRes, postRes] = await Promise.all([
//       fetch(usersUrl),
//       fetch(postsUrl),
//     ]);
//     const users = await userRes.json();
//     const posts = await postRes.json();

//     // console.table(users);
//     // console.table(posts);

//     const result = users.map((user) => {
//       const postsForUser = posts.filter((post) => post.userId === user.id);

//       return {
//         id: user.id,
//         name: user.name,
//         postCount: postsForUser.length,
//         isInfluencer: postsForUser.length > 5,
//       };
//     });

//     return result;
//   } catch (error) {
//     console.log(error);
//   }
// }

// getSuperUserData().then((data) => {
//   console.log(data);
// });

// ======================================= Bài tập thực hành ==============================================
// Nâng cao: Chỉ lấy những người có email đuôi .biz.
// Bài 3: Hệ thống "Retry" tự động (Logic thực tế)
// Ngữ cảnh: Đôi khi mạng lag, gọi API lần đầu bị lỗi. Bạn muốn hệ thống tự động thử lại 3 lần trước khi chính thức báo lỗi.
// Yêu cầu:
// Viết hàm unstableFetch(). Hàm này dùng Math.random() để:
// 70% tỉ lệ là reject("Lỗi kết nối").
// 30% tỉ lệ là resolve("Dữ liệu quý giá").
// Viết hàm smartRequest():
// Gọi unstableFetch().
// Nếu lỗi, tự động gọi lại (tối đa 3 lần).
// Nếu đến lần thứ 3 vẫn lỗi, mới dùng console.log báo "Thất bại hoàn toàn".
// Nếu thành công ở bất kỳ lần nào, dừng lại và báo "Thành công ở lần thử thứ [X]"

// ======================================= Bai lam

// function unstableFetch() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       const randomNumber = Math.random();
//       if (randomNumber <= 0.3) {
//         resolve("Tư liệu quý giá!");
//       } else {
//         reject("Lỗi kết nối !");
//       }
//     }, 2000);
//   });
// }

// async function smartRequest(maxRestries = 3) {
//   console.log("Starting Fetch Request >>>");
//   for (let i = 1; i <= maxRestries; i++) {
//     try {
//       const request = await unstableFetch();
//       console.log(`Thành Công Lần Thứ : ${i} , kq : ${request}`);
//       return;
//     } catch (error) {
//       console.log(`Lần ${i} thất bại`);

//       if (i === maxRestries) {
//         console.log("Thất bại hoàn toàn");
//       } else {
//         console.log(`Thử gửi lại lần ${i} ...`);
//       }
//     }
//   }
// }
// smartRequest();

// ======================================= Bài tập thực hành ==============================================

// 🚀 Thử thách "Hệ thống Gửi Tin nhắn Tự động" (Zalo/Ads Mockup)
// Ngữ cảnh: Bạn đang xây dựng một công cụ gửi tin nhắn quảng cáo. Bạn có một danh sách khách hàng,
// nhưng hệ thống không cho phép gửi tất cả cùng lúc (tránh bị khóa tài khoản). Bạn phải gửi từng nhóm một (Batch Processing).

// Yêu cầu:
// Hàm sendSms(phone):
// Trả về một Promise.

// Giả lập thời gian gửi là 1 giây (setTimeout).
// Tỉ lệ thành công là 80%. Nếu thất bại, báo lỗi: "Lỗi mạng khi gửi đến [phone]".
// Hàm processInBatches(phoneList, batchSize):
// Nhận vào mảng số điện thoại và kích thước mỗi đợt gửi (ví dụ: gửi 2 số một lần).
// Cực khó: Bạn phải gửi xong 2 số đầu tiên, đợi cả 2 xong, rồi mới được gửi tiếp 2 số tiếp theo. (Gợi ý: Dùng vòng lặp for và Promise.allSettled bên trong).
// Yêu cầu kết quả:
// Sau khi gửi hết danh sách, in ra báo cáo tổng kết:
// Tổng số tin gửi thành công.
// Danh sách các số điện thoại bị lỗi.
// Dữ liệu mẫu để bạn test:
// JavaScript
// const customers = [
//   "0901234567", "0912345678", "0923456789",
//   "0934567890", "0945678901", "0956789012"
// ];
// // Gọi hàm thực thi:
// // processInBatches(customers, 2); // Gửi mỗi đợt 2 số
// 💡 Gợi ý cho bạn:
// Để chia mảng thành từng đoạn nhỏ (batch), bạn có thể dùng vòng lặp for (let i = 0; i < customers.length; i += batchSize).
// Dùng .slice(i, i + batchSize) để lấy ra nhóm khách hàng của đợt đó.
// Sử dụng Promise.allSettled để quản lý một nhóm (batch) gửi đi, vì chúng ta không muốn một người lỗi làm dừng cả hệ thống.

// ======================================= Bai lam
// const customers = [
//   "0901234567",
//   "0912345678",
//   "0923456789",
//   "0934567890",
//   "0945678901",
//   "0956789012",
// ];

// function sendSms(phone) {
//   return new Promise((resolve, reject) => {
//     const randomNumber = Math.random();
//     if (randomNumber > 0.2) {
//       resolve(`Gửi Thành Công đến ${phone} !`);
//     } else {
//       reject(`Có lỗi khi gửi đến ${phone}`);
//     }
//   });
// }

// async function processInBatches(data, slot) {
//   let successCount = 0;
//   let failedList = [];
//   for (let i = 0; i < data.length; i += slot) {
//     const batch = data.slice(i, i + slot);
//     const results = await Promise.allSettled(
//       batch.map((phone) => sendSms(phone)),
//     );
//     results.forEach((result, index) => {
//       const phone = batch[index];
//       if (result.status === "fulfilled") {
//         successCount++;
//         console.log(result.value);
//       } else {
//         failedList.push(phone);
//       }
//     });
//   }
//   console.log("thành công : ", successCount);
//   console.log("Thất bại : ", failedList)
// }
// processInBatches(customers, 2);

// ======================================= Bài tập thực hành ==============================================
// 🚀 Thử thách Tổng hợp: Hệ thống Quản lý Chiến dịch Marketing (Zalo Ads Simulator)
// Bài toán này mô phỏng một hệ thống thực tế: Đọc data, xử lý logic phức tạp bằng HOF, gửi tin nhắn bất đồng bộ theo Batch, và lưu kết quả vào bộ nhớ.

// 📝 Đề bài:
// Bạn có một danh sách khách hàng thô (Raw Data):

// JavaScript
// const rawCustomers = [
//   { id: 1, name: "An", phone: "090123", email: "an@gmail.com", points: 120 },
//   { id: 2, name: "Bình", phone: "091234", email: "binh@yahoo.com", points: 40 },
//   { id: 3, name: "Chi", phone: "092345", email: "chi@biz.vn", points: 200 },
//   { id: 4, name: "Dũng", phone: "093456", email: "dung@biz.vn", points: 15 },
//   { id: 5, name: "Hoa", phone: "094567", email: "hoa@gmail.com", points: 300 },
//   { id: 6, name: "Khang", phone: "095678", email: "khang@fpt.vn", points: 80 },
// ];
// 🛠 Yêu cầu nhiệm vụ:
// 1. Xử lý dữ liệu với HOF (Chuẩn bị nguyên liệu)
// Viết hàm prepareAudience(data) thực hiện chuỗi thao tác sau:
// Filter: Chỉ lấy những khách hàng có email đuôi .vn HOẶC có số điểm points > 100.
// Map: Chuyển đổi thành Object mới chỉ gồm { phone, type }. Trong đó type là "VIP" nếu points > 150, ngược lại là "Standard".

// 2. Giả lập Memory Storage (Kho lưu trữ)
// Tạo một Object campaignReport để lưu trữ trạng thái:
// JavaScript
// const campaignReport = {
//   totalSent: 0,
//   success: [],
//   failed: []
// };

// 3. Thực thi gửi tin nhắn (Async & Batch)
// Sử dụng lại logic processInBatches của bạn để gửi tin nhắn cho danh sách đã lọc:
// Mỗi đợt (batch) gửi 2 khách hàng.
// Tỉ lệ thành công của hàm sendSms là 80%.
// Quan trọng: Sau mỗi đợt gửi thành công hay thất bại, bạn phải cập nhật dữ liệu vào campaignReport.

// 4. Tổng kết với Reduce (Thống kê)
// Sau khi gửi xong, hãy dùng .reduce() trên mảng campaignReport.success để tính tổng số ký tự của tất cả các số điện thoại đã gửi thành công (để giả lập tính tiền cước phí).

// ======================================= Bai lam

const rawCustomers = [
  { id: 1, name: "An", phone: "090123", email: "an@gmail.com", points: 120 },
  { id: 2, name: "Bình", phone: "091234", email: "binh@yahoo.com", points: 40 },
  { id: 3, name: "Chi", phone: "092345", email: "chi@biz.vn", points: 200 },
  { id: 4, name: "Dũng", phone: "093456", email: "dung@biz.vn", points: 15 },
  { id: 5, name: "Hoa", phone: "094567", email: "hoa@gmail.com", points: 300 },
  { id: 6, name: "Khang", phone: "095678", email: "khang@fpt.vn", points: 80 },
];

const newData = function prepareAudience(data) {
  const filterData = data.filter((item) => {
    return item.email.includes(".vn") || item.points > 100;
  });

  return filterData.map((item) => {
    return {
      phone: item.phone,
      type: item.points > 150 ? "VIP" : "Standard",
    };
  });
};

const campaignReport = {
  totalSent: 0,
  success: [],
  failed: [],
};

function sendSms(phone) {
  return new Promise((resolve, reject) => {
    const randomNumber = Math.random();
    if (randomNumber > 0.2) {
      resolve(`Gửi Thành Công đến ${phone} !`);
    } else {
      reject(`Có lỗi khi gửi đến ${phone}`);
    }
  });
}

async function processInBatches(data, slot) {
  console.log("--- Bắt đầu gửi tin nhắn ---");

  for (let i = 0; i < data.length; i += slot) {
    const batch = data.slice(i, i + slot);
    
    try {
      const results = await Promise.allSettled(
        batch.map((item) => sendSms(item.phone))
      );

      results.forEach((result, index) => {
        const customer = batch[index];

        if (result.status === "fulfilled") {
          console.log(`${result.value}`); 
          
          campaignReport.success.push(customer);
          campaignReport.totalSent++;
        } else {
          console.log(`Thất bại: ${result.reason}`);
          campaignReport.failed.push(customer);
        }
      });
      
      console.log(`--- Xong đợt ${Math.floor(i/slot) + 1} ---`);
      
    } catch (error) {
      console.log("Lỗi hệ thống đợt này:", error);
    }
  }
}

// 🚀 Thử thách "Siêu cấp HOF" (Trước khi kết thúc Day 5)
// Để thực sự nắm trùm HOF, hãy thử làm yêu cầu cuối này. Nó cực kỳ sát với cách React quản lý State (như Redux hoặc useReducer).
// Yêu cầu: Từ danh sách campaignReport.success, hãy tạo ra một Object thống kê xem có bao nhiêu khách hàng là "VIP" và bao nhiêu là "Standard".
// Kết quả mong muốn: { VIP: 2, Standard: 1 } (số lượng cụ thể tùy vào kết quả Random của bạn).
// ======================================= Bai lam


const approData = processInBatches(newData(rawCustomers), 2).then(() => {
  console.log("=== BÁO CÁO CHIẾN DỊCH ===");
  console.log("Thành công:", campaignReport.success);
  console.log("Thất bại:", campaignReport.failed);

  const totalChars = campaignReport.success.reduce(
    (sum, item) => sum + item.phone.length,
    0,
  );
  console.log("Tổng cước phí (dựa trên ký tự):", totalChars);

  const stats = campaignReport.success.reduce((acc, item) => {
    const type = item.type;
    acc[type] = (acc[type] || 0) + 1;
    return acc;
  }, {});

  console.log(stats);
});


