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
async function getUserDashboard(userId) {
  try {
    const userUrl = `https://jsonplaceholder.typicode.com/users/${userId}`;
    const postUrl = `https://jsonplaceholder.typicode.com/posts?userId=${userId}`;

    const [userRes, postsRes] = await Promise.all([
      fetch(userUrl),
      fetch(postUrl),
    ]);

    const user = await userRes.json();
    const posts = await postsRes.json();

    return {
      userName: user.name,
      recentPosts: posts.map((post) => post.title),
    };
  } catch (error) {
    console.log(error);
  }
}

async function run() {
  const checkData = await getUserDashboard(1);
  console.log(checkData);
}

run();
