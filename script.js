const houses = ["Hufflepuff", "Gryffindor", "Ravenclaw", "Slytherin"];

// axios
//   .get("https://api.potterdb.com/v1/characters")
//   .then((response) => {
//     const characters = response.data.data;

//     characters.forEach((element) => {
//       if (element.attributes.house !== null && element.attributes.name !== null)
//         //console.log(element.attributes.house);
//       console.log(element.attributes.name);
//     });
//   })
//   .catch((error) => {
//     console.log(error);
//   });

const formEl = document.getElementById("wizard-form");

formEl.addEventListener("submit", (event) => {
  event.preventDefault();
  // select a house randomly
  let selectedHouse = houses[Math.floor(Math.random() * houses.length)];

  //pull name
  const name = event.target.name.value;

  //display a result message

  addResultMessage(name, selectedHouse);
});

function addResultMessage(name, selectedHouse) {
  const resultsSection = document.querySelector(".results-section");
  const message = document.createElement("h2");
  message.innerText = "Congratulations " + name + "! You are " + selectedHouse;
  resultsSection.appendChild(message);
}
