// Coddiwomple will work its magic and suggest a destination that perfectly
//         matches your criteria.

function findMyTrip(event) {
  event.preventDefault();
  let tripDescription = document.querySelector("#destination");
  tripDescription.classList.add("trip-description");

  new Typewriter("#destination", {
    strings: ["Dream destination close to Stockholm..."],
    autoStart: true,
    delay: 50,
    cursor: "",
    pauseFor: 1500000,
  });
}

let travelFormElement = document.querySelector("#travel-form");
travelFormElement.addEventListener("submit", findMyTrip);
