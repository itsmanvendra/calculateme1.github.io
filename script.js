let string = "";
let buttons = document.querySelectorAll(".button-light");
Array.from(buttons).forEach((button) => {
  button.addEventListener("click", (e) => {
    if (!(e.target.innerHTML === "C")) {
      console.log("I was called");
      if (e.target.innerHTML === "=") {
        string = eval(string);
        document.querySelector("input").value = string;
      } else if (e.target.innerHTML === "AC") {
        string = "";
        document.querySelector("input").value = string;
      } else {
        string = string + e.target.innerHTML;
        document.querySelector("input").value = string;
      }
    }
  });
});
const handleClear = () => {
  const presentValue = document.querySelector("input").value;
  // console.log(presentValue.slice(0,presentValue.length-1))
  document.querySelector("input").value = presentValue.slice(
    0,
    presentValue.length - 1
  );
};
const toggleTheme = () => {
  const icon = document.getElementById("icon");
  const buttons = document.querySelectorAll(".button");
  const bg = document.querySelector(".background");
  // console.log(bg)
  if (icon.classList.contains("fa-moon")) {
    icon.classList.remove("fa-moon");
    icon.classList.add("fa-sun");

    bg.classList.remove("bg-light");
    bg.classList.add("bg-dark");
    buttons.forEach((button) => {
      button.classList.remove("light");
      button.classList.add("dark");
    });
  } else {
    icon.classList.remove("fa-sun");
    icon.classList.add("fa-moon");
    bg.classList.remove("bg-dark");
    bg.classList.add("bg-light");
    buttons.forEach((button) => {
      button.classList.remove("dark");
      button.classList.add("light");
    });
  }
};
