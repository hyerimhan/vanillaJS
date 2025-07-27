const loginForm = document.querySelector("#loginForm");
const id = document.querySelector("#id");
const pw = document.querySelector("#pw");

function loginLoad() {
  if (localStorage.getItem("auth")) {
    loginForm.innerHTML = "";
  }
}

function handleSubmit(e) {
  e.preventDefault();

  localStorage.setItem("auth", JSON.stringify({ id: id.value, pw: pw.value }));

  if (localStorage.getItem("auth")) {
    alert("Welcome!");
    loginForm.innerHTML = "";
  }
}

loginForm.addEventListener("submit", handleSubmit);
document.addEventListener("DOMContentLoaded", loginLoad);
