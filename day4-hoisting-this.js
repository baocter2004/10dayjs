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

// const orders = [
//   {
//     id: 1,
//     customer: "Alice",
//     items: [
//       { name: "Laptop", price: 1000 },
//       { name: "Mouse", price: 50 },
//     ],
//     status: "completed",
//   },
//   {
//     id: 2,
//     customer: "Bob",
//     items: [{ name: "Phone", price: 500 }],
//     status: "pending",
//   },
//   {
//     id: 3,
//     customer: "Alice",
//     items: [{ name: "Keyboard", price: 100 }],
//     status: "completed",
//   },
//   {
//     id: 4,
//     customer: "Charlie",
//     items: [{ name: "Monitor", price: 300 }],
//     status: "completed",
//   },
// ];

// function analyzeOrders(orders) {
//   const completedOrders = orders.filter(
//     (order) => order.status === "completed",
//   );
//   return {
//     getTotalRevenue() {
//       return completedOrders.reduce((total, order) => {
//         const orderPrice = order.items.reduce(
//           (sum, item) => sum + item.price,
//           0,
//         );
//         return total + orderPrice;
//       }, 0);
//     },
//     getCustomerSpending() {
//       return completedOrders.reduce((acc, order) => {
//         const customer = order.customer;
//         const orderPrice = order.items.reduce(
//           (sum, item) => sum + item.price,
//           0,
//         );
//         acc[customer] = (acc[customer] || 0) + orderPrice;

//         return acc;
//       }, {});
//     },
//     getUniqueProducts() {
//       const allProductNames = completedOrders.flatMap((order) =>
//         order.items.map((item) => item.name),
//       );
//       return [...new Set(allProductNames)];
//     },

//     isAllHighValue() {
//       return completedOrders.every((order) => {
//         const total = order.items.reduce((sum, item) => sum + item.price, 0);
//         return total > 100;
//       });
//     },
//   };
// }

// const analytics = analyzeOrders(orders);
// console.log("Doanh thu:", analytics.getTotalRevenue());
// console.log("Chi tiêu mỗi khách:", analytics.getCustomerSpending());
// console.log("Sản phẩm đã bán:", analytics.getUniqueProducts());
// console.log("Tất cả đơn > 100?", analytics.isAllHighValue());

// ======================================= Bài tập thực hành (bài tập mới) ==============================================
// 📝 Bài tập 3: Quản lý Kho Hàng (Inventory)
// Ngữ cảnh: Bạn quản lý một kho quần áo. Mỗi sản phẩm có tên, danh mục (category), giá bán (price), và số lượng tồn kho (stock).
// Dữ liệu đầu vào:

// JavaScript
// const inventory = [
//   { name: "Áo thun", category: "Shirt", price: 200, stock: 10 },
//   { name: "Quần Jeans", category: "Pant", price: 500, stock: 5 },
//   { name: "Áo sơ mi", category: "Shirt", price: 300, stock: 15 },
//   { name: "Quần Short", category: "Pant", price: 250, stock: 20 },
//   { name: "Giày Sneaker", category: "Shoes", price: 1000, stock: 2 },
// ];
// Yêu cầu bạn cần thực hiện:
// getLowStock(): Lọc ra các sản phẩm sắp hết hàng (Có stock nhỏ hơn 10). (Dùng .filter()).
// getTotalInventoryValue(): Tính tổng giá trị của toàn bộ kho hàng.
// Gợi ý: Giá trị của 1 sản phẩm = price * stock. Bạn cần tính tổng của tất cả các phép nhân này. (Dùng .reduce() với giá trị khởi tạo là 0).
// getStockByCategory() - (Màn Boss của bạn đây!): Gom nhóm tổng số lượng hàng tồn kho theo từng danh mục.
// Kết quả mong đợi: { "Shirt": 25, "Pant": 25, "Shoes": 2 } (Vì có 10 Áo thun + 15 Áo sơ mi = 25 Shirt).
// Gợi ý: Dùng .reduce() với giá trị khởi tạo là Object {}. Cách làm giống hệt việc cộng dồn tiền cho khách hàng ở bài trước: acc[category] = (acc[category] || 0) + stock;.
// getPromoStrings(): Trả về một mảng chứa các câu quảng cáo cho từng sản phẩm theo mẫu: "Giảm giá cực sốc: [Tên sản phẩm] chỉ với [Giá]!". (Dùng .map()).

// ======================================= Bai lam

// const inventory = [
//   { name: "Áo thun", category: "Shirt", price: 200, stock: 10 },
//   { name: "Quần Jeans", category: "Pant", price: 500, stock: 5 },
//   { name: "Áo sơ mi", category: "Shirt", price: 300, stock: 15 },
//   { name: "Quần Short", category: "Pant", price: 250, stock: 20 },
//   { name: "Giày Sneaker", category: "Shoes", price: 1000, stock: 2 },
// ];

