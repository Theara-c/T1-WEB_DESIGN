const COLORS = ["red", "blue", "green", "yellow", "orange", "purple", "pink", "black", "white", "gray"];

//
// Get a random color among the list of available colors
//
function randomColor() {
  const randomIndex = Math.floor(Math.random() * COLORS.length);
  return COLORS[randomIndex];
}

//
// Create a new card
//
function createCard() {
  // 1 - Random color for card
  const color = randomColor();

  // 2 - Set card text
  const cardText = document.createElement('p');
  cardText.textContent = `Color: ${color}`;

  // 3 - Set card footer
  const footerButton = document.createElement('button');
  footerButton.textContent = 'Remove';
  const cardFooter = document.createElement('div');
  cardFooter.className = 'card-footer';
  cardFooter.appendChild(footerButton);

  // 4 - Manage footer button
  footerButton.addEventListener('click', () => {
    card.remove();
  });

  // Create the card element
  const card = document.createElement('div');
  card.className = 'card';
  card.style.backgroundColor = color;
  card.appendChild(cardText);
  card.appendChild(cardFooter);

  // 5 - Add card to containers
  const container = document.querySelector('.container');
  container.appendChild(card);
}


//--------------------------------------------------
// Code Start
//--------------------------------------------------

const btnCreate = document.querySelector('#create');
btnCreate.addEventListener('click', createCard);