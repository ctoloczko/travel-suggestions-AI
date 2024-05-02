// Coddiwomple will work its magic and suggest a destination that perfectly
//         matches your criteria.

function displayTrip(response) {
  console.log("Searching for trip");

  new Typewriter("#destination", {
    strings: response.data.answer,
    autoStart: true,
    delay: 50,
    cursor: "",
    pauseFor: 1500000,
  });
}

function findMyTrip(event) {
  event.preventDefault();

  let userInput = document.querySelector("#user-input");
  let apiKey = "8eatdeae3d0b8e63a64512c0d2f3a54o";
  let context =
    "You are an experienced AI travel assistant who has traveled all around the world and visited all cities. You will suggest best places to visit in the city that the user provided in the instructions below. Please provide 4 attractions as list and 1 line description for each.";
  let prompt = `User is travelling to: ${userInput}`;
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  let tripDescription = document.querySelector("#destination");
  tripDescription.classList.add("trip-description");
  axios.get(apiUrl).then(displayTrip);
}

let travelFormElement = document.querySelector("#travel-form");
travelFormElement.addEventListener("submit", findMyTrip);
