function displayPoem(response) {
  console.log("poem generated");
  new Typewriter("#poem", {
    strings: response.data.answer,
    autoStart: true,
    delay: 1,
    cursor: "🏵",
  });
}

function generatePoem(event) {
  event.preventDefault();

  let instructionInput = document.querySelector("#user-instructions");
  let apiKey = "097df1873e259e4a0bt116o07b264c78";
  let prompt = `User instructions Generate a poem about ${instructionInput.value}`;
  let context =
    "You are a very creative poem expert that loves to write short and clear poems, please seperate each line with a <br/>. You must be able to generate a 4 line poem in basic HTML. Make sure to follow user instructions. Sign the poem with 'SheCodes AI' inside a <strong> element at the end of the poem.";
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  console.log("Generating poem");
  console.log(`Prompt: ${prompt}`);
  console.log(`Context: ${context}`);

  axios.get(apiUrl).then(displayPoem);
}

let createPoemElement = document.querySelector("#create-poem");
createPoemElement.addEventListener("submit", generatePoem);
