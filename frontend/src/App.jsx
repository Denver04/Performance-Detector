import './App.css'
import { BrowserRouter , Routes , Route } from 'react-router-dom'
import Hero from './components/Hero/Hero'
import Instruction from './components/Instruction/Instruction'
import Navbar from './components/Navbar/Navbar'

function App() {

  return (
    <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path="/" element={<Hero />} />  
      <Route path="/rules" element={<Instruction />} />
    </Routes>
    </BrowserRouter>
  )
}

export default App
