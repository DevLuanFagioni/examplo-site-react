import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './pages/Home'
import Sobre from './pages/Sobre'
import Projetos from './pages/Projetos'
import Header from './components/Header'
import Footer from './components/Footer'

function App() {
  return (
    <>
     <Router>
       <Header/>
        <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/sobre' element={<Sobre/>} />
            <Route path='/projetos' element={<Projetos/>} />
        </Routes>
        <Footer/>
     </Router>
    </>
  )
}

export default App
