// Toggle class active untuk hamburger menu
const navbarNav = document.querySelector(".navbar-nav");
// ketika hamburger menu di klik
document.querySelector("#hamburger-menu").onclick = () => {
  navbarNav.classList.toggle("active");
};

// Toggle class active untuk search form
const searchForm = document.querySelector(".search-form");
const searchBox = document.querySelector("#search-box");

document.querySelector("#search-button").onclick = (e) => {
  searchForm.classList.toggle("active");
  searchBox.focus();
  e.preventDefault();
};

// Toggle class active untuk shopping cart
const shoppingCart = document.querySelector(".shopping-cart");
document.querySelector("#shopping-cart-button").onclick = (e) => {
  shoppingCart.classList.toggle("active");
  e.preventDefault();
};

// Klik di luar elemen
const hm = document.querySelector("#hamburger-menu");
const sb = document.querySelector("#search-button");
const sc = document.querySelector("#shopping-cart-button");

document.addEventListener("click", function (e) {
  if (!hm.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }

  if (!sb.contains(e.target) && !searchForm.contains(e.target)) {
    searchForm.classList.remove("active");
  }

  if (!sc.contains(e.target) && !shoppingCart.contains(e.target)) {
    shoppingCart.classList.remove("active");
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
