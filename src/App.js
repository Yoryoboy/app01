import {useState} from 'react'
import './App.css';
import NavBar from './components/navbar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'



function App() {
  const [route, setRoute] = useState({
    path: 'list',
    id: 1
  })





  return (
    <div className="App">
      <NavBar title="E-commerce" routing={setRoute} />
      {route.path === 'list' && <ItemListContainer routing={setRoute}/>}
      {route.path === 'detail' && <ItemDetailContainer id={route.id}/>}


    </div>

  );
}

export default App;
