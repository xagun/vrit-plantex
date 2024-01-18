import React from 'react'

import product1 from '../assets/img/product1.png';
import product2 from '../assets/img/product2.png';
import product3 from '../assets/img/product3.png';
import product4 from '../assets/img/product4.png';
import product5 from '../assets/img/product5.png';
import product6 from '../assets/img/product6.png';

const Products = () => {
  return (
    <div>
     <section class="product section container" id="products">
            <h2 class="section__title-center">
                Check out our <br /> products
            </h2>

            <p class="product__description">
                Here are some selected plants from our showroom, all are in excellent
                shape and has a long life span. Buy and enjoy best quality.
            </p>

            <div class="product__container grid">
                <article class="product__card">
                    <div class="product__circle"></div>

                    <img src={product1} alt="" class="product__img" />

                    <h3 class="product__title">Cacti Plant</h3>
                    <span class="product_price">$19.99</span>

                    <button class="button--flex product__button">
                        <i class="ri-shopping-bag-line"></i>
                    </button>
                </article>

                <article class="product__card">
                    <div class="product__circle"></div>

                    <img src={product2} alt="" class="product__img" />

                    <h3 class="product__title">Cactus Plant</h3>
                    <span class="product_price">$11.99</span>

                    <button class="button--flex product__button">
                        <i class="ri-shopping-bag-line"></i>
                    </button>
                </article>

                <article class="product__card">
                    <div class="product__circle"></div>

                    <img src={product3} alt="" class="product__img" />

                    <h3 class="product__title">Aloe Vera Plant</h3>
                    <span class="product_price">$7.99</span>

                    <button class="button--flex product__button">
                        <i class="ri-shopping-bag-line"></i>
                    </button>
                </article>

                <article class="product__card">
                    <div class="product__circle"></div>

                    <img src={product4} alt="" class="product__img" />

                    <h3 class="product__title">Succulent Plant</h3>
                    <span class="product_price">$5.99</span>

                    <button class="button--flex product__button">
                        <i class="ri-shopping-bag-line"></i>
                    </button>
                </article>

                <article class="product__card">
                    <div class="product__circle"></div>

                    <img src={product5} alt="" class="product__img" />

                    <h3 class="product__title">Succulent Plant</h3>
                    <span class="product_price">$10.99</span>

                    <button class="button--flex product__button">
                        <i class="ri-shopping-bag-line"></i>
                    </button>
                </article>

                <article class="product__card">
                    <div class="product__circle"></div>

                    <img src={product6} alt="" class="product__img" />

                    <h3 class="product__title">Green Plant</h3>
                    <span class="product_price">$8.99</span>

                    <button class="button--flex product__button">
                        <i class="ri-shopping-bag-line"></i>
                    </button>
                </article>
            </div>
        </section>
    </div>
  )
}

export default Products
