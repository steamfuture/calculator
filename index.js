const form = document.querySelector("form");
const input = form.querySelectorAll("input");

console.log(input);
console.log(eval("77+9"));

function clickEvent(event) {
  let value = event.target.value;

  if (value === "=") {
    console.log(form.output.value);
    form.output.value = eval(form.output.value);
  }

  if (typeof value !== "undefined") {
    if (value !== "=") {
      form.output.value += value;
    }
  }

  if (value === "C") {
    form.output.value = "";
  }
}

function init() {
  form.addEventListener("click", clickEvent);
}

init();
