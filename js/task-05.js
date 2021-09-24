

document.querySelector('#name-input').addEventListener('input', e => {
     let name = document.querySelector('#name-input').value;
     if (name === '') name = "Anonymous";
     document.querySelector("#name-output").textContent = name;
});





