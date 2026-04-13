// ============================================= Các Hàm Sử Dụng Với Mảng =================================================

// ======================================= Array.map() - Dây chuyền biến đổi

/**
 * - Bản chất: Chạy qua từng phần tử của mảng cũ, "biến hình" nó theo một công thức bạn định ra, và trả về một mảng hoàn
 * toàn mới có cùng số lượng phần tử. Mảng gốc không bị ảnh hưởng.
 * - Thực tế: Dùng khi muốn trích xuất một thuộc tính cụ thể, hoặc format lại dữ liệu.
 */

// const gioHang = [
//   { ten: "Cà Phê", gia: 5000 },
//   { ten: "Trà Đào", gia: 5700 },
//   { ten: "Hạt Tiêu", gia: 70000 },
// ];

// // Yêu cầu : Lấy ra một mảng chỉ chứa tên các món ăn

// const hoaDon = gioHang.map(function (sanPham) {
//   return sanPham.ten;
// });

// console.log(hoaDon);

// ======================================= Array.filter() - Màng lọc dữ liệu

/**
 * - Bản chất: Chạy qua từng phần tử, kiểm tra một điều kiện (phải trả về true hoặc false). Nếu true, phần tử đó được giữ lại và đưa vào mảng mới. Nếu false, bỏ qua.
 * - Thực tế: Dùng cực nhiều để làm chức năng tìm kiếm, lọc sản phẩm (giá > 50k), hoặc xóa phần tử khỏi mảng.
 */

// Yêu cầu : Lọc ra những món có giá trị từ 30000 trở lên

// const monCaoCap = gioHang.filter(function (monHang) {
//   return monHang.gia >= 30000;
// });

// console.log(monCaoCap);

// ======================================= Array.reduce() - Cỗ máy nén

/**
 * - Bản chất: Đi qua từng phần tử và "nhồi" tất cả lại thành MỘT giá trị duy nhất (có thể là 1 con số, 1 chuỗi, hoặc 1 object mới).
 *   Nó cần 2 thứ:
 *      Acc (Accumulator - Biến tích lũy): Cái hộp chứa kết quả sau mỗi vòng lặp.
 *      Giá trị khởi tạo của acc (ví dụ: 0).
 * - Thực tế: Dùng kinh điển nhất là tính tổng tiền giỏ hàng, hoặc nhóm các dữ liệu trùng nhau lại.
 */

// const tongTien = gioHang.reduce(function (acc, mon) {
//   console.log(acc, mon.gia);
//   return acc + mon.gia;
// }, 0);

// console.log(tongTien);

// ======================================= Array.find() - Trinh sát đánh lẻ
/**
 * - Bản Chất: Hoạt động giống hệt filter() , nhưng thay vì gom tất cả những kẻ thỏa mãn vào 1 mảng mới,
 * find() chỉ lấy phần tử Đầu Tiên nó tìm thấy và dừng lại ngay lập tức , nó trả về chính phần tử đó ( thường là object),
 * nếu không thấy thì trả về underfined.
 * - Thực Tế: Cực kỳ hay dùng để tìm thông tin chi tiết của 1 user theo id, hoặc tìm 1 sản phẩm cụ thể.
 */

// const nhanVien = [
//   { id: 1, ten: "Hoàng", role: "Dev" },
//   { id: 2, ten: "Thi", role: "Dev" },
//   { id: 3, ten: "Bắc", role: "Intern" }
// ];

// const timThi = nhanVien.find((nv) => nv.ten === "Thi");
// console.log(timThi);

// ======================================= Array.some() và Array.every() - Ban giám khảo : trả về boolean
/**
 * - Bản chất: Không trả về dữ liệu, chỉ trả về true hoặc false dựa trên việc kiểm tra các phần tử trong mảng.
 *      some(): Chỉ cần MỘT phần tử thỏa mãn điều kiện là chốt true (giống phép toán OR).
 *      every(): TẤT CẢ phần tử phải thỏa mãn điều kiện mới chốt true (giống phép toán AND).
 * - Thực tế: Kiểm tra xem "trong giỏ hàng có món nào đang hết hàng không?" (some), hoặc "tất cả form nhập liệu đã điền đủ chưa?" (every).
 */

