import './App.css';
import { BrowserRouter, Routes, Route} from "react-router-dom";
import Navbar from './Navbar';
import HomePage from './HomePage';
import SecondPage from './SecondPage';
import Footer from './Footer';
import ThirdPage from './ThirdPage';
import Project from './Project';
import Contact from "./Contact";
import AccordionBlocks from './AccordionBlocks';
import OtherPage from './OtherPage';
import ErrorPage from './ErrorPage';
import SettingPage from './SettingPage';
function App() {
  return (
   <BrowserRouter>
   <Navbar/>
     <Routes>
      <Route path='/' element={<HomePage/>}/>
      <Route path='/secondPage' element={<SecondPage/>}/>
      <Route path='/thirdPage' element={<ThirdPage/>}/>
      <Route path='/project' element={<Project/>}/>
      <Route path='/contact' element={<Contact/>}/>
      <Route path='/accordion' element={<AccordionBlocks/>}/>
      <Route path='/otherpage' element={<OtherPage/>}/>
      <Route path='/error' element={<ErrorPage/>}/>
      <Route path='/setting' element={<SettingPage/>}/>
     </Routes>
     <Footer/>
   </BrowserRouter>
  );
}

export default App;
