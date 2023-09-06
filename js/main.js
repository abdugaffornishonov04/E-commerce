let tapToSeeNavbar = document.querySelector(".tapToSeeNavbar");
let resNavbar = document.querySelector(".header-responsive-navbar");
let hCategoryDropDown = document.querySelector(".header-category-dropdown");
let hCategoryDropDownContent = document.querySelector(".header-category-dropdown-content");
let hCategoryDropDownContentRow = document.querySelector(".header-category-dropdown-content-row");
let resCdDo = document.querySelector(".res-c-d-d-o");
let headerCartCount = document.querySelector(".shopping-number");
let headerLikedCount = document.querySelector(".liked-number");
let signInOpener = document.querySelector( ".sign-in-btn" );
let signInCloser = document.querySelector( ".header-sign-in-modal-closer-btn" );
let signInContent = document.querySelector( ".header-sign-in-modal" );
let signInSubmit = document.querySelector( ".header-sign-in-modal-submit-button" );
let signInInputGroupAll = document.querySelectorAll( ".sign-in-modal-input-group" );
let signInInputGroup1 = document.querySelector( ".sign-in-modal-input-group1" );
let signInInputGroup1P = document.querySelector( ".sign-in-modal-input-group1 p" );
let signInInputGroup2 = document.querySelector( ".sign-in-modal-input-group2" );
let signInInputGroup2P = document.querySelector( ".sign-in-modal-input-group2 p" );
let signInInputGroup3 = document.querySelector( ".sign-in-modal-input-group3" );
let signInInputGroup3P = document.querySelector( ".sign-in-modal-input-group3 p" );
let signInHeaderName = document.querySelector( ".sign-in-btn" );


///sign in

signInOpener.addEventListener( 'click', () => {
  signInContent.style.display = "flex";
} )

signInCloser.addEventListener( 'click', () => {
  signInContent.style.display = "none";
} )

signInSubmit.addEventListener( "click", () => {
  if ( signInInputGroup1.children[ 1 ].value.length != 0 ) {
    signInInputGroup1P.textContent = "looks fine!";
    signInInputGroup1P.style.color = "rgb(40, 167, 69)";
  } else {
    signInInputGroup1P.textContent = "please fill!";
    signInInputGroup1P.style.color = "red";
  }
  if ( signInInputGroup2.children[ 1 ].value.length != 0 ) {
    signInInputGroup2P.textContent = "looks fine!";
    signInInputGroup2P.style.color = "rgb(40, 167, 69)";
  } else {
    signInInputGroup2P.textContent = "please fill!";
    signInInputGroup2P.style.color = "red";
  }
  if ( signInInputGroup3.children[ 1 ].value.length != 0 ) {
    signInInputGroup3P.textContent = "looks fine!";
    signInInputGroup3P.style.color = "rgb(40, 167, 69)";
  } else {
    signInInputGroup3P.textContent = "please fill!";
    signInInputGroup3P.style.color = "red";
  }

  if (
    signInInputGroup1P.innerHTML.includes( "fine" ) &&
    signInInputGroup2P.innerHTML.includes( "fine" ) &&
    signInInputGroup3P.innerHTML.includes( "fine" )
  ) {
    let stringifiedUserSignName = JSON.stringify( signInInputGroup1.children[ 1 ].value )
    let stringifiedUserSignLastName = JSON.stringify( signInInputGroup2.children[ 1 ].value )
    let stringifiedUserSignPhone = JSON.stringify( signInInputGroup3.children[ 1 ].value )
    localStorage.setItem(
      "userName",
      stringifiedUserSignName
    )
    localStorage.setItem(
      "userLastName",
      stringifiedUserSignLastName
    )
    localStorage.setItem(
      "userPhone",
      stringifiedUserSignPhone
    )

    signInContent.innerHTML = `
    <p class="after-sign-complete">Thanks for Signing in!</p>
    `;
    setTimeout( () => {
      signInContent.style.display = "none";
    }, "2000" )
  }
} )

let userName = localStorage.getItem( "userName" )
let userLastName = localStorage.getItem( "userLastName" )
let userPhone = localStorage.getItem( "userPhone" )

if ( userPhone, userLastName, userPhone ) {
  signInHeaderName.innerHTML = "Signed In"
}

////sign in end

tapToSeeNavbar.addEventListener("click", () => {
  resNavbar.style.left = "-10px";
})

hCategoryDropDown.addEventListener("click", () => {
  hCategoryDropDownContent.classList.toggle("top-eighty")
})

resCdDo.addEventListener("click", () => {
  hCategoryDropDownContent.classList.toggle("top-eighty")
})

////header dropdown and map

function categoryCreateLink (el){
  const aLink = document.createElement("a");
  aLink.href = `category.html?${el.name}`;
  aLink.innerHTML = `${el.name}`

  return aLink
}

categories.map((el) => {
  let card = categoryCreateLink(el)
  hCategoryDropDownContentRow.append(card)
});

////cart

let cartJson = localStorage.getItem( "cart" )

let cart = JSON.parse(cartJson) || [];

function getCartTotal(){
  headerCartCount.textContent = cart.length;
}

getCartTotal()


////like

let likeJson = localStorage.getItem( "like" )

let like = JSON.parse( likeJson ) || [];

function getLikeTotal() {
  headerLikedCount.textContent = like.length;
}

getLikeTotal()


////product
