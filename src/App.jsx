
import './App.css'
import About from './components/About'
import Blogs from './components/Blogs'
import MyFooter from './components/Footer/MyFooter'
import Home from './components/Home'
import Navbar from './components/Navbar'
import Products from './components/Products'
import Services from './components/Services'

function App() {


  return (
    <>
      <Navbar />
      <Home />
      <Services />
      <About />
      <Products />
      <Blogs />
      <MyFooter />
    </>
  )
}

export default App
