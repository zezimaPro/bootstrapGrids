document.querySelector(".right-side").addEventListener("mouseover", () => {
  document.querySelector(".right-side").classList.add("expand");
});
document.querySelector(".right-side").addEventListener("mouseout", () => {
  document.querySelector(".right-side").classList.remove("expand");
});