//  return completedOrders.reduce((acc, order) => {
//         const customer = order.customer;
//         const orderPrice = order.items.reduce(
//           (sum, item) => sum + item.price,
//           0,
//         );
//         acc[customer] = (acc[customer] || 0) + orderPrice;

//         return acc;
//       }, {});

// function manageInventory(inventory) {
//   return {
//     getLowStock() {
//       let product = inventory.filter((item) => item.stock < 10);
//       return product;
//     },
//     getTotalInventoryValue() {
//       let totalPrice = inventory.reduce(
//         (total, item) => total + item.price * item.stock,
//         0,
//       );
//       return totalPrice;
//     },
//     getStockByCategory() {
//       return inventory.reduce((chiecTu, sanPham) => {
//         const danhMuc = sanPham.category;
//         const soLuong = sanPham.stock;
//         chiecTu[danhMuc] = (chiecTu[danhMuc] || 0) + soLuong;
//         return chiecTu;
//       }, {});
//     },
//     getPromoStrings() {
//       return inventory.map(
//         (item) => `Giảm giá cực sốc: ${item.name} chỉ với ${item.price}!`,
//       );
//     },
//   };
// }

// const myStore = manageInventory(inventory);
// console.log("Sắp hết hàng:", myStore.getLowStock());
// console.log("Tổng giá trị kho:", myStore.getTotalInventoryValue());
// console.log("Tồn kho theo danh mục:", myStore.getStockByCategory());
// console.log("Chuỗi quảng cáo:", myStore.getPromoStrings());

// ======================================= Bài tập thực hành (bài tập mới) ==============================================

// 📝 Bài tập nâng cao: Phân tích mạng xã hội (Social Media Analytics)
// Ngữ cảnh: Bạn có một danh sách người dùng. Mỗi người dùng có một mảng các bài đăng (posts), mỗi bài đăng lại có số lượt thích (likes) và một mảng các nhãn (tags).
// Dữ liệu đầu vào:
// JavaScript
// const users = [
//   {
//     id: 1,
//     name: "Alice",
//     posts: [
//       { content: "Yêu đời quá", likes: 120, tags: ["lifestyle", "happy"] },
//       { content: "Học JS khó quá", likes: 50, tags: ["coding", "javascript"] },
//     ],
//   },
//   {
//     id: 2,
//     name: "Bob",
//     posts: [
//       { content: "Cà phê sáng", likes: 200, tags: ["lifestyle", "coffee"] },
//     ],
//   },
//   {
//     id: 3,
//     name: "Charlie",
//     posts: [
//       { content: "JS thật vi diệu", likes: 80, tags: ["coding", "javascript"] },
//       { content: "Chill cuối tuần", likes: 150, tags: ["lifestyle", "relax"] },
//     ],
//   },
// ];
// 🚀 Yêu cầu (Độ khó: ⭐⭐⭐)
// Bạn hãy viết các hàm sau:
// - getStatistics(): Trả về một mảng các Object mới, mỗi Object chứa name của người dùng và totalLikes (tổng likes của tất cả bài post của người đó).
// Gợi ý: Dùng .map() để duyệt qua các user, bên trong mỗi user dùng .reduce() để tính tổng likes.
// - getTrendingTags(): Trả về một Object thống kê số lần xuất hiện của từng tag trên toàn hệ thống.
// Kết quả mong đợi: { lifestyle: 3, happy: 1, coding: 2, ... }
// Gợi ý: Dùng .flatMap() để lấy toàn bộ tags ra một mảng phẳng, sau đó dùng .reduce() với logic "chiếc tủ" để đếm.
// - getInfluencers(): Lọc ra danh sách những người dùng có tổng số likes trên 250.
// Gợi ý: Bạn có thể tận dụng kết quả của hàm số 1 hoặc dùng .filter().
// - findHardcoreCoders(): Tìm danh sách tên (mảng string) những người dùng có ít nhất một bài đăng chứa tag "javascript".
// Gợi ý: Kết hợp .filter() và .some().

// ======================================= Bai lam

// const users = [
//   {
//     id: 1,
//     name: "Alice",
//     posts: [
//       { content: "Yêu đời quá", likes: 120, tags: ["lifestyle", "happy"] },
//       { content: "Học JS khó quá", likes: 50, tags: ["coding", "javascript"] },
//     ],
//   },
//   {
//     id: 2,
//     name: "Bob",
//     posts: [
//       { content: "Cà phê sáng", likes: 200, tags: ["lifestyle", "coffee"] },
//       { content: "Cà phê trưa", likes: 400, tags: ["lifestyle", "coffee"] },
//     ],
//   },
//   {
//     id: 3,
//     name: "Charlie",
//     posts: [
//       { content: "JS thật vi diệu", likes: 80, tags: ["coding", "javascript"] },
//       { content: "Chill cuối tuần", likes: 150, tags: ["lifestyle", "relax"] },
//     ],
//   },
//   {
//     id: 4,
//     name: "Meme",
//     posts: [
//       { content: "JS thật vi diệu", likes: 80, tags: ["coding", "javascript"] },
//       { content: "Chill cuối tuần", likes: 150, tags: ["lifestyle", "relax"] },
//     ],
//   },
// ];

