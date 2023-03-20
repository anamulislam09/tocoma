
import './App.css';
import Home from './components/Home';
import {BrowserRouter, Route, Routes} from "react-router-dom"
import About from './components/About';
import MainTemplate from './components/MainTemplate';
import Contact from './components/Contact';
import Products from './components/Products';
import Brochures from './components/Brochures';
import Careers from './components/Careers';
import Applications from './components/Applications';


function App() {
  return (
    <div className="App">

      <BrowserRouter>
      <Routes>
        <Route path='/' element={<MainTemplate/>}>
          <Route index element={<Home/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/contact' element={<Contact/>}/>
          <Route path='/products' element={<Products/>}/>
          <Route path='/applications' element={<Applications/>}/>
          <Route path='/contact' element={<Contact/>}/>
          <Route path='/brochures' element={<Brochures/>}/>
          <Route path='/careers' element={<Careers/>}/>
          </Route>
      </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
