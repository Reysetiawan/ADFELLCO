// Toggle class active untuk hamburger menu
const navbarNav = document.querySelector(".navbar-nav");
// ketika hamburger menu di klik
document.querySelector("#hamburger-menu").onclick = () => {
  navbarNav.classList.toggle("active");
};

// Toggle class active untuk search form
const searchForm = document.querySelector(".search-form");
const searchBox = document.querySelector("#search-box");



// Toggle class active untuk shopping cart


// Klik di luar elemen
const hm = document.querySelector("#hamburger-menu");
const sb = document.querySelector("#search-button");
const sc = document.querySelector("#shopping-cart-button");

document.addEventListener("click", function (e) {
  if (!hm.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
});

// Modal Box
const itemDetailModal = document.querySelector("#item-detail-modal");
const itemDetailButtons = document.querySelector(".item-detail-button");

itemDetailButtons.onclick = (e) => {
  itemDetailModal.style.display = "flex";
  e.preventDefault();
};

const itemDetailModal2 = document.querySelector("#item-detail-modal-2");
const itemDetailButtons2 = document.querySelector(".item-detail-button-2");

itemDetailButtons2.onclick = (e) => {
  itemDetailModal2.style.display = "flex";
  e.preventDefault();
};

const itemDetailModal3 = document.querySelector("#item-detail-modal-3");
const itemDetailButtons3 = document.querySelector(".item-detail-button-3");

itemDetailButtons3.onclick = (e) => {
  itemDetailModal3.style.display = "flex";
  e.preventDefault();
};

// klik tombol close modal
document.querySelector(".modal .close-icon-1").onclick = (e) => {
  itemDetailModal.style.display = "none";
  e.preventDefault();
};

document.querySelector(".modal .close-icon-2").onclick = (e) => {
  itemDetailModal2.style.display = "none";
  e.preventDefault();
};

document.querySelector(".modal .close-icon-3").onclick = (e) => {
  itemDetailModal3.style.display = "none";
  e.preventDefault();
};

// klik di luar modal
window.onclick = (e) => {
  if (e.target === itemDetailModal) {
    itemDetailModal.style.display = "none";
  }
};

  // order Now Button Start

   // Menambahkan event listener ke button
   document.querySelector('.btn1').addEventListener('click', function() {
    // Ganti nomor telepon dengan nomor yang diinginkan
    const phoneNumber = '6289694320205'; // Nomor WhatsApp Anda
    const message = 'Halo, saya ingin bertanya tentang...'; // Pesan default
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    
    // Mengarahkan pengguna ke link WhatsApp
    window.open(whatsappUrl, '_blank');
});

// order now button end