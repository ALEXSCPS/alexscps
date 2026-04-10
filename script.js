// Cấu trúc dữ liệu cho tệp tin bạn cần tải
const downloadQueue = [
    {
        fileName: "chelsea muph 2025",
        status: "Pending",
        link: "https://mega.nz/folder/cQkxAbaS#D4VXwo-I1R_Rvhq6vEjO9A"
    }
];

// Hàm hiển thị thông tin tải về ra Console
function displayDownloadInfo(queue) {
    console.log("--- Danh sách tải về của bạn ---");
    
    queue.forEach((item, index) => {
        console.log(`${index + 1}. Tên ảnh: ${item.fileName}`);
        console.log(`   Trạng thái: ${item.status}`);
        console.log(`   Link truy cập: ${item.link}`);
        console.log("--------------------------------");
    });
}

// Hàm giả lập kích hoạt trình duyệt mở link (nếu chạy trên trình duyệt)
function openMegaLink(index) {
    const item = downloadQueue[index];
    if (item) {
        console.log(`Đang mở link cho: ${item.fileName}...`);
        window.open(item.link, '_blank');
    } else {
        console.error("Không tìm thấy mục này trong hàng đợi.");
    }
}

// Thực thi
displayDownloadInfo(downloadQueue);

// Bỏ comment dòng dưới đây nếu bạn muốn tự động mở link khi chạy file trong trình duyệt
// openMegaLink(0);