// function analyzeSocialData(data) {
//   return {
//     // - getStatistics(): Trả về một mảng các Object mới, mỗi Object chứa name của người dùng và totalLikes (tổng likes của tất cả bài post của người đó).
//     // Gợi ý: Dùng .map() để duyệt qua các user, bên trong mỗi user dùng .reduce() để tính tổng likes.
//     getStatistics() {
//       return data.map((user) => {
//         let name = user.name;
//         let totalLike = user.posts.reduce((total, post) => {
//           return total + post.likes;
//         }, 0);

//         return { name: name, totalLike: totalLike };
//       });
//     },
//     // - getTrendingTags(): Trả về một Object thống kê số lần xuất hiện của từng tag trên toàn hệ thống.
//     // Kết quả mong đợi: { lifestyle: 3, happy: 1, coding: 2, ... }
//     // Gợi ý: Dùng .flatMap() để lấy toàn bộ tags ra một mảng phẳng, sau đó dùng .reduce() với logic "chiếc tủ" để đếm.
//     getTrendingTags() {
//       const allTags = data
//         .flatMap((user) => user.posts)
//         .flatMap((post) => post.tags);

//       return allTags.reduce((acc, tag) => {
//         acc[tag] = (acc[tag] || 0) + 1;
//         return acc;
//       }, {});
//     },
//     // - getInfluencers(): Lọc ra danh sách những người dùng có tổng số likes trên 250.
//     // Gợi ý: Bạn có thể tận dụng kết quả của hàm số 1 hoặc dùng .filter().
//     getInfluencers() {
//       const items = this.getStatistics();
//       return items.filter((item) => item.totalLike > 250);
//     },
//     // - findHardcoreCoders(): Tìm danh sách tên (mảng string) những người dùng có ít nhất một bài đăng chứa tag "javascript".
//     // Gợi ý: Kết hợp .filter() và .some().
//     findHardcoreCoders() {
//       const data = users.filter((user) => {
//         return user.posts.some((post) => post.tags.includes("javascript"));
//       });

//       return data.map((user) => user.name);
//     },
//   };
// }

// const analytics = analyzeSocialData(users);
// console.log("Thống kê Likes:", analytics.getStatistics());
// console.log("Tags xu hướng:", analytics.getTrendingTags());
// console.log("KOL (Influencers):", analytics.getInfluencers());
// console.log("Dân Pro JS:", analytics.findHardcoreCoders());

// ======================================= Bài tập thực hành (bài tập mới) ==============================================
// 📝 Bài tập 5: Hệ thống Quản lý Rạp chiếu phim (Cinema Management)
// Ngữ cảnh: Bạn đang quản lý lịch chiếu cho một rạp phim. Mỗi bộ phim có tên, thể loại, doanh thu theo từng suất chiếu, và lịch chiếu (ngày giờ).

// Dữ liệu đầu vào:
// const movies = [
//   {
//     title: "Inside Out 2",
//     genres: ["Animation", "Family"],
//     showtimes: [
//       { date: "2024-06-01", time: "10:00", revenue: 500 },
//       { date: "2024-06-01", time: "14:00", revenue: 800 },
//       { date: "2024-06-02", time: "19:00", revenue: 1200 },
//     ],
//   },
//   {
//     title: "Dune: Part Two",
//     genres: ["Sci-Fi", "Adventure"],
//     showtimes: [
//       { date: "2024-06-01", time: "15:00", revenue: 1500 },
//       { date: "2024-06-02", time: "20:00", revenue: 2000 },
//     ],
//   },
//   {
//     title: "Despicable Me 4",
//     genres: ["Animation", "Comedy"],
//     showtimes: [
//       { date: "2024-06-01", time: "09:00", revenue: 400 },
//     ],
//   },
// ];

// 🚀 Yêu cầu (Độ khó: ⭐⭐⭐⭐ - Thử thách cực đại)
// Hãy viết hàm analyzeCinema(movies) trả về các phương thức sau:

// getMovieSummaries(): Trả về mảng các phim kèm theo totalRevenue của phim đó.
// Kết quả: [{ title: "Inside Out 2", totalRevenue: 2500 }, ...]

