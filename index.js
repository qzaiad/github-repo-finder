/**
 * - create function => performSearch(searchInput, usersInputElement)
 * - call performSearch() inside Button eventListener
 * - performSearch():
 * -- fetch data from url
 * -- OK => show data in page
 * -- NOK => show error message 
 */

const performSearch = () => {
  console.log('XXX');
}

const buttonElement = document.querySelector('.button');

buttonElement?.addEventListener('click', (e) => {
  e.preventDefault(); // prevent reloading page
  performSearch();
});