// const diemThi = [7,8,5,9];

// // có môn nào bị dưới trung bình không (5) ?
// const coMonTruot = diemThi.some(diem => diem < 5);
// console.log(coMonTruot);

// // Tất cả các môn đều trên 6 ?
// const tatCaTren6 = diemThi.every(diem => diem > 6);
// console.log(tatCaTren6);

// ======================================= Array.some() và Array.every() - Ban giám khảo : trả về boolean
/**
 * - Bản chất: Không trả về dữ liệu, chỉ trả về true hoặc false dựa trên việc kiểm tra các phần tử trong mảng.
 *      some(): Chỉ cần MỘT phần tử thỏa mãn điều kiện là chốt true (giống phép toán OR).
 *      every(): TẤT CẢ phần tử phải thỏa mãn điều kiện mới chốt true (giống phép toán AND).
 * - Thực tế: Kiểm tra xem "trong giỏ hàng có món nào đang hết hàng không?" (some), hoặc "tất cả form nhập liệu đã điền đủ chưa?" (every).
 */

// const diemThi = [7, 8, 5, 9];

// // Có môn nào bị dưới trung bình (dưới 5) không?
// const coMonTruot = diemThi.some(diem => diem < 5);
// console.log(coMonTruot); // Kết quả: false (May quá, không có)

// // Tất cả các môn đều trên 6 phải không?
// const hocSinhKha = diemThi.every(diem => diem > 6);
// console.log(hocSinhKha); // Kết quả: false (Vì có môn được 5)

// ======================================= Array.sort() - Người sắp xếp ( cú lừa js )
/**
 * - Bản chất: Sắp xếp lại mảng gốc. Lưu ý cực kỳ quan trọng: mặc định, JS sẽ coi mọi thứ là
 * chuỗi (String) để sắp xếp. nên số 10 sẽ đứng trước số 2...
 * - Để sắp xếp số chuẩn, phải truyền vào một hàm so sánh (a,b).
 *      Xếp tăng dần : a - b
 *      Xếp giảm dần : b - a
 * - Thực tế : Sắp xếp sản phẩm theo giá tăng/giảm, xếp hạng danh sách sinh viên.
 */

// const giaTien = [50, 10, 100, 2];

// // nếu dùng mặc định : giaTien.sort() -> kết quả sai : [10, 100, 2, 50]

// const kqSai = giaTien.sort();
// console.log(kqSai);

// Xếp tăng dần chuẩn:
// const kqDung = giaTien.sort((a,b) => {
//     console.log(a,b)
// });
// console.log(kqDung);

// ======================================= Array.foreach*() - Cỗ máy cày
/**
 * - Bản chất: Chạy qua từng phần tử giống hệt vòng lặp for, nhưng cú pháp ngắn gọn hơn,
 * điểm khác biệt lớn nhất giữa foreach và map là: foreach không trả về cái gì cả (undefined).
 * Nó chỉ thực hiện "hành động" (side-effects).
 * - Để sắp xếp số chuẩn, phải truyền vào một hàm so sánh (a,b).
 *      Xếp tăng dần : a - b
 *      Xếp giảm dần : b - a
 * - Thực tế : ùng khi muốn in log từng người ra màn hình, gửi API thông báo cho từng user, hoặc chèn HTML vào giao diện.
 */

// const nhanVien = [
//   { id: 1, ten: "Hoàng", role: "Dev" },
//   { id: 2, ten: "Thi", role: "Dev" },
//   { id: 3, ten: "Bắc", role: "Intern" }
// ];

// nhanVien.forEach((nv) => {
//     console.log(`Xin chào nhân viên : ${nv.ten}`)
// });

