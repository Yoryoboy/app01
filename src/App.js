import {useState} from 'react'
import './App.css';
import NavBar from './components/navbar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';




function App() {




  return (
    <div className="App">
      <NavBar title="E-commerce" />
      {/* <ItemListContainer label='HOLA MUNDO'/> */}
      <ItemListContainer /> 

    </div>

  );
}

export default App;
