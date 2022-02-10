import logo from './logo.svg';
import './App.css';
import NavBar from './components/navbar/NavBar';
import ItemListContainer from './components/navbar/ItemListContainer/ItemListContainer';




function App() {
  return (
    <div className="App">
      <NavBar title="Todo-Tecnologia" />
      <ItemListContainer label='HOLA MUNDO'/>
    </div>

  );
}

export default App;
