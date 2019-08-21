import React from 'react';
import { connect } from 'react-redux';
import Button from '../button/button.component';
import './cart.styles.scss';
import CartItem from '../cart-item/cart-item.component';
import { selectCartItems } from '../../redux/cart/cart.selectors';

const Cart = ({ cartItems }) => (
	<div className='cart-dropdown'>
		<div className='cart-items' >
			{
				cartItems.map((cartItem) => (
					<CartItem key={cartItem.id} item={cartItem} />
				))
			}
		</div>
		<Button>GO TO CHECKOUT</Button>
	</div>
)

const mapStateToProps = (state) => ({
	cartItems: selectCartItems(state)
})

export default connect(mapStateToProps)(Cart);