"use strict";
const buttons = document.querySelectorAll(".state-card .rate-buttons > button");
const submitButton = document.getElementById("submit");
const rateStateElement = document.getElementById("rate-state");
const thankyouStateElement = document.getElementById("thankyou-state");
const rateValueElement = document.getElementById("rate-value");
let rate;
const setRate = (rate) => {
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
