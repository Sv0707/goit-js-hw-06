// Напиши скрипт, который при потере фокуса на инпуте (событие blur), 
// проверяет его содержимое 
// на правильное количество введённых символов.

const inputRef = document.querySelector("#validation-input");

inputRef.addEventListener("blur", e => {
if (e.currentTarget.value.length === parseInt(e.currentTarget.dataset.length)) {
    inputRef.classList.remove("invalid");
    inputRef.classList.add("valid");
}
else {
    inputRef.classList.remove("valid");
    inputRef.classList.add("invalid")
};
});