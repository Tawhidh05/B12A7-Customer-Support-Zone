import React, { useState } from 'react'
import TC from "../Ticker/tc";
import SC from "../cards/sc";
import RC from "../cards/rc";
import { toast } from 'react-toastify'; 

const mainS = ({
  ticketsData    = [], 
  setInProgressData,
  inProgressData = [], 
  setResolvedData,
  resolvedData   = [],  
}) => {

const [toggleProgress, setToggleProgress] = useState({});
const [completedData,  setCompletedData]  = useState({}); 

  const handleToggle = (id, ticket) => {
    if (toggleProgress[id]) return; // prevent re-click

    setToggleProgress((prev) => ({
      ...prev,
      [id]: !prev[id]
    }));

    setInProgressData((prev) => [...prev, ticket]);
    toast.warning(`"${ticket.title}" moved to In Progress`);
  };

    const handleComplete = (ticket) => {
    // mark as completed in TC card
    setCompletedData((prev) => ({
      ...prev,
      [ticket.id]: true 
    }));

    setInProgressData((prev) => prev.filter((t) => t.id !== ticket.id));
    setResolvedData((prev) => [...prev, ticket]);
    toast.success(`"${ticket.title}" has been Resolved!`);
}

    return ( 
        <div className="main max-w-full flex flex-col lg:flex-row">
            {/* Left side */}
            <div className="mainSection max-w-5xl p-6 md:p-12">
                <h3 className="text-2xl font-semibold text-black pb-4">Customer Tickets</h3>
                <section className='ticker grid grid-cols-1 lg:grid-cols-2 gap-4'>
                        <TC
                        tickets={ticketsData}
                        toggleProgress={toggleProgress}
                        handleToggle={handleToggle}
                        inProgressData={inProgressData}
                        completedData={completedData}  
                        />                
                </section>
            </div>
            {/* Right side */}
            <section  className="pb-20 max-w-2xl overflow-y-auto mx-auto md:mx-auto lg:mx-0">
                <div className="grid grid-cols-1 gap-3 max-w-xl">
                    <h3 className="text-2xl font-semibold text-[#34485A] pb-4 mx-auto lg:mx-0">Task Status</h3>
                    {/* <h4 className="text-lg font-regular text-[#627382] mx-auto lg:mx-0">Select a ticket add to task</h4> */}
                    <SC
                    tickets={ticketsData}
                    inProgressData={inProgressData} 
                    setResolvedData={setResolvedData}
                    setInProgressData={setInProgressData} 
                    handleComplete={handleComplete}
                    />

                </div>
                <div className="grid grid-cols-1 gap-3 max-w-xl pt-6 md:pt-12">
                    <h3 className="text-2xl font-semibold text-[#34485A] pb-4 mx-auto lg:mx-0">Resolved Task</h3>
                    {/* <h4 className="text-lg font-regular text-[#627382] mx-auto lg:mx-0">No resolved tasks yet.</h4> */}
                    <RC resolvedData={resolvedData} />
                </div>
            </section>
        </div>
    );
};

export default mainS;