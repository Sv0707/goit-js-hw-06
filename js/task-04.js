
let counterValue = 0;

const button = document.querySelector("#counter");

button.addEventListener("click", e => {
    if (e.target.dataset.action === "decrement") {
        counterValue -= 1;
        }
    if (e.target.dataset.action === "increment") {
        counterValue += 1;
    }
    document.querySelector("#value").textContent = counterValue;
});


