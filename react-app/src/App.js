import {Routes,Route} from 'react-router-dom';
import Navbar from "./components/Navbar/Navbar";
import './App.css';
import Home from './components/Pages/Home/Home';
import Galeria from './components/Pages/Galeria/Galeria';
import Producto from './components/Pages/Producto/Producto';
import Contacto from './components/Pages/Contacto/Contacto';
import Detail from './components/Detail/Detail'

import NotFound from './components/Pages/NotFound';

function App() {

  return (
    
  <div className='container-fluid'>
    <Navbar/>
    <Routes>
    
      
      <Route path="/galeria" element={<Galeria/>}></Route>
      <Route path="/producto" element={<Producto/>}></Route>
      <Route path="/contacto" element={<Contacto/>}></Route>
      <Route path="/home" element={<Home/>}></Route>
      <Route path="/coffy/:id" exact element={<Detail/>}></Route>
      
      <Route path="*" element={<NotFound/>}></Route>
    
      
    </Routes>

  </div>
    
  );

}


export default App;