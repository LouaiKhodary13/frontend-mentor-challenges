import './App.css';

import Navbar from './components/Navbar';
import ProductDetails from './components/ProductDetails';
import ProductImages from './components/ProductImages';

function App() {
  return (
    <>
      <Navbar />
      <main>
        <ProductImages className='item-1' />
        <ProductDetails />
      </main>
      <div className='attribution'>
        Challenge by{' '}
        <a href='https://www.frontendmentor.io?ref=challenge'>
          Frontend Mentor
        </a>
        . Coded by <a href='#'>Louai Khodary</a>.
      </div>
    </>
  );
}

export default App;
