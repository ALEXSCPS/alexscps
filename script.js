// --- DỮ LIỆU PACKS MẪU (BẠN SẼ THAY THẾ BẰNG DỮ LIỆU THẬT Ở ĐÂY) ---
// Thay thế 'link_anh_cua_ban.jpg' bằng tên file ảnh thật bạn tải lên GitHub.
const packsData = [
    {
        id: 1,
        title: "WE OWN THIS CITY SCENEPACK (ALEX)",
        meta: "Alex | TV Show",
        creator: "alexscps",
        type: "tv",
        poster: "link_anh_cua_ban.jpg", // Tải ảnh 'we_own_poster.jpg' lên GitHub rồi sửa tên file ở đây
        // Chi tiết cho modal (giống image_0.png)
        tagline: "The story of Baltimore's corrupt Gun Trace Task Force.",
        description: "After a shocking first date, Bea and Ben’s fiery attraction turns ice cold – until they find themselves unexpectedly reunited at a destination wedding in Australia. (Dữ liệu mẫu cho mô tả)",
        release: "21 thg 12, 2023 (Dữ liệu mẫu)",
        runtime: "1h 43m (Dữ liệu mẫu)",
        genres: "Romance, Comedy (Dữ liệu mẫu)"
    },
    {
        id: 2,
        title: "ANYONE BUT YOU SCENEPACK (ALEX)",
        meta: "Alex | Movie",
        creator: "alexscps",
        type: "movie",
        poster: "anyone_but_you_poster.jpg", // Tải ảnh này lên GitHub
        tagline: "They only look like the perfect couple.",
        description: "After an amazing first date, Bea and Ben’s fiery attraction turns ice cold – until they find themselves unexpectedly reunited at a destination wedding in Australia. So they do what any two mature adults would do: pretend to be a couple.",
        release: "21 thg 12, 2023",
        status: "Released",
        runtime: "1h 43m",
        genres: "Romance, Comedy"
    },
    {
        id: 3,
        title: "BULLET TRAIN SCENEPACK (ALEX)",
        meta: "Alex | Movie",
        creator: "alexscps",
        type: "movie",
        poster: "bullet_train_poster.jpg", // Tải ảnh này lên GitHub
        tagline: "All aboard the action.",
        description: "Unlucky assassin Ladybug is determined to do his job peacefully after one too many gigs gone off the rails. Fate, however, may have other plans...",
        release: "05 thg 8, 2022",
        status: "Released",
        runtime: "2h 6m",
        genres: "Action, Comedy"
    }
    // Thêm các packs khác ở đây theo cấu trúc này
];

// --- KHỞI TẠO VÀ XỬ LÝ LỘC ---
document.addEventListener('DOMContentLoaded', () => {
    const packsGrid = document.getElementById('packs-grid');
    const packCountSpan = document.getElementById('pack-count');
    const searchBar = document.getElementById('search-bar');
    const filterButtons = document.querySelectorAll('.filter-btn');

    // Khởi tạo các bộ lọc mặc định
    let currentSort = 'latest';
    let currentCreator = 'all';
    let currentType = 'all';
    let currentSearchTerm = '';

    // Hàm hiển thị packs
    const renderPacks = (packsToShow) => {
        packsGrid.innerHTML = ''; // Xóa grid hiện tại
        packCountSpan.textContent = packsToShow.length;

        if (packsToShow.length === 0) {
            packsGrid.innerHTML = '<p class="no-results">Không tìm thấy packs nào phù hợp.</p>';
            return;
        }

        packsToShow.forEach(pack => {
            const card = document.createElement('div');
            card.className = 'pack-card';
            card.innerHTML = `
                <div class="pack-poster-container">
                    <img class="pack-poster" src="${pack.poster}" alt="${pack.title} Poster">
                </div>
                <div class="pack-info">
                    <h4 class="pack-title">${pack.title}</h4>
                    <p class="pack-meta">${pack.meta}</p>
                </div>
            `;
            // Thêm sự kiện click để mở modal
            card.addEventListener('click', () => openModal(pack));
            packsGrid.appendChild(card);
        });
    };

    // Hàm lọc dữ liệu
    const filterAndRender = () => {
        let filteredPacks = packsData.filter(pack => {
            // Lọc theo người tạo
            if (currentCreator !== 'all' && pack.creator !== currentCreator) return false;
            // Lọc theo loại
            if (currentType !== 'all' && pack.type !== currentType) return false;
            // Lọc theo tìm kiếm
            if (currentSearchTerm) {
                const term = currentSearchTerm.toLowerCase();
                return pack.title.toLowerCase().includes(term) || pack.tagline.toLowerCase().includes(term);
            }
            return true;
        });

        // Xử lý Sắp xếp
        if (currentSort === 'az') {
            filteredPacks.sort((a, b) => a.title.localeCompare(b.title));
        } else { // 'latest' (Mặc định) - Tạm dùng theo ID, bạn cần thêm trường date thực tế sau này
            filteredPacks.sort((a, b) => b.id - a.id);
        }

        renderPacks(filteredPacks);
    };

    // --- XỬ LÝ SỰ KIỆN LỘC ---

    // Xử lý tìm kiếm
    searchBar.addEventListener('input', (e) => {
        currentSearchTerm = e.target.value;
        filterAndRender();
    });

    // Xử lý các nút bộ lọc
    filterButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            // Xác định nhóm bộ lọc của nút được click
            const groupButtons = btn.parentElement.querySelectorAll('.filter-btn');
            groupButtons.forEach(b => b.classList.remove('active')); // Xóa active khỏi nhóm
            btn.classList.add('active'); // Thêm active cho nút được nhấn

            // Cập nhật biến trạng thái dựa trên bộ lọc được nhấn
            if (btn.hasAttribute('data-sort')) {
                currentSort = btn.getAttribute('data-sort');
            } else if (btn.hasAttribute('data-creator')) {
                currentCreator = btn.getAttribute('data-creator');
            } else if (btn.hasAttribute('data-type')) {
                currentType = btn.getAttribute('data-type');
            }

            filterAndRender();
        });
    });

    // --- MỞ/ĐÓNG MODAL POPUP ---
    const modal = document.getElementById('movie-modal');
    const closeModalBtn = document.querySelector('.close-modal');

    const openModal = (pack) => {
        document.getElementById('modal-title').textContent = pack.title;
        document.getElementById('modal-poster').src = pack.poster;
        document.getElementById('modal-tagline').textContent = pack.tagline;
        document.getElementById('modal-description').textContent = pack.description;
        document.getElementById('modal-type').textContent = pack.type.toUpperCase();
        document.getElementById('modal-release').textContent = pack.release;
        document.getElementById('modal-status').textContent = pack.status;
        document.getElementById('modal-runtime').textContent = pack.runtime;
        document.getElementById('modal-genres').textContent = pack.genres;
        
        modal.style.display = 'flex';
        document.body.style.overflow = 'hidden'; // Ngăn cuộn trang nền
    };

    const closeModal = () => {
        modal.style.display = 'none';
        document.body.style.overflow = ''; // Cho phép cuộn lại
    };

    closeModalBtn.addEventListener('click', closeModal);
    window.addEventListener('click', (e) => {
        if (e.target == modal) closeModal(); // Đóng khi click ra ngoài vùng nội dung
    });

    // --- LẦN HIỂN THỊ ĐẦU TIÊN ---
    filterAndRender(); 
});