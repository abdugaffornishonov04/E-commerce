const ctMainRow = document.querySelector( ".categorii-bottom" );

function ctGetCards( cat ) {
  const ctMainCard = document.createElement( "div" );
  ctMainCard.className = "categorii-bottom__card";
  const ctMainCardImg = document.createElement( "img" );
  ctMainCardImg.src = `${cat.image}`;
  ctMainCardImg.alt = `${cat.name}`;
  const ctMainCardTitle = document.createElement( "h3" );
  ctMainCardTitle.className = "categorii-bottom__card__title";
  ctMainCardTitle.innerHTML = `${cat.name}`;
  const ctFloat = document.createElement( "div" );
  ctFloat.className = "categorii-float";

  ctMainCard.addEventListener( 'click', () => {
    window.location.href = `category.html?${el.name}`;
  } );


  ctMainCard.append( ctMainCardImg, ctMainCardTitle, ctFloat )
  return ctMainCard;
}

categories.map( ( pr ) => {
  let card = ctGetCards( pr );
  ctMainRow.append( card )
} )