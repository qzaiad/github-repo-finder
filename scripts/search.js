import setCards from './cards';
import { cardsElement } from './elements';
import { getErrorMessage, setErrorMessage } from './messages';
import setLoadingState from './loader';

export const performSearch = async (users_spi, searchTerm, isUserSelected) => {
  // avoid updating state when the value wouldn't change. -> expensive
  const errorMessage = getErrorMessage();
  if(!searchTerm.trim()){ // remove spaces
    !errorMessage && setErrorMessage('Please fill out search field');
    return;
  }

  errorMessage && setErrorMessage('');

  setCards(cardsElement, null);
  setLoadingState(true);

  const typeQuery = isUserSelected ? '+type:user' : '+type:org';

  try
  {
    const response = await fetch(`${users_spi}${searchTerm}${typeQuery}`);
    if(!response.ok){
      throw new Error('Network response was not ok');
    }
    const data = await response.json();
    setCards(cardsElement, data.items);
  }
  catch(error)
  {
    console.log(error);
  }
  finally
  {
    setLoadingState(false);
  }

  // fetch(`${users_spi}${searchTerm}${typeQuery}`)
  // .then((response) => {
  //   if(response.ok){
  //     return response.json(); // returns a promise
  //   }
  //   throw new Error('Network response was not ok');
  // })  // 
  // .then((data) => setCards(cardsElement, data.items))  // data is an object -> data.items is an array
  // .catch(error => console.log(error))
  // .finally(() => setLoadingState(false))
}

export default performSearch;