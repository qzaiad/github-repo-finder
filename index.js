import {buttonElement, searchInput, userInputElemet} from "./scripts/elements"
import performSearch from "./scripts/search";

const USERS_API = "https://api.github.com/search/users?q=";
// const USERS_API = "https://api.github.com/search/users?q=apple+type:org";
// const USERS_API = "https://api.github.com/search/users?q=qzaiad+type:user";

buttonElement?.addEventListener('click', (e) => {
  e.preventDefault(); // prevent reloading page
  performSearch(USERS_API, searchInput.value, userInputElemet.checked);
});
