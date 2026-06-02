import './index.css'
import Navbar from './components/Navbar/navbar'
import Banner from './components/Banner/banner'
import Main from './components/Main/mainS'
import Footer from './components/Footer/footer'




function App() {
  return (
      <>
        <div className="backdrop">
            <div className="">
                <Navbar />
                <Banner />
                <Main/>
                <Footer/>
            </div>
        </div>
     </>
  )
}

export default App
