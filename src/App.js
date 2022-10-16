import './App.css';
//import Assignment from './components/Assignment';
import { About } from './components/CurrentNewsApp/About';
import Contact from './components/CurrentNewsApp/Contact';
import { Headline } from './components/CurrentNewsApp/Headline';
import { Home } from './components/CurrentNewsApp/Home';

function App() {
  return (
   <>
   {/* <Assignment/> */}
   <Headline/>
   <Home/>
   <About/>
   <Contact/>
   </>
  );
}

export default App;
