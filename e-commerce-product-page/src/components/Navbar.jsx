import './Navbar.css';
import { useState } from 'react';
import Sidebar from './Sidebar';
import logo from '../assets/images/logo.svg';
import avatar from '../assets/images/image-avatar.png';
import cart from '../assets/images/icon-cart.svg';
import menuIcon from '../assets/images/icon-menu.svg';
import product1 from '../assets/images/image-product-1-thumbnail.jpg';
import deleteIcon from '../assets/images/icon-delete.svg';
import { useGlobalContext } from '../context/context';
const Navbar = () => {
  const { toggleCart, showCart, product } = useGlobalContext();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };
  return (
    <nav>
      <div className='logo'>
        <button className='menu-icon' onClick={toggleSidebar}>
          <img src={menuIcon} alt='' />
        </button>

        <img src={logo} alt='logo' className='logo-img' />
      </div>
      {sidebarOpen && <Sidebar toggleSidebar={toggleSidebar} />}
      <div className='links-container'>
        <ul className='links'>
          <li>
            <a href='#'>Collections</a>
          </li>
          <li>
            <a href='#'>Men</a>
          </li>
          <li>
            <a href='#'>Women</a>
          </li>
          <li>
            <a href='#'>About</a>
          </li>
          <li>
            <a href='#'>Contact</a>
          </li>
        </ul>
      </div>
      <div className='cart-container'>
        {showCart && (
          <div className='show'>
            <div className='cart-overlay'>
              <div className='overlay-title'>
                <h2>Cart</h2>
              </div>
              <div className='underline'></div>
              {product.amount > 0 ? (
                <>
                  <div className='product-info'>
                    <div className='img-item-container'>
                      <img src={product1} alt='' className='checkout-img' />
                    </div>
                    <div className='cart-details'>
                      <h6>Fall Limited Edition Sneakers</h6>
                      <div className='checkout'>
                        <p className='checkout-amount'>
                          $125 x {product.amount}
                        </p>
                        <div className='price-delete-container'>
                          <p className='checkout-final-price'>
                            ${product.price * product.amount}.00
                          </p>
                          <img
                            src={deleteIcon}
                            alt=''
                            className='delete-icon'
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <button className='checkout-btn'>Checkout</button>
                </>
              ) : (
                <div className='empty-cart'>
                  <p>Your cart is Empty</p>
                </div>
              )}
            </div>
          </div>
        )}

        <button className='cart-button' onClick={toggleCart}>
          <img src={cart} alt='cart' />
          {product.amount > 0 && (
            <span className='cart-count'>{product.amount}</span>
          )}
        </button>
        <button>
          <img src={avatar} alt='avatar' className='avatar-img' />
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
