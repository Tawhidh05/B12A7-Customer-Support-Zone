import './index.css'
import Navbar from './components/Navbar/navbar'
import Banner from './components/Banner/banner'


function App() {
  return (
      <>
        <div className="max-h-screen bg-[#F5F5F5]">
            <div className="">
                <Navbar />
                <Banner />
            </div>
        </div>
     </>
  )
}

export default App
