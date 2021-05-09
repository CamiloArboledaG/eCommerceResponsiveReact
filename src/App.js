import './App.css';
import Navbar from './components/Navbar';
import Product from './components/Product';
import Products from './components/Products';
import ChekoutCard from './components/CheckoutCard';
import CheckoutPage from './components/CheckoutPage';

function App() {
  return (
    <div className="App" >
      <Navbar/>
      <CheckoutPage/>
      {/* <ChekoutCard/> */}
     {/** <Products/> */} 
    {/*<Product/>*/}
    </div>
  );
}

export default App;
