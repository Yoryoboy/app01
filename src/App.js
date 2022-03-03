// import './App.css';
import NavBar from './components/navbar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'
import Cart from './components/Cart/Cart';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { CartContextProvider } from './context/CartContext';



const App = () => {

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('submit')
  }
 


  return (
    <div className="App">
      <CartContextProvider>
      <BrowserRouter>
        <NavBar />
        <Routes>
         <Route path='/' element={<ItemListContainer/>}/>
         <Route path='/category/:categoryId' element={<ItemListContainer/>}/>
         <Route path='/detail/:productId' element={<ItemDetailContainer/>}/>
         <Route path='/cart' element={<Cart/>}/>
        </Routes>
      </BrowserRouter>
      </CartContextProvider>
  
    </div>
  );
}

export default App;
