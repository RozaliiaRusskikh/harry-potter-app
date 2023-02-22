const houses = ["Hufflepuff", "Gryffindor", "Ravenclaw", "Slytherin"];
const formEl = document.getElementById("wizard-form");
const resultsSection = document.querySelector(".results-section");

formEl.addEventListener("submit", (event) => {
  event.preventDefault();
  // select a house randomly
  let selectedHouse = houses[Math.floor(Math.random() * houses.length)];

  //pull name
  const name = event.target.name.value;

  //display a result message
  addResultMessage(name, selectedHouse);

  //display cards
  axios
    .get("https://api.potterdb.com/v1/characters")
    .then((response) => {
      const characters = response.data.data;

      for (let i = 0; i < characters.length / 3; i++) {
        if (
          characters[i].attributes.house !== null &&
          characters[i].attributes.name !== null &&
          characters[i].attributes.image !== null
        ) {
          //display card
          displayCard(
            characters[i].attributes.name,
            characters[i].attributes.image
          );
        }
      }
    })
    .catch((error) => {
      console.log(error);
    });
});

function addResultMessage(name, selectedHouse) {
  const message = document.createElement("h2");
  message.classList.add("message");
  message.innerText = "Congratulations " + name + "! You are " + selectedHouse;
  resultsSection.appendChild(message);

  const messageFamily = document.createElement("h2");
  messageFamily.classList.add("message-family");
  messageFamily.innerText = "Here are other cool people from " + selectedHouse;
  resultsSection.appendChild(messageFamily);
}

function displayCard(titleCard, imageUrl) {
  const card = document.createElement("article");
  card.classList.add("card");

  const title = document.createElement("h3");
  title.innerText = titleCard;
  card.appendChild(title);

  const image = document.createElement("img");
  image.setAttribute("src", imageUrl);
  card.appendChild(image);

  resultsSection.appendChild(card);
}