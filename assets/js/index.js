"use strict";

// --- setTimeout
// Колбек виконається 1 раз за вказане число мілісекунд
const showAlert = () => {
  alert("Hello");
};

const timeoutId = setTimeout(showAlert, 2000);
// clearTimeout(timeoutId); // очистити (відмінити) таймер

// -- setInterval
// Колбек виконається багато разів через кожні вказане число мілісекунд

const printToConsole = () => {
  console.log("to console");
};

const intervalId = setInterval(printToConsole, 1000);
// clearInterval(intervalId); // очистити (відмінити) інтервал

// --- Ex.: Прибрати спец пропоцицію за 2с
const offerLink = document.querySelector(".specOffer");

const removeOffer = () => {
  offerLink.remove();
};

setTimeout(removeOffer, 2000);

// --- Task: За 3с показати сповіщення про cookies
//           *при натисканні на ok знову приховати

// генеруємо новий елемент
const bodyEl = document.querySelector("body");

const viewCookies = () => {
  const cookies = document.createElement("div");
  cookies.textContent = "Cookies";
  bodyEl.append(cookies);
};
setTimeout(viewCookies, 3000);

// або

// відображаємо прихований елемент
const cookiesDiv = document.querySelector("#cookieMessage");

const showCookies = () => {
  cookiesDiv.style.display = "block";
};

setTimeout(showCookies, 3000);

const agreeBtn = document.getElementById("agreeBtn");
agreeBtn.addEventListener("click", () => {
  cookiesDiv.style.display = "none";
});

// --- Ex.: Відобразити на сторінці відлік секунд
let timer = 0;
const timerEl = document.querySelector(".timer");

const updateTimet = () => {
  timer++; // збільшити змінну-таймер
  timerEl.textContent = timer; // змінити напис на сторінці
};

setInterval(updateTimet, 1000);
