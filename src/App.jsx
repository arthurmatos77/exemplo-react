
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import List from './components/List'
import Home from './pages/Home'
import SignUp from './pages/SignUp'
import About from './pages/About'
function App() {

  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/signup' element={<SignUp />} />
      </Routes>
      <Footer />
    </>
  )

}

export default App
