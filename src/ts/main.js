// LoDash
import _ from 'lodash';
// import nunjucks from 'nunjucks';
import * as bootstrap from 'bootstrap';
// import { resolve } from 'path';

window.bootstrap = bootstrap;

import CartHelper from './CartHelper'
let Cart = new CartHelper()

window.Cart = Cart;
console.log(Cart)

// Clear the Cart first (Remove later)
Cart.clearProductsInCart()

// Add by Id
Cart.AddToCartById(2)
// Cart.AddToCartById(2)

// // GEt All Prodcusts on cart
// console.log(Cart.getProductsInCart())

// Cart.RemoveFromCartById(1)

Cart.IncrementProductQuantity(2,3) // 4

// GEt All Prodcusts on cart
console.log(Cart.getProductsInCart())

