import './index.css';
import Navbar from './components/Navbar/navbar';
import Main from './components/Main/mainS';
import Banner from './components/Banner/banner';
import Footer from './components/Footer/footer';
import { useEffect, useState } from 'react';
import { ToastContainer } from 'react-toastify'; 
import 'react-toastify/dist/ReactToastify.css';  


function App() {
  const [ticketData, setTicketData] = useState([]);
  const [inProgressData, setInProgressData] = useState([]);
  const [resolvedData, setResolvedData] = useState([]);

  useEffect(() => {
    fetch('/tickets.json')
      .then((res) => res.json())
      .then((data) => {
        // console.log('Tickets:', data);              
        setTicketData(data);              
      })
      .catch((err) => console.error(' Error:', err));
  }, []);

  return (
    <>
      <div className="backdrop">
        <div className="">
          <Navbar />
          <Banner inProgressData={inProgressData} resolvedData={resolvedData} />
            <Main
            ticketsData={ticketData}
            setInProgressData={setInProgressData}
            inProgressData={inProgressData}
            setResolvedData={setResolvedData}
            resolvedData={resolvedData}
          />
          <Footer />
        </div>
      </div>
        <ToastContainer position="bottom-right" autoClose={2000} />
    </>
  );
}

export default App;