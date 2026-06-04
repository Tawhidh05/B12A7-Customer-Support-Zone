import './index.css';
import Navbar from './components/Navbar/navbar';
import Main from './components/Main/mainS';
import Banner from './components/Banner/banner';
import Footer from './components/Footer/footer';
import { useEffect, useState } from 'react';

function App() {
  const [ticketData, setTicketData] = useState([]);

  useEffect(() => {
    fetch('/tickets.json')
      .then((res) => res.json())
      .then((data) => {
        // console.log('✅ Tickets:', data);              
        setTicketData(data);              
      })
      .catch((err) => console.error(' Error:', err));
  }, []);

  return (
    <>
      <div className="backdrop">
        <div className="">
          <Navbar />
          <Banner />
          {/* <Suspense fallback={<div className='text-center py-10'>loading...</div>}> */}
            <Main ticketsData={ticketData} />
          {/* </Suspense> */}
          <Footer />
        </div>
      </div>
    </>
  );
}

export default App;