import Home from '../Home/Home'
import Inputs from "../Inputs/Inputs"

function Hero() {

  const getName = (name) => {
    return name;
  }

  return (
   <>
        <div className='main-bg'>
          <Home />
        </div>
        <h1 className='h1'>Get Employee Performance</h1>
        <Inputs getName={getName} />
   </>
  )
}

export default Hero