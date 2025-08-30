const mainDisplay = document.getElementById("ratingComponent");
const thanksDisplay = document.getElementById("thankyouComponent");
const submitBtn = document.getElementById("submitBtn");
const buttons = document.querySelectorAll("#points");
const rating = document.getElementById("rating");
const errorMessage = document.getElementById("errorMessage");

let selectedRating = 0;
const resetBtns = () => {
  buttons.forEach((btn) => {
    btn.classList.remove("bg-white", "text-[#141519]");
    btn.classList.add("bg-[#272e38]", "hover:bg-[#ff7511]");
  });
};

buttons.forEach((btn) => {
  btn.addEventListener("click", () => {
    resetBtns();
    btn.classList.remove("bg-[#272e38]", "hover:bg-[#ff7511]");
    btn.classList.add("bg-white", "text-[#141519]");
    selectedRating = btn.innerText;
    errorMessage.classList.add("hidden");
  });
});

submitBtn.addEventListener("click", () => {
  if (selectedRating === 0) {
    errorMessage.classList.remove("hidden"); // show it right away
    setTimeout(() => {
      errorMessage.classList.add("hidden"); // hide after 1s
    }, 1000);
    return;
  }
  mainDisplay.classList.toggle("hidden");
  thanksDisplay.classList.toggle("hidden");
  rating.textContent = `${selectedRating}`;
});
