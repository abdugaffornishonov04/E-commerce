let tapToSeeNavbar = document.querySelector(".tapToSeeNavbar");
let resNavbar = document.querySelector(".header-responsive-navbar");
let hCategoryDropDown = document.querySelector(".header-category-dropdown");
let hCategoryDropDownContent = document.querySelector(".header-category-dropdown-content");
let hCategoryDropDownContentRow = document.querySelector(".header-category-dropdown-content-row");
let resCdDo = document.querySelector(".res-c-d-d-o");

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
})

