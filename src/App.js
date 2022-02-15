import {useState} from 'react'
import './App.css';
import NavBar from './components/navbar/NavBar';
import ItemCount from './components/ItemCount/ItemCount';
import ItemListContainer from './components/navbar/ItemListContainer/ItemListContainer';




function App() {




  return (
    <div className="App">
      <NavBar title="Todo-Tecnologia" />
      {/* <ItemListContainer label='HOLA MUNDO'/> */}
      <ItemCount stock="5" initial="1" /> 

    </div>

  );
}

export default App;
