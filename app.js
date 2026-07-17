const buttons = document.querySelectorAll("[data-item]");

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    window.alert(`已將「${button.dataset.item}」加入購物車！`);
  });
});
