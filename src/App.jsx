import './App.css'
import 'flowbite'
import { Outlet } from 'react-router-dom'
import Footer from './components/footer/Footer'
import Header from './components/header/Header'

function App() {

  return (
    <>
      <Header></Header>
      <Outlet></Outlet>
      <Footer></Footer>
    </>
  )
}

export default App
