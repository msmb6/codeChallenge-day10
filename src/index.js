const clockTitle = document.querySelector(".js-clock");

function timeOut() {
  const toDay = new Date();
  const endDay = new Date("2021-12-25, 00:00:00");
  const dDay = (endDay - toDay) / 1000;
  const day = Math.floor(dDay / 86400);
  const hour = String(Math.floor(dDay / 3600 - 24 * day)).padStart(2, "0");
  const min = String(Math.floor(dDay / 60 - 60 * hour - 1440 * day)).padStart(
    2,
    "0"
  );
  const sec = String(
    Math.floor(dDay - 3600 * hour - 86400 * day - 60 * min)
  ).padStart(2, "0");
  clockTitle.innerText = `${day}d  ${hour}h ${min}m ${sec}s`;
}

timeOut();
setInterval(timeOut, 1000);
