
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar';
import ItemListConteiner from './components/ItemListConteiner/ItemListConteiner';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
       <Navbar/>
        <Routes>
          <Route path='/' element = { <ItemListConteiner/> } />
          <Route path='/category/:categoryId' element = { <ItemListConteiner/> } />
          <Route path='/detail/:productId' element = { <ItemDetailContainer/> } />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;
