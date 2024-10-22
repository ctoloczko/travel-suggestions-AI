function displayTrip(response) {
  console.log("Searching for trip");

  new Typewriter("#destination", {
    strings: response.data.answer,
    autoStart: true,
    delay: 20,
    cursor: "",
    pauseFor: 1500000,
  });
}
function findMyTrip(event) {
  event.preventDefault();

  let userInput = document.querySelector("#user-input").value;
  let apiKey = "8eatdeae3d0b8e63a64512c0d2f3a54o";
  let context =
    "You are an experienced AI travel assistant who has traveled all around the world and spend lots of time exploring. You need to suggest a travel destination for the next trip considering user preferences provided in user's instructions. It can be city, national park, hiking trail, beach, etc. Please be polite but not too serious and provide only one option. Include a short description of maximal 3 lines. Please provide unique ideas that are not obvious. Please do not repeat when the user ask the same question again. Please sign the the description at the bottom separated with <br/> <br/> elements and inside <strong> element with Your DreamGallivant powered by SheCodes AI 💜";
  let prompt = `User' instructions: ${userInput}`;
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  let tripDescription = document.querySelector("#destination");
  tripDescription.classList.add("trip-description");
  tripDescription.innerHTML = `<div class="blink">
    Please bear with us while we work our magic!<div/>`;

  axios.get(apiUrl).then(displayTrip);
}
let travelFormElement = document.querySelector("#travel-form");
travelFormElement.addEventListener("submit", findMyTrip);
