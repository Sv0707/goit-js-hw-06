function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

// Напиши скрипт, который изменяет цвета фона элемента <body> через инлайн стиль 
// при клике на button.change-color и выводит значение цвета в span.color.

const refs = {
button: document.querySelector(".change-color"),
body: document.querySelector("body"),
span: document.querySelector(".color"),
};


refs.button.addEventListener('click', e => {
refs.body.style.backgroundColor = getRandomHexColor();
refs.span.textContent = getRandomHexColor();
}
);