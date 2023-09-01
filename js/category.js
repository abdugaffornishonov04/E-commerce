let categoryRow = document.querySelector(".c-h-c-right__row");

const urlParams = new URLSearchParams( window.location.search );
const paramName = urlParams.keys().next().value;
const paramValue = urlParams.get( paramName );
console.log( paramName );

let filteredCategory = products.filter( el => ( el.category.toLowerCase() == paramName.toLowerCase()))

filteredCategory.map((el) => {
  let card = getProductCards(el);
  categoryRow.append(card)
})
