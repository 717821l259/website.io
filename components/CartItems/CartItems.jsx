import React, { useContext } from 'react';
import { ShopContext } from '../../context/ShopContext';
import remove_icon from '../Assets/cart_cross_icon.png';
import './CartItems.css'

const CartItems = () => {
    const {getTotalcartamount, all_product, cartItems, removeFromCart } = useContext(ShopContext);

    return (
        <div className='cartitems'>
            <div className="cartitems-format-main">
                <p> Product</p>
                <p>Title</p>
                <p>Price</p>
                <p>Quantity</p>
                <p>Total</p>
                <p>Remove</p>
            </div>
            <hr />
            <div>
            {all_product.map((e) => {
                if (cartItems[e.id] > 0) {
                    return (
                        <div key={e.id}>
                            <div className="cartitems-form cartitems-format-main">
                                <img src={e.image} alt={e.name} className="carticon-product" />
                                <p>{e.name}</p>
                                <p>${e.new_price}</p>
                                <button className="cartitems-quantity">{cartItems[e.id]}</button>
                                <p>${(e.new_price * cartItems[e.id]).toFixed(2)}</p>
                                <img 
                                    src={remove_icon}
                                    onClick={() => { removeFromCart(e.id); }}
                                    alt="Remove"
                                    className="remove-icon"
                                />
                            </div>
                            <hr />
                        </div>
                    );
                } else {
                    return null;
                }
            })}
            <div className="cartitems-down">
                <div className="cartitems-total">
                    <h1> cart Totals</h1>
                    <div>
                        <div className="cartitems-total-item">
                            <p>subtotal</p>
                            <p>${getTotalcartamount()}</p>
                        </div>
                        <hr />
                        <div className="cartitems-total-item">
                            <p>Shipping Fee</p>
                            <p>Free</p>
                        </div>
                        <hr />
                        <div className="cartitems-total-item">
                            <h3>Total</h3>
                            <h3>${getTotalcartamount()}</h3>
                        </div>
                    </div>
                    <button>PROCEED TO CHECKOUT</button>
                </div>
                <div className="cartitems-procode">
                    <p>If you have a promo code,Enter it here</p>
                    <div className="cartitems-box">
                        <input type="text" placeholder='promo code' />
                        <button>Submit</button>
                    </div>
                </div>
            </div>
            </div>
        </div>
    );
};

export default CartItems;
