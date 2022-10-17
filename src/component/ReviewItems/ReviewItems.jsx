import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './ReviewItems.css';

const ReviewItems = ({product, handelRemoveItem}) => {
    const {id,name, price, quantity, img,shipping} = product;
    return (
    <div className='review-item'>
           <div>
           <img src={img} alt="" />
           </div>
           <div className="review-details-container">
            <div className="review-details">
                    <p>{name}</p>
                    <p><small>Price:${price}</small></p>
                    <p><small>Shipping:${shipping}</small></p>
                    <p><small>Quantity:{quantity}</small></p>
            </div>
            <div className="delete-container">
                <button onClick={()=> handelRemoveItem(id)} className='btn-delete'>
                    <FontAwesomeIcon className='delete-icon' icon={faTrashAlt}/>
                </button>
            </div>
           </div>
        </div>
        
    );
};

export default ReviewItems;