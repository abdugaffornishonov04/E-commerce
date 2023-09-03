
let productsRow = document.querySelector( ".products-hero__bottom-row" );
let totalProductsCount = document.querySelector( ".total-products-count" );
let theRatingStarsProducts = document.querySelectorAll( ".aksii-card-rating img" );
let productsSearchInput = document.querySelector( ".products-search-input" );
let paginationContent = document.querySelector( ".p-p-content" );



let activePage = 1;

let search = "";

function getProductsProduct() {
  ///map
  let searchResults = products.filter( el => el.name.toLowerCase().includes( search ) )

  let pages = Math.ceil(searchResults.length / 8);
  // console.log(pages);

  if(pages > 1){
    paginationContent.innerHTML = `
    <img onclick="getPage('--')" class="p-p-lefts ${activePage === 1 ? "display-none" : ""}" src="Images/chevrons-left.png" alt="chevron signs like arrows">
    <img onclick="getPage('-')" class="p-p-left  ${activePage === 1 ? "display-none" : ""}" src="Images/chevron-left.png" alt="chevron signs like arrows">
    `
    for (let i = 1; i <= pages; i++){
      paginationContent.innerHTML += `
      <button onclick="getPage(${i})" class="p-p-${i} ${i === activePage ? "active-page" : ""}">${i}</button>
      `
    }
  
    paginationContent.innerHTML += `
    <img onclick="getPage('+')" class="p-p-right  ${activePage === pages ? "display-none" : ""}" src="Images/chevron-right.png" alt="chevron signs like arrows">
    <img onclick="getPage('++')" class="p-p-rights  ${activePage === pages ? "display-none" : ""}" src="Images/chevrons-right.png" alt="chevron signs like arrows">
    `
  } else{
    paginationContent.innerHTML = "";
  }

  let start = (activePage - 1) * 8;
  let end = activePage * 8;

  let pageResults = searchResults.slice(start, end)

  productsRow.innerHTML = ""

  pageResults.map( ( el ) => {
    let card = getProductCards( el );
    productsRow.append( card )
  } )

  ///total products
  totalProductsCount.textContent = searchResults.length
}

getProductsProduct()

productsSearchInput.addEventListener( "keyup", function () {
  activePage = 1; 
  search = this.value.trim().toLowerCase();

  getProductsProduct()
} )

///rating dynamic

theRatingStarsProducts.forEach( ( el ) => {
  el.addEventListener( "click", () => {
    if ( el.src.includes( "empty" ) ) {
      el.src = "Images/rating-full.svg";
    }
  } );
} );

function getPage(page){
  if (page === "++"){
    activePage += 2
  } else if (page === "+"){
    activePage++
  } else if ( page === "--" ) {
    activePage -= 2
  } else if ( page === "-" ) {
    activePage -= 1
  } else {
    activePage = page
  }
  getProductsProduct()
}


////cart card adding

function addToCart( id ) {

  let product = products.find( ( el ) => el.id == id );
  let check = cart.find( ( el ) => el.id == id );

  if ( check ) {
    cart = cart.map( ( pr ) => {
      if ( pr.id == id ) {
        pr.quantity++
      }
      return pr;
    } )
  } else {
    product.quantity = 1
    cart.push( product )
  }

  localStorage.setItem( "cart", JSON.stringify( cart ) )
  getCartTotal()
  getProductsProduct()
}

///like adding

function addToLiked( id ) {
  let product = products.find( ( el ) => el.id == id );
  let check = like.find( ( el ) => el.id == id );

  if ( check ) {
    like = like.filter( el => el.id != id );
  } else {
    like.push( product )
  }

  localStorage.setItem( "like", JSON.stringify( like ) )
  getLikeTotal()
  getProductsProduct()
}

