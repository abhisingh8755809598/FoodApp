import React, { useContext } from 'react'
import { StoreContext } from '../context/StoreContext'

function Cart() {

  const { cartItem, food_list, removeCart } = useContext(StoreContext)

  return (
    <div className='cart'>

      <div className='cart-item'>

        <div className='cart-item-title'>

          <p>items</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p>

        </div>
        <br />
        <hr />
        {food_list.map((item, index) => {


          if (cartItem[item._id] > 0) {


            return (

              <div className='cart-item-title cart-items-item'>

                <img src={item.image} />
                <p>{item.name}</p>
                <p>${item.price}</p>
                <p>{cartItem[item._id]}</p>
                <p>${item.price * cartItem[item._id]}</p>

                <p onClick={() => removeCart(item._id)} className='cross'>X</p>

              </div>

            )

          }


        })}


      </div>
    </div>

  )
}

export default Cart