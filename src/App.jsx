import './index.css'
import Navbar from './components/Navbar/navbar'
import Banner from './components/Banner/banner'
import Main from './components/Main/mainS'
import TC from './components/Ticker/tc'



function App() {
  return (
      <>
        <div className="backdrop">
            <div className="">
                <Navbar />
                <Banner />
                <Main/>
            </div>
        </div>
     </>
  )
}

export default App
