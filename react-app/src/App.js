import {Routes,Route} from 'react-router-dom';
import Navbar from "./components/Navbar/Navbar";
import './App.css';
import Home from './components/Pages/Home/Home';
import Galeria from './components/Pages/Galeria/Galeria';
import Producto from './components/Pages/Producto/Producto';
import Contacto from './components/Pages/Contacto/Contacto';
import Card from './components/Cardwidget/Card';

import Coffy from './components/Container/Container';


/* import CoffyContainer from './components/Container/Container'; */



function App() {

  return (
  <div className='container-fluid'>
    <Navbar/>
   <Routes>
      <Route path="/Home" element={<Home/>}></Route>
      <Route path="/Galeria" element={<Galeria/>}></Route>
      <Route path="/Producto" element={<Producto/>}></Route>
      <Route path="/Contacto" element={<Contacto/>}></Route>
    </Routes>

  </div>
    
  );

}


export default App;