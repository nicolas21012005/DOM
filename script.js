function sayHi() {
  let username = document.querySelector("#username").value;

  let password = document.querySelector("#password").value;

  if (username === "" || username.length < 8)
    return alert("el usuario no cumple con los parametros establecidos");

  console.log(username);

  console.log(password);
}
