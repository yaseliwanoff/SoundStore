import { disableScroll } from '../functions/disable-scroll.js';
import { enableScroll } from '../functions/enable-scroll.js';

const miniCart = document.querySelector('.mini-cart');

if (miniCart) {
  const miniCartBtn = document.querySelector('.header__cart');
  const miniCartClose = document.querySelector('.mini-cart__close');
  const overlay = document.querySelector('.overlay');

  function toggleMiniCart() {
    miniCart.classList.toggle('mini-cart--active');
    overlay.classList.toggle('overlay--visible');

    if (miniCart.classList.contains('mini-cart--active')) {
      disableScroll();
    } else {
      enableScroll();
    }
  }

  miniCartBtn.addEventListener('click', toggleMiniCart);
  miniCartClose.addEventListener('click', toggleMiniCart);
}
