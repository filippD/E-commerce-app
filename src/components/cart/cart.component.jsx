import React from 'react';
import Button from '../button/button.component';
import './cart.styles.scss';

const Cart = () => (
	<div className='cart-dropdown'>
		<div className='cart-items' />
		<Button>GO TO CHECKOUT</Button>
	</div>
)

export default Cart;