/**
 * ======================================= Bài Tập "Check Point" Nhẹ Nhàng =======================================
Bây giờ nhà hàng của chúng ta có một menu như sau:

JavaScript
const menu = [
  { id: 1, ten: "Phở bò", gia: 45000, trangThai: "Sẵn sàng" },
  { id: 2, ten: "Bún chả", gia: 50000, trangThai: "Hết hàng" },
  { id: 3, ten: "Trà đá", gia: 5000, trangThai: "Sẵn sàng" },
  { id: 4, ten: "Cơm rang", gia: 40000, trangThai: "Sẵn sàng" }
];
Để xem cậu áp dụng mớ "vũ khí mới" này như thế nào, hãy viết code cho 3 yêu cầu sau (Nhớ dùng Arrow Function chuẩn Senior nhé):
Dùng find(): Tìm và lấy ra object của món "Trà đá".
Dùng some(): Kiểm tra xem trong menu hiện tại có món nào đang "Hết hàng" hay không (in ra true/false).
Dùng sort(): Sắp xếp lại mảng menu theo giá tiền TĂNG DẦN. (Gợi ý: So sánh a.gia và b.gia).
 */

// const menu = [
//   { id: 1, ten: "Phở bò", gia: 45000, trangThai: "Sẵn sàng" },
//   { id: 2, ten: "Bún chả", gia: 50000, trangThai: "Hết hàng" },
//   { id: 3, ten: "Trà đá", gia: 5000, trangThai: "Sẵn sàng" },
//   { id: 4, ten: "Cơm rang", gia: 40000, trangThai: "Sẵn sàng" },
// ];

// // Tìm trà đá :
// const traDa = menu.find((menuItem) => menuItem.ten === "Trà đá");
// console.log(traDa);
// // Kiểm tra xem menu có món nào hết hàng không
// const hetHang = menu.some((menuItem) => menuItem.trangThai === "Hết hàng");
// console.log(hetHang);
// // sort theo giá tiền tăng dần
// const sortTangDan = menu.sort((a, b) => a.gia - b.gia);
// console.log(sortTangDan);

// ============================================= Bài tập =================================================

// Cho một mảng dữ liệu nhân sự như sau:

// JavaScript
// const nhanVien = [
//   { id: 1, ten: "Hoàng", role: "Dev", luong: 1000 },
//   { id: 2, ten: "Thi", role: "Dev", luong: 1200 },
//   { id: 3, ten: "Bắc", role: "Intern", luong: 500 }
// ];
// Yêu cầu cậu viết code thực hiện 2 thao tác sau (không dùng vòng lặp for):
// Tạo ra một mảng mới chỉ chứa các nhân viên có role là "Dev".
// Tính tổng số tiền lương phải trả cho tất cả mọi người trong mảng nhanVien

// const nhanVien = [
//   { id: 1, ten: "Hoàng", role: "Dev", luong: 1000 },
//   { id: 2, ten: "Thi", role: "Dev", luong: 1200 },
//   { id: 3, ten: "Bắc", role: "Intern", luong: 500 },
// ];

// const nhanVienMoi = nhanVien.filter((nv) => nv.role === "Dev");
// console.log(nhanVienMoi);

// const tongTienLuong = nhanVien.reduce((acc, nv) => acc + nv.luong, 0);

// console.log(tongTienLuong);

// ================================================= Bài Tập Qua Môn - Day 1 ===================================================

