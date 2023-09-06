let theAksiiRow = document.querySelector( ".aksii-content-row" );
let theNovinkiRow = document.querySelector( ".novinki-content-row" );
let thePopularRow = document.querySelector( ".popular-content-row" );
let theSpecialRow = document.querySelector( ".special-bottom-row" );




function getProductCards( el ) {

  let checkCartProduct = cart.find( ( pr ) => pr.id == el.id );
  let checkLikedProduct = like.find( ( pr ) => pr.id == el.id );

  const aksiiCard = document.createElement( "div" );
  aksiiCard.className = "aksii-card novinki-card popular-card";


  const aksiiCardImage = document.createElement( "a" );
  aksiiCardImage.href = `product.html?${el.id}`
  aksiiCardImage.className = "aksii-card-image popular-card-image novinki-card-image";
  aksiiCardImage.onclick = function () {
    addToProduct( `${el.id}`)
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

////add tom product

function addToProduct(id){
  let product = products.find((el) => el.id == id);
  let productJson = JSON.stringify(product)
  localStorage.setItem("product", productJson)
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
}

///the function which contains all the mapping done in index html

function getAllHomeProducts() {
  ///four of products which are the last and has discount
  let discountHasProducts = products.filter( ( pr ) => pr.discount ).slice( -4 );
  let lastFourProduct = products.slice( -4 );

  theAksiiRow.innerHTML = "";
  discountHasProducts.map( ( el ) => {
    let card = getProductCards( el );
    theAksiiRow.append( card )
  } )

  ///the last four products
  theNovinkiRow.innerHTML = "";
  lastFourProduct.map( ( el ) => {
    let card = getProductCards( el );
    theNovinkiRow.append( card )
  } )

  ////four of products with the highest ratings
  let sortedProducts = products.sort( ( a, b ) => b.rating - a.rating );
  let topFourRating = sortedProducts.slice( 0, 4 );

  thePopularRow.innerHTML = "";
  topFourRating.map( ( el ) => {
    let card = getProductCards( el );
    thePopularRow.append( card );
  } )
}

getAllHomeProducts()


///special prilojenia map

const specialPrilojeniaData = [
  {
    title: "Оформите карту «Северяночка»",
    text: "И получайте бонусы при покупке в магазинах и на сайте",
    img: "Images/special-img1.png",
    color: "#FCD5BA"
  },
  {
    title: "Покупайте акционные товары",
    text: "И получайте вдвое больше бонусов",
    img: "Images/special-img2.png",
    color: "#E5FFDE"
  }
]

function getSpecialCard( el ) {
  const specialCard = document.createElement( "div" );
  specialCard.className = "special-card"

  const specialCardWrapper = document.createElement( "div" );
  specialCardWrapper.className = "special-card-wrapper"

  const specialCardContent = document.createElement( "div" );
  specialCardContent.className = "special-card-content"

  const specialCardTitle = document.createElement( "h3" );
  specialCardTitle.className = "special-card-title"
  specialCardTitle.innerHTML = `${el.title}`

  const specialCardText = document.createElement( "p" );
  specialCardText.className = "special-card-text"
  specialCardText.innerHTML = `${el.text}`

  specialCardContent.append( specialCardTitle, specialCardText )

  const specialCardImage = document.createElement( "div" );
  specialCardImage.className = "special-card-image"
  const specialCardImageImg = document.createElement( "img" );
  specialCardImageImg.src = `${el.img}`
  specialCardImageImg.alt = `${el.title}`

  specialCardImage.append( specialCardImageImg )
  specialCardWrapper.append( specialCardContent, specialCardImage )
  specialCard.append( specialCardWrapper )

  specialCard.style.backgroundColor = `${el.color}`

  return specialCard
}

specialPrilojeniaData.map( ( el ) => {
  let theCard = getSpecialCard( el );
  theSpecialRow.append( theCard )
} )

/////magazine ap tab

const tabButtons = document.querySelectorAll( ".m-a-p-btn" );
const tabContents = document.querySelectorAll( ".magazine-ap-tab-content" );

let tabActive = 0;

function getTabContents() {
  tabContents.forEach( ( el, i ) => {
    if ( i !== tabActive ) {
      el.style.display = "none";
      tabButtons[ i ].classList.remove( "active-tab" );
      tabButtons[ i ].style.backgroundColor = "";
      tabButtons[ i ].style.color = "";
    } else {
      el.style.display = "block";
      tabButtons[ i ].classList.add( "active-tab" );
      tabButtons[ i ].style.backgroundColor = "#70C05B";
      tabButtons[ i ].style.color = "white";
    }
  } );
}

getTabContents();

tabButtons.forEach( ( el, i ) => {
  el.addEventListener( "click", function () {
    tabActive = i;
    getTabContents();
  } )
} );

///articles map

const arMainRow = document.querySelector( ".articles-bottom" );

const articlesArray = [
  {
    image: "./Images/articlescardimg3.png",
    subtext: "05.03.2021",
    title: "Режим использования масок и перчаток на территории магазинов",
    text: `Подробная информация о режимах использования масок и перчаток на территории магазинов 'ЛЕНТА'
      Информация обновляется
      каждый будний день.`,
    buttonText: "Подробнее",
  },
  {
    image: "./Images/articlescardimg2.png",
    subtext: "05.03.2021",
    title: "Весеннее настроение для каждой",
    text: ` 8 Марта – это не просто Международный женский день, это ещё день тюльпанов, приятных сюрпризов и
      праздничных тёплых
      пожеланий.`,
    buttonText: "Подробнее",
  },
  {
    image: "./Images/articlescardimg1.png",
    subtext: "22.02.2020",
    title: "ЗОЖ или ФАСТФУД. А вы на чьей стороне? Голосуем!",
    text: `Голосуйте за любимые категории, выбирайте категорию-победителя в мобильном приложении и получайте
      кешбэк 10% баллами в
      апреле!`,
    buttonText: "Подробнее",
  },
];

function articlCardGetter( arr ) {
  const arMainCard = document.createElement( "div" );
  arMainCard.className = "articles-card";

  const arMainCardImgBox = document.createElement( "div" );
  arMainCardImgBox.className = "articles-card__imgbox";
  const arMainCardImgBoxImg = document.createElement( "img" );
  arMainCardImgBoxImg.src = `${arr.image}`
  arMainCardImgBoxImg.alt = "an img";
  arMainCardImgBox.append( arMainCardImgBoxImg );

  const arMainCardInfo = document.createElement( "div" );
  arMainCardInfo.className = "articles-card__infos";

  const arMainCardInfoP1 = document.createElement( "p" );
  arMainCardInfoP1.className = "articles-card__subtext";
  arMainCardInfoP1.innerHTML = `${arr.subtext}`;
  const arMainCardInfoTitle = document.createElement( "h4" );
  arMainCardInfoTitle.className = "articles-card__title";
  arMainCardInfoTitle.innerHTML = `${arr.title}`;
  const arMainCardInfoP2 = document.createElement( "p" );
  arMainCardInfoP2.className = "articles-card__text";
  arMainCardInfoP2.innerHTML = `${arr.text}`;
  const arMainCardInfoButton = document.createElement( "button" );
  arMainCardInfoButton.className = "articles-card__btn";
  const arMainCardInfoButtonA = document.createElement( "a" );
  arMainCardInfoButtonA.href = `./contact.html`;
  arMainCardInfoButtonA.innerHTML = `${arr.buttonText}`
  arMainCardInfoButton.append( arMainCardInfoButtonA );

  arMainCardInfo.append(
    arMainCardInfoP1,
    arMainCardInfoTitle,
    arMainCardInfoP2,
    arMainCardInfoButton
  );

  arMainCard.append( arMainCardImgBox, arMainCardInfo )

  return arMainCard;
}

articlesArray.map( ( el ) => {
  let card = articlCardGetter( el );
  arMainRow.append( card );
} )

///card rating dynamic

let theRatingStar = document.querySelectorAll( ".aksii-card-rating img" );

let theRatingStars = document.querySelectorAll( ".aksii-card-rating img" );

theRatingStars.forEach( ( el ) => {
  el.addEventListener( "click", () => {
    if ( el.src.includes( "empty" ) ) {
      el.src = "Images/rating-full.svg";
    }
  } );
} );



//////
let productBody = document.querySelectorAll( ".aksii-card-body" );
let productBody2 = document.querySelectorAll( ".popular-card-body" );
let productBody3 = document.querySelectorAll( ".novinki-card-body" );
