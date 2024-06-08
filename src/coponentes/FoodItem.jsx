import React, { useContext, useState } from 'react'
import { assets } from '../assets/assets'
import { StoreContext } from '../context/StoreContext';

function FoodItem({ id, name, description, price, image }) {



  const { cartItem, setCartItem, addToCart, removeCart } = useContext(StoreContext)



  return (
    <div className='food-item'>

      <div className='foodItem-img-container'>

        <img className='food-item-img' src={image} />

        {!cartItem[id] ? <img className='add' onClick={() => addToCart(id)} src={assets.add_icon_white} />
          : <div className='food-item-counter'>

            <img onClick={() => removeCart(id)} src={assets.remove_icon_red} />
            <p>{cartItem[id]}</p>
            <img onClick={() => addToCart(id)} src={assets.add_icon_green} />

          </div>

        }


      </div>

      <div className='food-item-info'>

        <div className='food-item-name-rating'>

          <p>{name}</p>
          <img src={assets.rating_starts} />
        </div>

        <p className='food-item-description'>{description}</p>
        <p className='food-item-price'>${price}</p>



      </div>


    </div>
  )
}

export default FoodItem