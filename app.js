let addToCartButton = document.querySelectorAll(".btn-add-to-cart");
let cartCounterDiv = document.querySelector(".backet-count");
let cartCounter = document.querySelector("#cart-counter");

for (let i = 0; i < addToCartButton.length; i++) {
  addToCartButton[i].addEventListener("click", function () {
    cartCounterDiv.style.display = "block";
    let counter = String(Number(cartCounter.textContent) + 1);
    cartCounter.textContent = counter;
  });
}
