// alert("hello");
function generatePoem(event) {
  event.preventDefault();

  new Typewriter("#poem", {
    strings: "poem answer",
    autoStart: true,
    delay: 1,
    cursor: "🏵",
  });
}

let createPoemElement = document.querySelector("#create-poem");
createPoemElement.addEventListener("submit", generatePoem);
