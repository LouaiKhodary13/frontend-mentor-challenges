import './ProductDetails.css';
import minus from '../assets/images/icon-minus.svg';
import plus from '../assets/images/icon-plus.svg';
import { useGlobalContext } from '../context/context';
const ProductDetails = () => {
  const {
    incCart,
    decCart,
    product: { price, amount },
  } = useGlobalContext();
  return (
    <article>
      <header>
        <div className='title'>
          <h2>sneakers Company</h2>
          <h4>Fall Limited Edition Sneakers</h4>
        </div>
      </header>
      <div className='item-info'>
        <p className='item-details'>
          These low-profile sneakers are your perfect casual wear companion.
          Featuring a durable rubber outer sole, they’ll withstand everything
          the weather can offer.
        </p>
      </div>
      <div className='price-container'>
        <p className='price'>${price}</p>
        <span className='discount'>50%</span>
      </div>
      <p className='before-discount'>
        <span>$250.00</span>
      </p>
      <div className='btn-container'>
        <button className='btn-range'>
          <span className='minus'>
            <button onClick={decCart}>
              <img src={minus} alt='minus' />
            </button>
          </span>
          {amount}
          <span className='plus'>
            <button onClick={incCart}>
              <img src={plus} alt='plus' />
            </button>
          </span>
        </button>
        <button className='btn-add-cart'>
          <svg width='22' height='20' xmlns='http://www.w3.org/2000/svg'>
            <path
              d='M20.925 3.641H3.863L3.61.816A.896.896 0 0 0 2.717 0H.897a.896.896 0 1 0 0 1.792h1l1.031 11.483c.073.828.52 1.726 1.291 2.336C2.83 17.385 4.099 20 6.359 20c1.875 0 3.197-1.87 2.554-3.642h4.905c-.642 1.77.677 3.642 2.555 3.642a2.72 2.72 0 0 0 2.717-2.717 2.72 2.72 0 0 0-2.717-2.717H6.365c-.681 0-1.274-.41-1.53-1.009l14.321-.842a.896.896 0 0 0 .817-.677l1.821-7.283a.897.897 0 0 0-.87-1.114ZM6.358 18.208a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm10.015 0a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm2.021-7.243-13.8.81-.57-6.341h15.753l-1.383 5.53Z'
              fill='#fff'
              fillRule='nonzero'
            />
          </svg>
          Add to cart
        </button>
      </div>
    </article>
  );
};

export default ProductDetails;
