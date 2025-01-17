/* Step 1: using axios, send a GET request to the following URL 
           (replacing the palceholder with your Github name):
           https://api.github.com/users/<your name>
*/
axios.get('https://api.github.com/users/Gabe0214')
.then(response => {
  console.log(response); 
})

/* Step 2: Inspect and study the data coming back, this is YOUR 
   github info! You will need to understand the structure of this 
   data in order to use it to build your component function 

   Skip to Step 3.
*/

/* Step 4: Pass the data received from Github into your function, 
           create a new component and add it to the DOM as a child of .cards
*/

/* Step 5: Now that you have your own card getting added to the DOM, either 
          follow this link in your browser https://api.github.com/users/<Your github name>/followers 
          , manually find some other users' github handles, or use the list found 
          at the bottom of the page. Get at least 5 different Github usernames and add them as
          Individual strings to the friendsArray below.
          
          Using that array, iterate over it, requesting data for each user, creating a new card for each
          user, and adding that card to the DOM.
*/

  const followersArray = ['ddelfaus', 'SteveMM-III', 'mranthonysutton', 'Sara-DLC', 'primelos'];
  
  followersArray.forEach(person => {
    axios.get(`https://api.github.com/users/${person}` )
    .then( (response => {
      const person = response
      cardContainer.appendChild(gitCard(person));
    }))
   .catch(error => {
     console.log('There is an error in the data', error);
   })
   })



/* Step 3: Create a function that accepts a single object as its only argument,
          Using DOM methods and properties, create a component that will return the following DOM element:

  


<div class="card">
  <img src={image url of user} />
  <div class="card-info">
    <h3 class="name">{users name}</h3>
    <p class="username">{users user name}</p>
    <p>Location: {users location}</p>
    <p>Profile:  
      <a href={address to users github page}>{address to users github page}</a>
    </p>
    <p>Followers: {users followers count}</p>
    <p>Following: {users following count}</p>
    <p>Bio: {users bio}</p>
  </div>
</div>

*/

/* List of LS Instructors Github username's: 
  tetondan
  dustinmyers
  justsml
  luishrd
  bigknell
*/


function gitCard(object){
  // elements created 

  const card = document.createElement('div');
  const image = document.createElement('img');
  const cardInfo = document.createElement('div');
  const cardHeader = document.createElement('h3');
  const userName = document.createElement('p');
  const location = document.createElement('p');
  const profile = document.createElement('p');
  const anchor = document.createElement('a');
  const followers = document.createElement('p');
  const following = document.createElement('p');
  const bio = document.createElement('p');


  // classe assign

  card.classList.add('card');
  cardInfo.classList.add('card-info');
  cardHeader.classList.add('name');
  userName.classList.add('username');


  // textContent
  
  image.setAttribute('src', object.data["avatar_url"]);
  cardHeader.textContent = object.data.name;
  userName.textContent = object.data.login;
  location.textContent = ` Location: ${object.data.location}`;
  profile.textContent = 'Profile: '
  anchor.setAttribute('href',object.data["html_url"]);
  anchor.textContent = ' CLICK HERE!! ';
  followers.textContent =  ` Followers: ${object.data.followers}`;
  following.textContent = `Following: ${object.data.following}`; 
  bio.textContent = ` Bio: ${object.data.bio}`; 


 //style :
anchor.style.textDecoration ='none';
anchor.style.color = '#333'; 


  // append 

  card.appendChild(image);
  card.appendChild(cardInfo);
  cardInfo.appendChild(cardHeader)
  cardInfo.appendChild(userName)
  cardInfo.appendChild(location)
  cardInfo.appendChild(profile);
  profile.appendChild(anchor);
  cardInfo.appendChild(followers);
  cardInfo.appendChild(following);
  cardInfo.appendChild(bio);

  return card;
}

const cardContainer = document.querySelector('.cards');

axios.get('https://api.github.com/users/Gabe0214')
.then(response => {
  cardContainer.appendChild(gitCard(response));
})
.catch(error => {
  cosnsole.log('The data was not returned', error);
})


