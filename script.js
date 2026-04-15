// --- DỮ LIỆU PACKS MẪU (BẠN SẼ THAY THẾ BẰNG DỮ LIỆU THẬT Ở ĐÂY) ---
const packsData = [
    // --- Khối dữ liệu AnyOne But You (Đã có sẵn) ---
    {
        id: 2,
        title: "ANYONE BUT YOU SCENEPACK (ALEX)",
        // ... (các dòng khác giữ nguyên) ...
        poster: "anyone_but_you_poster.jpg",
        // !!! QUAN TRỌNG: Thêm trường megaLink cho các pack cũ nếu bạn muốn có link download !!!
        megaLink: "LINK_MEGA_CỦA_ANYONE_BUT_YOU_Ở_ĐÂY" 
    },
    // --- Khối dữ liệu Bullet Train (Đã có sẵn) ---
    {
        id: 3,
        title: "BULLET TRAIN SCENEPACK (ALEX)",
        // ... (các dòng khác giữ nguyên) ...
        poster: "bullet_train_poster.jpg",
        megaLink: "LINK_MEGA_CỦA_BULLET_TRAIN_Ở_ĐÂY"
    }, // !!! NHỚ DẤU PHẨY NÀY !!!

    // ----------------------------------------------------------------------------------
    // DÁN ĐOẠN CODE SCP MỚI CỦA BẠN VÀO ĐÂY (SAU DẤU PHẨY CỦA KHỐI CUỐI CÙNG)
    // ----------------------------------------------------------------------------------
    {
        id: 4, // !!! NHỚ TĂNG ID LÊN (ví dụ: 4) ĐỂ KHÔNG BỊ TRÙNG !!!
        title: "SCP-049 'PLAGUE DOCTOR' SCENEPACK (ALEX)",
        meta: "Alex | SCP", // Sửa meta cho phù hợp
        creator: "alexscps",
        type: "tv", // Tạm để là TV vì nó là series mạng, hoặc bạn tự thêm loại 'scp' trong CSS sau
        
        // --- PHẦN 1: LIÊN KẾT ẢNH ---
        // Điền CHÍNH XÁC tên file ảnh bạn đã tải lên GitHub ở Phần 1
        poster: "scp_049_poster.jpg", 
        
        // Chi tiết cho modal
        tagline: "I am the cure.",
        description: "A collection of high-quality scenes featuring SCP-049, the Plague Doctor, from various containment breach logs and personnel interactions. Perfect for edits focusing on mystery and horror.",
        release: "CONTAINMENT LOG", // Có thể sửa nội dung cho phù hợp SCP
        status: "Euclid",          // Thay vì 'Released', bạn có thể để Phân loại SCP
        runtime: "15 mins of raw footage (Dữ liệu mẫu)",
        genres: "Horror, Mystery",
        
        // --- PHẦN 2: THÊM LINK MEGA ---
        // Copy link MEGA thật của bạn và dán vào giữa hai dấu ngoặc kép
        megaLink: "https://mega.nz/file/vIxFmCgR#z_vNfG9X0yL-k4M7a...DỮ_LIỆU_THẬT_CỦA_BẠN..." 
    }
    // Bạn có thể tiếp tục dán thêm các khối SCP khác ở đây, nhớ dấu phẩy ngăn cách.
];
