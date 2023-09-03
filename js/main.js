let tapToSeeNavbar = document.querySelector(".tapToSeeNavbar");
let resNavbar = document.querySelector(".header-responsive-navbar");
let hCategoryDropDown = document.querySelector(".header-category-dropdown");
let hCategoryDropDownContent = document.querySelector(".header-category-dropdown-content");
let hCategoryDropDownContentRow = document.querySelector(".header-category-dropdown-content-row");
let resCdDo = document.querySelector(".res-c-d-d-o");
let headerCartCount = document.querySelector(".shopping-number");
let headerLikedCount = document.querySelector(".liked-number");

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