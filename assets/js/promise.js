"use strict";

// cb виконається через 1000мс
// setInterval(cb, 1000);

// cb виконається, коли буде подія click
// button.addEventListener('click', cb)

// Колбек, вказаний в then виконається тоді,
// коли проміс state стане fullfilled
// Колбек, вказаний в catch виконається тоді,
// коли проміс state стане rejected

fetch("http://randomuser.me/api")
  .then((response) => response.json())
  // Promise.resolve([{ fn: "Test" }, { fn: "Ivo" }])
  // Promise.reject(new Error("toy error "))
  .then((data) => console.log("data :>> ", data))
  .catch((error) => console.log(error))
  .finally(() => console.log("спільна дія"));

// Promise.resolve([{ fn: "Test" }, { fn: "Ivo" }]);
// Promise.reject(new Error("toy error "));

// Ствонення промісу
// resolve() => fullfilled
// reject()  => rejected
function executor(resolve, reject) {
  //   resolve([{ fn: "Test" }, { fn: "Ivo" }]);
  reject(new Error("error from executor"));
}

const myPromise = new Promise(executor);

// console.log(myPromise);

myPromise
  .then((data) => console.log(data))
  .catch((error) => console.log(error));

// Task: промісифікувати setTimeout
// setTimeout(cb,1000)
// delay(1000).then(cb)

function delay(msAmount) {
  function executor(resolve, reject) {
    if (typeof msAmount !== "number") {
      return reject(new TypeError("delaj ms must be number"));
    }
    if (msAmount < 0 || !Number.isInteger(msAmount)) {
      return reject(new RangeError("delay ms must be integer >= 0"));
    }

    setTimeout(resolve, msAmount);
  }

  return new Promise(executor);
}

delay(0)
  .then(() => console.log("Hello"))
  .catch((e) => console.log(e));

console.log("after all");

// Ex. промісифікація завантаження зображень
const src =
  "https://i.natgeofe.com/n/548467d8-c5f1-4551-9f58-6817a8d2c45e/NationalGeographic_2572187_square.jpg";

loadImage(src)
  .then((img) => {
    document.body.append(img);
  })
  .catch((e) => console.log("e :>> ", e));

function loadImage(src) {
  return new Promise((res, rej) => {
    const img = document.createElement("img");
    img.src = src;
    img.onload = () => {
      res(img);
    };
    img.onerror = () => {
      rej(new Error("image was not loaded"));
    };
  });
}
