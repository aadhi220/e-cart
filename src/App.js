
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home'
import Cart from './pages/Cart'
import Wishlist from './pages/Wishlist'
import Header from './components/Header'
import Footer from './components/Footer'


function App() {
  return (
    <div className="App">

      <Header/>
 <div className='mt-5'>
    <Routes >
  
      <Route path="/" element={<Home/>}/>
      <Route path="/cart" element={<Cart/>}/>
      <Route path="/wishlist" element={<Wishlist/>}/>
    </Routes>
    <Footer/>
 </div>
    </div>
  );
}

export default App;
