const proHeroLeft = document.querySelector(".pro-hero-bottom-left");
const proHeroPrice = document.querySelector(".p2-h-b-r-top");
const theMainofPro = document.querySelector(".pro-hero-bottom-left");
let theMainImgofPro = document.querySelector(".pro-hero-bottom-left-mainimg");
let theMainImagesfPro = document.querySelector(".images-pro");
let theProDiscount = document.querySelector(".pro-img-discount");
let proRelatives = document.querySelector(".pro-relatives-wrapper");

const urlParams = new URLSearchParams( window.location.search );
const paramName = urlParams.keys().next().value;
const paramValue = urlParams.get( paramName );
console.log( paramName );

function getProductCards( el ) {

  let checkCartProduct = cart.find( ( pr ) => pr.id == el.id );
  let checkLikedProduct = like.find( ( pr ) => pr.id == el.id );

  const aksiiCard = document.createElement( "div" );
  aksiiCard.className = "aksii-card novinki-card popular-card";


  const aksiiCardImage = document.createElement( "a" );
  aksiiCardImage.href = `product.html?${el.id}`
  aksiiCardImage.className = "aksii-card-image popular-card-image novinki-card-image";
  aksiiCardImage.onclick = function () {
    addToProduct( `${el.id}` )
  }

  const aksiiCardImageImg = document.createElement( "img" );
  aksiiCardImageImg.src = el.images[ 0 ];
  aksiiCardImageImg.alt = el.name;
  const aksiiCardImageDiscount = document.createElement( "p" );
  aksiiCardImageDiscount.innerHTML = `${el.discount} %`
  const aksiiCardImageLike = document.createElement( "span" );
  aksiiCardImageLike.onclick = function () {
    addToLiked( `${el.id}` );
  };
  aksiiCardImageLike.className = "cards-liked";
  aksiiCardImageLike.innerHTML = checkLikedProduct ? `<img src="Images/heart-red.png" alt="a heart">` : `<img src="Images/heart-casueal.png" alt="a heart">`;
  aksiiCardImage.append( aksiiCardImageImg, aksiiCardImageDiscount, aksiiCardImageLike );


  const aksiiCardBody = document.createElement( "div" );
  aksiiCardBody.className = "aksii-card-body popular-card-body novinki-card-body";

  const aksiiCardId = document.createElement( "span" );
  aksiiCardId.innerHTML = `ID: ${el.id}`;
  aksiiCardId.className = "aksii-card-id novinki-card-id popular-card-id";
  const aksiiCardPrices = document.createElement( "div" );
  aksiiCardPrices.className = "aksii-card-prices novinki-card-prices popular-card-prices";
  const aksiiCardproductName = document.createElement( "p" );
  aksiiCardproductName.innerHTML = `${el.name}`;
  aksiiCardproductName.className = "aksii-card-name novinki-card-name popular-card-name";
  const aksiiCardPricesP = document.createElement( "p" );
  aksiiCardPricesP.innerHTML = `${el.price} ₽`;
  aksiiCardPrices.append( aksiiCardPricesP );
  const aksiiDescription = document.createElement( "p" );
  aksiiDescription.className = "aksii-card-description aksii-card-description popular-card-description";
  aksiiDescription.innerHTML = `${el.description}`;
  const aksiiCardRating = document.createElement( "div" );
  aksiiCardRating.className = "aksii-card-rating novinki-card-rating popular-card-rating";
  const aksiiCardRatingImg1 = document.createElement( "img" );
  aksiiCardRatingImg1.src = "Images/rating-full.svg";
  aksiiCardRatingImg1.alt = "Rating stars";
  const aksiiCardRatingImg2 = document.createElement( "img" );
  aksiiCardRatingImg2.src = "Images/rating-full.svg";
  aksiiCardRatingImg2.alt = "Rating stars";
  const aksiiCardRatingImg3 = document.createElement( "img" );
  aksiiCardRatingImg3.src = "Images/rating-empty.svg";
  aksiiCardRatingImg3.alt = "Rating stars";
  const aksiiCardRatingImg4 = document.createElement( "img" );
  aksiiCardRatingImg4.src = "Images/rating-empty.svg";
  aksiiCardRatingImg4.alt = "Rating stars";
  const aksiiCardRatingImg5 = document.createElement( "img" );
  aksiiCardRatingImg5.src = "Images/rating-empty.svg";
  aksiiCardRatingImg5.alt = "Rating stars";
  aksiiCardRating.append(
    aksiiCardRatingImg1,
    aksiiCardRatingImg2,
    aksiiCardRatingImg3,
    aksiiCardRatingImg4,
    aksiiCardRatingImg5,
  );
  const aksiiCardButton = document.createElement( "button" );
  aksiiCardButton.className = checkCartProduct ? "activeInCart aksii-card-btn popular-card-btn novinki-card-btn" : "aksii-card-btn popular-card-btn novinki-card-btn";
  aksiiCardButton.innerHTML = checkCartProduct ? "Add more" : "В корзину";
  aksiiCardButton.onclick = function () {
    addToCart( `${el.id}` );
  };


  aksiiCardBody.append(
    aksiiCardId,
    aksiiCardproductName,
    aksiiCardPrices,
    aksiiDescription,
    aksiiCardRating,
    aksiiCardButton
  )

  aksiiCard.append(
    aksiiCardImage,
    aksiiCardBody
  )

  return aksiiCard
}


