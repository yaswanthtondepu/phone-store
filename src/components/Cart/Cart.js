import React from 'react'
import Title from '../Title';
import CartColumns from './CartColumns'
import EmptyCart from './EmptyCart'
import {ProductConsumer} from '../../context'
import CartList from './CartList';
import CartTotal from './CartTotal'

const Cart = () => {
  return (
    <section>
      <ProductConsumer>
        {value =>{
          console.log(value);
          const {cart} = value;
          if(cart.length > 0){
            return(
              <>
                <Title name="your" title="cart" />
                <CartColumns />
                <CartList value= {value}></CartList>
                <CartTotal value={value}/>
              </>
            )
          }
          else{
            return(
              <>
                <EmptyCart />
              </>
            )
          }
        }}
      </ProductConsumer>
    </section>
  )
}

export default Cart;