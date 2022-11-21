// import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import ItemListConteiner from './components/ItemListConteiner/ItemListConteiner';


function App() {
  return (
    <div className="App">
      <Navbar/>
      <ItemListConteiner greeting = 'Bienvenido a Visual Comp'/>
      
    </div>
  );
}

export default App;