/**
 * 🚀 TICKET PRO: Luồng Thanh Toán & Quản Lý Bàn Ăn
Mô tả: Hệ thống cần một Class BanAn đóng vai trò quản lý vòng đời của một bàn: từ lúc khách ngồi vào, gọi món, đổi ý hủy món, cho đến lúc thu ngân chốt bill, xuất hóa đơn và dọn bàn để đón khách mới.

Yêu cầu kỹ thuật (Specifications):
1. Hàm khởi tạo (Constructor):
Nhận vào tham số soBan và khởi tạo 4 thuộc tính:
this.soBan: Gán bằng giá trị truyền vào.
this.trangThai: Mặc định là "Trống".
this.danhSachMon: Mảng rỗng [].
this.tienTip: Mặc định là 0.

2. Method goiMon(id, tenMon, giaTien):
Đóng gói 3 tham số trên thành một Object và dùng .push() thêm vào this.danhSachMon.
Chuyển this.trangThai sang "Đang phục vụ".

3. Method huyMon(idCanHuy):
Khách đổi ý không ăn nữa. Sử dụng Array.filter() để lọc ra những món có id KHÁC VỚI idCanHuy, sau đó gán mảng kết quả đè lại lên this.danhSachMon.

4. Method capNhatTip(soTien):
Cộng dồn số tiền mới vào this.tienTip.

5. Method xuatHoaDon():
Dùng Array.reduce() quét qua this.danhSachMon để tính tổng tiền thức ăn.
Cộng tổng tiền thức ăn với this.tienTip để ra số tiền cuối cùng.
Dọn bàn: Reset this.trangThai về "Trống", this.danhSachMon về [], và this.tienTip về 0.
return ra một Object đại diện cho tờ hóa đơn: { soBan: ..., tongTien: ..., trangThaiBan: ... }.

Kịch bản Test (Execution):
Dùng new tạo ra banSo8.

Gọi 3 món:
id: 1, "Gà nướng", 250000
id: 2, "Salad", 50000
id: 3, "Bia", 30000

Khách không thích rau, gọi method huyMon(2) để hủy Salad.
Bo thêm 20000.

Gọi xuatHoaDon() và dùng console.log() in tờ hóa đơn ra màn hình. (Tổng tiền chuẩn phải là 300000).
Dùng console.log(banSo8.trangThai) để kiểm tra xem bàn đã được reset về "Trống" chưa.
 */

class BanAn {
  constructor(soBan) {
    this.soBan = soBan;
    this.trangThai = "Trống";
    this.danhSachMon = [];
    this.tienTip = 0;
  }

  goiMon(id, tenMon, giaTien) {
    this.danhSachMon.push({ id, tenMon, giaTien });
    this.trangThai = "Đang phục vụ...";
  }

  huyMon(idCanHuy) {
    let danhSachMonSauKhiHuy = this.danhSachMon.filter(
      (monAn) => monAn.id !== idCanHuy,
    );
    this.danhSachMon = danhSachMonSauKhiHuy;
  }

  tinhTienDoAn() {
    return this.danhSachMon.reduce((sum, mon) => sum + mon.giaTien, 0);
  }

  capNhatTip() {
    const tongTien = this.tinhTienDoAn();

    this.tienTip = tongTien > 500000 ? tongTien * 0.1 : tongTien * 0.15;

    console.log(`[Bàn ${this.soBan}] Tiền tip tự động: ${this.tienTip}`);
  }

  xuatHoaDon() {
    const tongTienDoAn = this.tinhTienDoAn();
    const tongTienThucTe = tongTienDoAn + this.tienTip;

    const hoadon = {
      tongTien: tongTienDoAn,
      tienTip: this.tienTip,
      tongTienThucTe: tongTienThucTe,
      monDaOrder: [...this.danhSachMon],
    };

    this.danhSachMon = [];
    this.trangThai = "Trống";
    this.tienTip = 0;

    console.log("=== HÓA ĐƠN ===");
    console.log(hoadon);
    return hoadon;
  }
}

const banAnSo8 = new BanAn(8);
banAnSo8.goiMon(1, "Gà nướng", 250000);
banAnSo8.goiMon(2, "Salad", 50000);
banAnSo8.goiMon(3, "Bia", 30000);
banAnSo8.huyMon(2);
banAnSo8.capNhatTip();
banAnSo8.xuatHoaDon();
