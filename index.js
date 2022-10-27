let parentContainer = document.querySelector(".container");
let circles = document.querySelectorAll(".circle");
let specCircle = document.querySelector("#special-circle");

// console.log(parentContainer);
// console.log(circles);
// console.log(specCircle);

parentContainer.addEventListener("click", (e) => {
  for (let i = 0; i < circles.length; i++) {
    if (e.target === circles[i]) {
      e.target.remove();
    }
  }
  console.log("event1");
  
});

// circles.addEventListener("click", (e)=>{
//     console.log(e.target);
//     console.log(e.currentTarget);
// })

specCircle.addEventListener(
  "click",
  (e) => {
    console.log(e.target);
    specCircle.style.cssText = "background-color: green";
    e.stopPropagation();
  },true

);
