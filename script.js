const menuButton = document.querySelector(".menu-toggle");
const navigation = document.querySelector(".site-nav");

if (menuButton && navigation) {
  menuButton.addEventListener("click", () => {
    const expanded = menuButton.getAttribute("aria-expanded") === "true";
    menuButton.setAttribute("aria-expanded", String(!expanded));
    menuButton.setAttribute("aria-label", expanded ? "Mở menu" : "Đóng menu");
    navigation.classList.toggle("is-open", !expanded);
  });

  navigation.addEventListener("click", (event) => {
    if (event.target.closest("a")) {
      menuButton.setAttribute("aria-expanded", "false");
      menuButton.setAttribute("aria-label", "Mở menu");
      navigation.classList.remove("is-open");
    }
  });
}

const currentLink = document.querySelector(`[data-nav="${document.body.dataset.page}"]`);
if (currentLink) currentLink.setAttribute("aria-current", "page");

document.querySelectorAll("[data-year]").forEach((element) => {
  element.textContent = new Date().getFullYear();
});

const form = document.querySelector(".contact-form");
if (form) {
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const status = form.querySelector(".form-status");
    status.textContent = "Biểu mẫu này chưa kết nối dịch vụ gửi thư, vì vậy nội dung chưa được gửi. Vui lòng dùng email chính thức của đội thi.";
    status.classList.add("is-visible");
  });
}
