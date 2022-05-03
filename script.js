const buttons = document.querySelectorAll("button")
const screen = document.querySelector(".current")
const submit = document.querySelector(".submit")
let answer = document.querySelector(".answer")
let realTimeValue = [];

buttons.forEach((button) => {
    button.addEventListener("click", () => {
        realTimeValue.push(button.value)
        screen.innerHTML = realTimeValue.join("")


        if (button.classList.contains("submit-btn")) {
            screen.style.display = "none";
            answer.style.display = "block";
            answer.innerHTML = eval(realTimeValue.join(""));
        }


        // Reset to 0
        if (button.classList.contains("reset-btn")) {
            realTimeValue = [""]
            answer.style.display = "none"
            screen.style.display = "block"
            screen.innerHTML = 0

        }
    })
})

