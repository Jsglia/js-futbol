// cambio de cantidada de articulos ingresado por el usuario.

let minusBtn = document.querySelector('.input__minus');
let plusBtn = document.querySelector('.input__plus');
let userInput = document.querySelector('.input__number');

let userInputNumber = 0;

plusBtn.addEventListener('click', ()=>{
    userInputNumber++;
    userInput.value = userInputNumber;
    console.log(userInputNumber);
});

minusBtn.addEventListener('click', ()=>{
    userInputNumber--;
    if(userInputNumber <= 0){
            userInputNumber = 0;
    }
    userInput.value = userInputNumber;
    console.log(userInputNumber);
});

// Agregar el total de productos al carrito cuando se presiona el boton Añadir a la cesta

const addToCartBtn = document.querySelector('.details__button');
let cartNotification = document.querySelector('.header__cart--notification');
let lastValue = parseInt(cartNotification.innerText);

addToCartBtn.addEventListener('click', ()=>{

    lastValue = lastValue + userInputNumber;

    cartNotification.innerText = lastValue;
    cartNotification.style.display = 'block';
    drawProductInModal();
  
});

// Mostrar el modal con el detalle del carrito

const cartIconBtn = document.querySelector('.header__cart');
const cartModal = document.querySelector('.cart-modal');
// let priceModal = document.querySelector('.cart-modal__price');
const productContainer = document.querySelector('.cart-modal__checkout-container');


cartIconBtn.addEventListener('click', ()=>{
    cartModal.classList.toggle('show');
    if(lastValue === 0){
        productContainer.innerHTML = '<p class= "cart-empty">Tu carrito está vacio</p>';
    }else{
        drawProductInModal();
    }
    }
   
 
);

//Borrar el contenido del carrito
function deleteProduct(){
    const deleteProductBtn = document.querySelector('.cart-modal__delete');
    deleteProductBtn.addEventListener('click', ()=>{
        productContainer.innerHTML = '<p class= "cart-empty">Tu carrito está vacio</p>';
        lastValue = 0;
        cartNotification.innerText = lastValue;
    });

}


//Cambiar imagenes cuando se presionen los botones flecha
const imageContainer = document.querySelector('.gallery__image-container');
const previousGalleryBtn = document.querySelector('.gallery__previous');
const nextGalleryBtn = document.querySelector('.gallery__next');
let imgIndex = 1;

nextGalleryBtn.addEventListener('click', ()=>{
    changeNextImage(imageContainer);
});

previousGalleryBtn.addEventListener('click', ()=>{
    changePreviousImage(imageContainer);
});


// // Mostrar el modal de imagenes cuando hago click en la imagen principal

// // const imagesModal = document.querySelector('.modal-gallery__background');

// // imageContainer.addEventListener('click', ()=>{
// //     // imagesModal.style.display = 'block';

// });


//FUNCIONES

function drawProductInModal(){
    productContainer.innerHTML = `
    <div class="cart-modal__details-container">
        <img class="cart-modal__image" src="./images/image-product-1-thumbnail.jpg" alt="">
    <div>
      <p class="cart-modal__product">Camiseta original BOCA JUNIORS</p>
      <p class="cart-modal__price">€60.00 x 3 <span>€180.00</span></p>
    </div>
    <img class="cart-modal__delete" src="./images/icon-delete.svg" alt="delete">
  </div>
  <button class="cart-modal__checkout">Comprar</button>`
  deleteProduct()
  let priceModal = document.querySelector('.cart-modal__price');
  priceModal.innerHTML = `$60 x${lastValue} <span>$${lastValue*60}.00</span>`
}

function changeNextImage(imgContainer){
    if(imgIndex == 4){
        imgIndex = 1;
    }
    imgIndex++;
    imgContainer.style.backgroundImage = `url('../images/image-product-${imgIndex}.jpg')`
}

function changePreviousImage(imgContainer){
    if(imgIndex == 1){
        imgIndex = 4;
    }
    imgIndex--;
    imgContainer.style.backgroundImage = `url('../images/image-product-${imgIndex}.jpg')`
}


// min 2.08.50