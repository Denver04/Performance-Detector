import './App.css'
import { BrowserRouter , Routes , Route } from 'react-router-dom'
import Hero from './components/Hero/Hero'
import Instruction from './components/Instruction/Instruction'
import Navbar from './components/Navbar/Navbar'
import Name from './Name/Name'
import { sharedContext } from './context/InfoContext'
import React from 'react'

function App() {

  const { information } = React.useContext(sharedContext);
  const name = information.name;

  return (
    // <SharedProvider>
      <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Hero />} />  
        <Route path="/rules" element={<Instruction />} />
        <Route path={`/employee/${name}`} element={<Name />} />
        <Route path="*" element={<h1>404 Not Found</h1>} />
      </Routes>
      </BrowserRouter>
    // </SharedProvider>
  )
}

export default App
