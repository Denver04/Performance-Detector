import Home from '../Home/Home'
import Inputs from "../Inputs/Inputs"

function Hero() {
  return (
   <>
        <div className='main-bg'>
          <Home />
        </div>
        <h1 className='h1'>Get Employee Performance</h1>
        <Inputs />
   </>
  )
}

export default Hero