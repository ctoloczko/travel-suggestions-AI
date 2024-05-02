// Coddiwomple will work its magic and suggest a destination that perfectly
//         matches your criteria.

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
    "You are an experienced AI travel assistant who has traveled all around the world and spend lots of time exploring the world. You need to suggest the destinationn for the next trip considering user preferences provided in user's instructions. Please be polite and provide only one option and include a short candid description of maximal 3 lines. Please sign the recommendation at the bottom separated with <br/> element and inside <strong> element with Your Coddiwomple Team powered by SheCodes AI";
  let prompt = `User' instructions: ${userInput}`;
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  let tripDescription = document.querySelector("#destination");
  tripDescription.classList.add("trip-description");
  axios.get(apiUrl).then(displayTrip);
}

let travelFormElement = document.querySelector("#travel-form");
travelFormElement.addEventListener("submit", findMyTrip);
