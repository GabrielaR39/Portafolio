import Contact from "./components/contact/Contact";
import Nav from './components/nav/Nav';
import Hero from "./components/hero/Hero";
import Who from "./components/who/Who";
import Works from "./components/works/Works";
import css from './app.module.css'


function App() {
  return (
    <div className={css.app}>
       {/* <Nav/> */}
       <Hero/>
       {/* <Who/> */}
       <Works/>
       <Contact/>

    </div>

  );
}

export default App;