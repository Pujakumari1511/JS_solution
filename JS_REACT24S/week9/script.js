
const cardContainer = document.querySelector("#card-container");  

function createCard(user){
      const card = document.createElement("div");
      card.classList.add("card");
      const image = document.createElement("img");
      image.src = `https://robohash.org/${user.id}?set=set4`;
      card.appendChild(image);
      const cardText = document.createElement("div");
      cardText.innerHTML = `<p>Name: ${user.name}</p>
                  <p>Email: ${user.email}</p>
                  <p>UserName: ${user.username}</p>`;
      card.appendChild(cardText);
      cardContainer.appendChild(card);    
} 

async function fetchPerson() {
      const response = await fetch('https://jsonplaceholder.typicode.com/users');
      const data = await response.json()
      data.forEach(user => createCard(user))
}
fetchPerson();





 




 
