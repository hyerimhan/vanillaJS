const dateEl = document.querySelector("#date");
const timeEl = document.querySelector("#time");

function timer() {
  const date = new Date();

  if (localStorage.getItem("auth")) {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");

    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");
    const weekday = date.toLocaleDateString("ko-KR", { weekday: "short" });

    dateEl.innerText = `${year}/${month}/${day} (${weekday})`;
    timeEl.innerText = `${hours} : ${minutes}`;
  }
}

setInterval(timer, 1000);
