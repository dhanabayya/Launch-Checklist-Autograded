// Write your JavaScript code here!
window.addEventListener("load", function () {
  let listedPlanets;
  // Set listedPlanetsResponse equal to the value returned by calling myFetch()
  let listedPlanetsResponse = myFetch();
  listedPlanetsResponse
    .then(function (result) {
      listedPlanets = result;
      //console.log(listedPlanets);
    })
    .then(function () {
      //console.log(listedPlanets);
      let listedPlanet = pickPlanet(listedPlanets);
      console.log(listedPlanet);
      addDestinationInfo(
        document,
        listedPlanet.name,
        listedPlanet.diameter,
        listedPlanet.star,
        listedPlanet.distance,
        listedPlanet.moons,
        listedPlanet.image
      );
      // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.
    });
  let formSubmit = document.getElementById("formSubmit");
  let faultyItems = document.getElementById("faultyItems");
  let pilotName = document.querySelector("input[name=pilotName]");
  let copilotName = document.querySelector("input[name=copilotName]");
  let fuelLevel = document.querySelector("input[name=fuelLevel]");
  let cargoMass = document.querySelector("input[name=cargoMass]");

  formSubmit.addEventListener("click", function (event) {
    formSubmission(
      document,
      faultyItems,
      pilotName.value,
      copilotName.value,
      fuelLevel.value,
      cargoMass.value
    );

    event.preventDefault();
  });
});
