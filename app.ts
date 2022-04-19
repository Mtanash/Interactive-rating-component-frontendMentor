const buttons = document.querySelectorAll<HTMLElement>(
  ".state-card .rate-buttons > button"
);
const submitButton = document.getElementById("submit") as HTMLButtonElement;
const rateStateElement = document.getElementById(
  "rate-state"
) as HTMLDivElement;
const thankyouStateElement = document.getElementById(
  "thankyou-state"
) as HTMLDivElement;
const rateValueElement = document.getElementById(
  "rate-value"
) as HTMLSpanElement;

let rate: number;
const setRate = (rate: number) => {
  rateValueElement.textContent = rate.toString();
};

buttons.forEach((button, index) => {
  button.addEventListener("click", () => {
    button.classList.toggle("selected");
    rate = index + 1;
    buttons.forEach((B) => {
      if (B !== button) {
        B.classList.remove("selected");
      }
    });
  });
});

submitButton.addEventListener("click", () => {
  setRate(rate);

  rateStateElement.classList.add("hidden");

  thankyouStateElement.classList.remove("hidden");
});
