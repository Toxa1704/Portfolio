const mainPageText = document.querySelector(".main-page-text");
const label = document.querySelector(".menu-btn");
const links = document.querySelector(".page-links");
console.log(label, mainPageText, links);

label.addEventListener("click", () => {
  if (mainPageText.style.display === "none" && links.style.display === "none") {
    mainPageText.style.display = "block";
    links.style.display = "flex";
  } else {
    mainPageText.style.display = "none";
    links.style.display = "none";
  }
});
