import './App.css'
import Header from './pages/Header'
import Home from './pages/Home'
import Footer from './pages/Footer'
import Sobre from './pages/Sobre'
import Projetos from './pages/Projetos'


function App() {
  return (
    <>
      <Header />
      <Home />
      <Sobre 
        texto="Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde molestias quis assumenda dolorem fuga rem minus cum incidunt corrupti magnam, necessitatibus nostrum? Dolor illo explicabo nisi perferendis quibusdam iusto quia?"
        endereco="https://placehold.co/200"
      />
      <Projetos/>
      <Footer/>
    </>
  )
}

export default App
