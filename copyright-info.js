const footer = document.querySelector(".footer-note");
const currentYear = new Date().getFullYear();

if (footer) {
  footer.textContent = `Copyright © ${currentYear} Art & Blogging`;
}
