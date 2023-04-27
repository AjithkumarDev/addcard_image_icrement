let count = 0;

function handleIncrement() {
  count++;
  updateCount();
}

function handleDecrement() {
  console.log("Decrement");
  if (count > 0) {
    count--;

    updateCount(count);
  }
}

function handleAddCard(count) {
  if (count > 0) {
    alert(`Added ${count} item(s) to the card`);
  }
}

function updateCount() {
  const countElement = document.querySelector("#count");
  countElement.value = count;
  const isCountZero = count === 0;
  const addCardButton = document.querySelector(".btn-Addcard");
  addCardButton.disabled = isCountZero;
}

document.addEventListener("DOMContentLoaded", function () {
  updateCount();

  const incrementButton = document.querySelector(".btn-orange:first-of-type");
  incrementButton.addEventListener("click", handleIncrement);

  const decrementButton = document.querySelector(".btn-orange:last-of-type");
  decrementButton.addEventListener("click", handleDecrement);

  const addCardButton = document.querySelector(".btn-Addcard");
  addCardButton.addEventListener("click", function () {
    handleAddCard(count);
  });
});