// getRevenueByGenre(): Tính tổng doanh thu theo từng thể loại phim. Lưu ý: Một bộ phim có thể có nhiều thể loại,
// doanh thu của phim đó sẽ được tính cộng dồn cho tất cả các thể loại mà nó thuộc về.
// Gợi ý: Dùng reduce. Với mỗi bộ phim, bạn duyệt qua mảng genres của nó và cộng totalRevenue vào ngăn tủ tương ứng.

// getNightMovies(): Tìm tên các bộ phim có ít nhất một suất chiếu vào khung giờ tối (sau 18:00).
// Gợi ý: Dùng .filter() và .some(). So sánh chuỗi thời gian: "19:00" > "18:00" là true.

// getTopGrossingMovie(): Trả về duy nhất Object của bộ phim có tổng doanh thu cao nhất.
// Gợi ý: Tính doanh thu xong rồi dùng .sort() giảm dần và lấy phần tử đầu tiên [0].

// ======================================= Bai lam

// const movies = [
//   {
//     title: "Inside Out 2",
//     genres: ["Animation", "Family"],
//     showtimes: [
//       { date: "2024-06-01", time: "10:00", revenue: 500 },
//       { date: "2024-06-01", time: "14:00", revenue: 800 },
//       { date: "2024-06-02", time: "19:00", revenue: 1200 },
//     ],
//   },
//   {
//     title: "Dune: Part Two",
//     genres: ["Sci-Fi", "Adventure"],
//     showtimes: [
//       { date: "2024-06-01", time: "15:00", revenue: 1500 },
//       { date: "2024-06-02", time: "20:00", revenue: 2000 },
//     ],
//   },
//   {
//     title: "Despicable Me 4",
//     genres: ["Animation", "Comedy"],
//     showtimes: [{ date: "2024-06-01", time: "09:00", revenue: 400 }],
//   },
// ];

// function analyzeCinema(data) {
//   return {
//     // getMovieSummaries(): Trả về mảng các phim kèm theo totalRevenue của phim đó.
//     // Kết quả: [{ title: "Inside Out 2", totalRevenue: 2500 }, ...]
//     getMovieSummaries() {
//       let sumaries = data.map((item) => {
//         let totalRevenue = item.showtimes.reduce(
//           (total, subItem) => total + subItem.revenue,
//           0,
//         );

//         return {
//           title: item.title,
//           total: totalRevenue,
//         };
//       });

//       return sumaries;
//     },
//     // getRevenueByGenre(): Tính tổng doanh thu theo từng thể loại phim. Lưu ý: Một bộ phim có thể có nhiều thể loại,
//     // doanh thu của phim đó sẽ được tính cộng dồn cho tất cả các thể loại mà nó thuộc về.
//     // Gợi ý: Dùng reduce. Với mỗi bộ phim, bạn duyệt qua mảng genres của nó và cộng totalRevenue vào ngăn tủ tương ứng.
//     getRevenueByGenre() {
//       let revenueByGenres = data.reduce((acc, item) => {
//         let totalRevenue = item.showtimes.reduce(
//           (total, subItem) => total + subItem.revenue,
//           0,
//         );

//         return item.genres.reduce((acc2, genre) => {
//           acc2[genre] = (acc2[genre] || 0) + totalRevenue;
//           return acc2;
//         }, acc);
//       }, {});

//       return revenueByGenres;
//     },
//     // getNightMovies(): Tìm tên các bộ phim có ít nhất một suất chiếu vào khung giờ tối (sau 18:00).
//     // Gợi ý: Dùng .filter() và .some(). So sánh chuỗi thời gian: "19:00" > "18:00" là true.
//     getNightMovies() {
//       const items = data.filter((item) => {
//         return item.showtimes.some((subItem) => subItem.time > "18:00");
//       });

//       return items.map((item) => {
//         return {
//           name: item.title,
//           time: item.showtimes
//             .filter((subItem) => subItem.time > "18:00")
//             .map((subItem) => subItem.time),
//         };
//       });
//     },
//     // getTopGrossingMovie(): Trả về duy nhất Object của bộ phim có tổng doanh thu cao nhất.
//     // Gợi ý: Tính doanh thu xong rồi dùng .sort() giảm dần và lấy phần tử đầu tiên [0].
//     getTopGrossingMovie() {
//       const summaries = this.getMovieSummaries();
//       summaries.sort((a, b) => b.totalRevenues - a.totalRevenues);
//       return movies[0];
//     },
//   };
// }

// const cinemaStats = analyzeCinema(movies);
// console.log("Tóm tắt doanh thu:", cinemaStats.getMovieSummaries());
// console.log("Doanh thu theo thể loại:", cinemaStats.getRevenueByGenre());
// console.log("Phim chiếu tối:", cinemaStats.getNightMovies());
// console.log("Phim ăn khách nhất:", cinemaStats.getTopGrossingMovie());
