import './App.css'
import Home from './components/Home/Home'
import Inputs from "./components/Inputs/Inputs"
import Navbar from "./components/Navbar/Navbar"

function App() {

  return (
    <>
      <div className='main-bg'>
        <Navbar />
        <Home />
      </div>
      <h1 className='h1'>Get Employee Performance</h1>
      <Inputs />
    </>
  )
}

export default App
