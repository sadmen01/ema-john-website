import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './product.css';

const Product = ({product, handleAddToCart}) => {
    // const {product, handleAddToCart} = props;
    const { name, img, seller, price, ratings } = product;
    return (
        <div className='product'>
            <img src={img} onError={(e)=>e.target.setAttribute('src','https://previews.123rf.com/images/kaymosk/kaymosk1804/kaymosk180400006/100130939-error-404-page-not-found-error-with-glitch-effect-on-screen-vector-illustration-for-your-design-.jpg')} alt=""></img>
            <div className='product-info'>
                <p className='product-name'>
                    {name}</p>
                <p>
                    Price:${price}
                </p>
                <p><small>
                    Seller:{seller}
                </small></p>
                <p><small>
                    Rating:{ratings} stars
                </small></p>
            </div>
            <button onClick={() => handleAddToCart(product)} className='btn-cart'>
                <p className='btn-text'>add to cart</p>
                <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
            </button>
        </div>
    );
};

export default Product;