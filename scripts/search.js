import setCards from './cards';
import { cardsElement } from './elements';

export const performSearch = (users_spi, searchTerm, isUserSelected) => {
  const typeQuery = isUserSelected ? '+type:user' : '+type:org';

  fetch(`${users_spi}${searchTerm}${typeQuery}`)
  .then((response) => {
    if(response.ok){
      return response.json(); // returns a promise
    }
    throw new Error('Network response was not ok');
  })  // 
  .then((data) => setCards(cardsElement, data.items))  // data is an object -> data.items is an array
  .catch(error => console.log(error))

  // fetch(`${USERS_API}${searchTerm}${typeQuery}`)
  // .then((result) => result.json())  // 
  // .then((response) => setSearchResult(response.items))
}

export default performSearch;