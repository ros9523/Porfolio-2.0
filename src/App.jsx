import './App.css'
import Aboutme from './components/Aboutme'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Home from './components/Home'
import Nav from './components/Nav'
import Work from './components/Work'


function App() {


  return (
    <div className="App" >
    <Nav/>
    <Home/>
    <Aboutme/>
    <Work/>
    <Contact/>
    <Footer/>
    </div> 

  )
}

export default App
