// Напиши скрипт, который реагирует на изменение значения input#font-size-control 
// (событие input) и изменяет инлайн-стиль span#text обновляя свойство font-size. 
// В результате при перетаскивании ползунка будет меняться размер текста.

const inputFontSize = document.querySelector("#font-size-control");

inputFontSize.addEventListener("input", e => {
    const inputValue = e.currentTarget.value;
    document.querySelector("#text").style.fontSize = `${inputValue}px`;
    });