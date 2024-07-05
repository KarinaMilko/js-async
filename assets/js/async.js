"use strict";

// alert("sdfsdf");

console.log("print to console"); // блокування - погано!

const a = [1, 2, 3, 4];

a.forEach((el) => console.log(el));

setTimeout(() => {
  // відповідальність WebAPI
  console.log("from timeout");
}, 0);

console.log("end of file");

function f1() {
  console.trace(); // => стан callstack
  console.log("Function F");
}

function f() {
  console.log("Function F");
  f1();
}

f();
f1();

// callback hell => рішення - проміси
setTimeout(() => {
  setTimeout(() => {
    setTimeout(() => {
      setTimeout(() => {
        console.log("from timeout");
      }, 0);
    }, 0);
  }, 0);
}, 0);
