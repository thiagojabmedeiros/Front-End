const warnning = document.querySelector(".warnning")
const input = document.querySelector("input")
const form = document.querySelector("form")
console.log(warnning)
console.log(input)

form.addEventListener("submit", (e) => {
  if (!input.checkValidity()) {
    e.preventDefault();
    warnning.style.display = "initial";
  }
});