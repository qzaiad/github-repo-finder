/**
   [x] Markdown format
   [x] create function => performSearch(searchTerm, isUserSelected)
   [x] call performSearch() inside Button eventListener
   [x] - performSearch():
   [x] -- fetch data from url
   [x] -- OK => show data in page
   [x] -- NOK => show error message 
 */

const USERS_API = "https://api.github.com/search/users?q=";
// const USERS_API = "https://api.github.com/search/users?q=apple+type:org";
// const USERS_API = "https://api.github.com/search/users?q=qzaiad+type:user";

const cardsElement = document.querySelector(".cards");

const setSearchResult = (items) => {
  console.log('setSearchResult: ', items);
  let result = '';
  items.map( (item) => {
  result += `
<article class="card">
  <img class="img" loading="lazy" src="${item.avatar_url}"/>
  <h2 class="name">${item.login}</h2>
</article>
`;
  })
  cardsElement.innerHTML = result;
}

const performSearch = (searchTerm, isUserSelected) => {
  const typeQuery = isUserSelected ? '+type:user' : '+type:org';

  fetch(`${USERS_API}${searchTerm}${typeQuery}`)
  .then((response) => {
    if(response.ok){
      return response.json(); // returns a promise
    }
    throw new Error('Network response was not ok');
  })  // 
  .then((data) => setSearchResult(data.items))  // data is an object -> data.items is an array
  .catch(error => console.log(error))

  // fetch(`${USERS_API}${searchTerm}${typeQuery}`)
  // .then((result) => result.json())  // 
  // .then((response) => setSearchResult(response.items))
}

const buttonElement = document.querySelector('.button');
const searchInput = document.querySelector('.input');
const userInputElemet = document.querySelector('input[value="users"]');

buttonElement?.addEventListener('click', (e) => {
  e.preventDefault(); // prevent reloading page
  console.log(searchInput.value, userInputElemet.checked);
  performSearch(searchInput.value, userInputElemet.checked);
});
