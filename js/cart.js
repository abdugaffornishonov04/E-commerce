const cartCardRow = document.querySelector(".korzinka-hero__main-content__cards");
const cartPriceBar = document.querySelector(".korzinka-hero__main-prices-bar-wrapper");
const deleteAllFromCart = document.querySelector(".korzinka-delete-all-btn");
const thanksBuying = document.querySelector(".k-h__m-c-p4 button");
const cartHeroCount = document.querySelector(".korzinka-hero__title span");

//////
function getCardCart({id, images, name, price, discount, quantity}){
  return `<div class="korzinka-hero__main-content__card">
    <img src=${images[0]}>
    <div class="k-h-m-c-c-textual">
      <h5>${name}</h5>
      <div>
        <p>${price} ₽</p>
        <span>${discount} %</span>
      </div>
    </div>
    <div class="k-h-m-c-c-btns">
      <button onclick="decreaseQuantity(${id})" class="k-h-m-c-c-btns-decrease">-</button>
      <p>${quantity}</p>
      <button onclick="increaseQuantity(${id})" class="k-h-m-c-c-btns-increase">+</button>
    </div>
    <p class="k-h-m-c-c-price">${( quantity === 1 ? ( discount === 0 ? price : Math.round( price - ( price * discount / 100 ) ) ) : ( discount === 0 ? price * quantity : Math.round( price * quantity - ( price * quantity * discount / 100 ) ) ) )} ₽</p>
  </div>
  `
}

function mapCartCard (){
  cartCardRow.innerHTML = "";
  cart.map( ( pr ) => {
    cartCardRow.innerHTML += getCardCart( pr );
  } )
}

mapCartCard()

/////
function getCartPriceBar(count, prCount){
  return `
  <div class="korzinka-hero__main-prices-bar">
    <div class="k-h__m-c-p1">
      <div>
        <input type="checkbox">
        Списать 200 ₽
      </div>
      <p>На карте накоплено 200 ₽</p>
    </div>
    <div class="k-h__m-c-p2">
      <div>
        <div><span class="all-product-total-count">${prCount}</span> <a> товара</a></div>
        <p>258,10 ₽</p>
      </div>
      <span>
        <p>Скидка</p>
        <p>-8,01 ₽</p>
      </span>
    </div>
    <div class="k-h__m-c-p3">
      <p>Итог</p> <span class="all-product-price">${count} ₽</span>
    </div>
    <div class="k-h__m-c-p4">
      <button class="thanks-for-buying" >Оформить заказ</button>
    </div>
  </div>
  `
}

function mapPriceBar(){
  let count = 0;
  let prCount = 0;
  cart.map((el) => {
    count += el.price
    prCount++
  })

  cartPriceBar.innerHTML = getCartPriceBar(count, prCount);
  getCartTotal()

}

mapPriceBar()


///increase and decrease quantity

function increaseQuantity(id){
  cart = cart.map((el) => {
    if(el.id == id){
      el.quantity++
    }
    return el;
  });
  localStorage.setItem("cart", JSON.stringify(cart))
  mapCartCard()
}

// function decreaseQuantity(id){
//   let lastProduct = products.find( ( el ) => el.id == id );
  
//   if(lastProduct.quantity == 1){
//     cart = cart.filter((el) => el.id != id)
//   } else{
//     cart = cart.map((el) => {
//       if(el.id == id){
//         el.quantity--
//       }
//       return el;
//     });
//   }
//   localStorage.setItem("cart", JSON.stringify(cart))
//   mapCartCard()
// }

function decreaseQuantity( id ) {
  let index = cart.findIndex( ( el ) => el.id == id );

  if ( index !== -1 ) {
    let product = cart[ index ];
    if ( product.quantity == 1 ) {
      let isDelete = confirm( "Do you actually want to remove this product from your cart?" );
      if ( isDelete ) {
        cart.splice( index, 1 );
        getCartTotal()
      }
    } else {
      product.quantity--;
      cart[ index ] = product;
    }
    localStorage.setItem( "cart", JSON.stringify( cart ) );
    mapCartCard();
  }
}

///delete all from the cart

let deleteAllEvent

deleteAllFromCart.addEventListener("click", () => {
 deleteAllEvent = confirm("Are you sure you want to remove all products from your cart?");

  if ( deleteAllEvent ){
    cart = []
    localStorage.clear()
  }

  getCartTotal()
  mapCartCard()
})

////thanks for buying

// thanksBuying.addEventListener( "click", () => {
//   confirm( "Thank you for your purchase! Your products are on their way." );
// } );


////cartHeroCount

cartHeroCount.textContent = cart.length || 0;
getCartTotal()
