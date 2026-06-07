const computeCards = (items) => {
  let result = '';
  items.map( (item) => {
  result += `
<article class="card">
  <img class="img" loading="lazy" src="${item.avatar_url}"/>
  <h2 class="name">${item.login}</h2>
</article>
`;
  })
  if(!result){
    result = '<p>No results found.</p>'
  }
  return result;
}

const setCards = (element, items) => {
  const cards = computeCards(items);
  element.innerHTML = cards;
}

export default setCards;