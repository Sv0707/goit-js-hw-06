// Напиши скрипт управления формой логина.

// Обработка отправки формы form.login-form должна быть по событию submit.
// При отправке формы страница не должна перезагружаться.
// Если в форме есть незаполненные поля, выводи alert с предупреждением о том, что все поля должны быть заполнены.
// Если пользователь заполнил все поля и отправил форму, собери значения полей в обьект, где имя поля будет именем свойства, а значение поля - значением свойства. Для доступа к элементам формы используй свойство elements.
// Выведи обьект с введенными данными в консоль и очисти значения полей формы методом reset.

const loginFormRef = document.querySelector(".login-form");

loginFormRef.addEventListener("submit", e => {
  e.preventDefault();

  const inputEmail = e.currentTarget.elements.email.value;
  const inputPassword = e.currentTarget.elements.password.value;
  
  if (inputEmail === "" || inputPassword === "") {
    return alert("Все поля должны быть заполнены!");
}
  console.log({Email: inputEmail, Password: inputPassword});
  e.currentTarget.reset();
})
