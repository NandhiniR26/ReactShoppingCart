import Header from './components/Header';

import './App.css';

import ProductList from './components/ProductList';
import CartList from './components/CartList';
import {useState} from 'react';
import Footer from './components/Footer';

function App ()  {

  const [product, setProduct] = useState([
    {
      url: 'https://5.imimg.com/data5/KC/PC/MY-38629861/dummy-chronograph-watch-500x500.jpg',
      name: 'LOREM Watch Black',
      category: 'Watches',
      seller: 'Watch Ltd Siyana',
      price: 2599
    },
    
   
    {
      url: 'https://5.imimg.com/data5/KC/PC/MY-38629861/dummy-chronograph-watch-500x500.jpg',
      name: 'LOREM Watch Black',
      category: 'Watches',
      seller: 'Watch Ltd Siyana',
      price: 2599
    },
    {
      url: 'https://5.imimg.com/data5/KC/PC/MY-38629861/dummy-chronograph-watch-500x500.jpg',
      name: 'LOREM Watch Black',
      category: 'Watches',
      seller: 'Watch Ltd Siyana',
      price: 2599
    },
    {
      url: 'https://5.imimg.com/data5/KC/PC/MY-38629861/dummy-chronograph-watch-500x500.jpg',
      name: 'LOREM Watch Black',
      category: 'Watches',
      seller: 'Watch Ltd Siyana',
      price: 2599
    },
    {
      url: 'https://5.imimg.com/data5/KC/PC/MY-38629861/dummy-chronograph-watch-500x500.jpg',
      name: 'LOREM Watch Black',
      category: 'Watches',
      seller: 'Watch Ltd Siyana',
      price: 2599
    },
    {
      url: 'https://5.imimg.com/data5/KC/PC/MY-38629861/dummy-chronograph-watch-500x500.jpg',
      name: 'LOREM Watch Black',
      category: 'Watches',
      seller: 'Watch Ltd Siyana',
      price: 2599
    },
  ])

  const [cart,setCart] = useState([])
  const [showCart, setShowCart]=useState(false)
  

  const addToCart =(data)=>{
    
setCart([...cart,{...data,quantity:1}])
  }
  const handleShow = (value)=>{
setShowCart(value)
  }

  return (
    <div>
      <Header count= {cart.length} 
      handleShow={handleShow}> </Header> 
      
       {
        showCart ?
      <CartList cart = {cart}></CartList> :
      <ProductList product = {product} addToCart={addToCart}></ProductList>
      }
    </div>
  );
}

export default App;