let foundProduct = products.find((el) => el.id == paramName);

let foundProductCategory = foundProduct.category;
let fPRelatives = products.filter((el) => el.category == foundProductCategory);
fPRelatives.map((el) => {
  let card = getProductCards(el);
  proRelatives.append(card)
})


theMainImgofPro.src = foundProduct.images[0];

theProDiscount.innerHTML = `${foundProduct.discount} %`;

theMainImagesfPro.innerHTML = `
  <img src="${foundProduct.images[ 1 ] ? foundProduct.images[ 1 ] : foundProduct.images[ 0 ]}" alt="an img">
  <img src="${foundProduct.images[ 2 ] ? foundProduct.images[ 2 ] : foundProduct.images[ 0 ]}" alt="an img">
  <img src="${foundProduct.images[ 3 ] ? foundProduct.images[ 3 ] : foundProduct.images[ 0 ]}" alt="an img">
  <img src="${foundProduct.images[ 4 ] ? foundProduct.images[ 4 ] : foundProduct.images[ 0 ]}" alt="an img">
  <img src="${foundProduct.images[ 5 ] ? foundProduct.images[ 5 ] : foundProduct.images[ 0 ]}" alt="an img">
`

//  proHeroLeft.innerHTML =  `
//  <div class="pro-hero-bottom-left-mainimg">
//   <img src="${foundProduct.images[ 0 ]}" alt="an img">
//  </div>
// <div class="images-pro">
//    <img src="${foundProduct.images[ 1 ] ? foundProduct.images[ 1 ] : foundProduct.images[ 0 ]}" alt="an img">
//    <img src="${foundProduct.images[ 2 ] ? foundProduct.images[ 2 ] : foundProduct.images[ 0 ]}" alt="an img">
//    <img src="${foundProduct.images[ 3 ] ? foundProduct.images[ 3 ] : foundProduct.images[ 0 ]}" alt="an img">
//    <img src="${foundProduct.images[ 4 ] ? foundProduct.images[ 4 ] : foundProduct.images[ 0 ]}" alt="an img">
//    <img src="${foundProduct.images[ 5 ] ? foundProduct.images[ 5 ] : foundProduct.images[ 0 ]}" alt="an img">
//  </div>
//  <span class="pro-img-discount">${foundProduct.discount} %</span>
// `

proHeroPrice.innerHTML = `

<p class="p2-h-b-r-top-price">${foundProduct.price} ₽</p>
<p class="p2-h-b-r-top-dis-price">
  ${( foundProduct.price * ( 100 - foundProduct.discount ) ) / 100} ₽
</p>
`

theMainofPro.addEventListener("click", (e) => {
  if ( typeof e.target.src === "string"){
    theMainImgofPro.src = e.target.src;
  }
})

