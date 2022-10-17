import { Route, Routes } from 'react-router-dom';
import './App.css';
//import Assignment from './components/Assignment';
import { About } from './components/CurrentNewsApp/About';
import Contact from './components/CurrentNewsApp/Contact';
import ErrorPage from './components/CurrentNewsApp/ErrorPage';
import { Footer } from './components/CurrentNewsApp/Footer';
import { Header } from './components/CurrentNewsApp/Header';
import { Headline } from './components/CurrentNewsApp/Headline';
import { Home } from './components/CurrentNewsApp/Home';
import Login from './components/CurrentNewsApp/LoginForm/Login';

export function App() {
  return (
   <>
   {/* <Assignment/> */}

   <Header/>
   <Routes>
    <Route path="/" element={<Headline/>}/>
    <Route path="/Home" element={ <Home/>}/>
    <Route path="/About" element={<About/>}/>
    <Route path="/Contact" element={<Contact/>}/>
    <Route path="/Login" element={<Login/>}/>
    
    <Route path="*" element={ <ErrorPage/>}/>
   </Routes>
   <Footer/>
   </>
  );
}

// export default App;
