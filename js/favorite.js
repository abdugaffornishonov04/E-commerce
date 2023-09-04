let favoritesRow = document.querySelector( ".f-h-f-right__row" );


let likedContJson = localStorage.getItem("like");

let likedCont = JSON.parse(likedContJson)

likedCont.map( ( el ) => {
  let card = getProductCards( el );
  favoritesRow.append( card )
} )