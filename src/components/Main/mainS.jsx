import React, { useState } from 'react';
import TC from "../Ticker/tc";
import SC from "../cards/sc";
import RC from "../cards/rc";
import { toast } from 'react-toastify';

const mainS = ({
  ticketsData = [],
  setInProgressData,
  inProgressData = [],
  setResolvedData,
  resolvedData = [],
}) => {

  const [toggleProgress, setToggleProgress] = useState({});
  const [completedData, setCompletedData]  = useState({});
  const [removedTickets, setRemovedTickets] = useState([]); 
  const [isModalOpen, setIsModalOpen]    = useState(false); 

  //  Filter out completed tickets from Customer Tickets list
  const activeTickets = ticketsData.filter(
    (t) => !removedTickets.includes(t.id)
  );

  const handleToggle = (id, ticket) => {
    if (toggleProgress[id]) return;

    setToggleProgress((prev) => ({ ...prev, [id]: !prev[id] }));
    setInProgressData((prev) => [...prev, ticket]);
    toast.warning(` "${ticket.title}" moved to In Progress`);
  };

  const handleComplete = (ticket) => {
    //  mark completed badge on TC card
    setCompletedData((prev) => ({ ...prev, [ticket.id]: true }));

    //  remove from Customer Tickets list after short delay
    setTimeout(() => {
      setRemovedTickets((prev) => [...prev, ticket.id]);
    }, 800);

    setInProgressData((prev) => prev.filter((t) => t.id !== ticket.id));
    setResolvedData((prev) => [...prev, ticket]);
    toast.success(` "${ticket.title}" has been Resolved!`);
  };

  //  Right side panel 
  const RightPanel = () => (
    <>
      <div className="grid grid-cols-1 gap-3 max-w-xl">
        <h3 className="text-2xl font-semibold text-[#34485A] pb-4">
          Task Status
          <span className="ml-2 text-sm bg-yellow-100 text-yellow-700 px-2 py-1 rounded-full">
            {inProgressData.length}
          </span>
        </h3>
        <SC
          inProgressData={inProgressData}
          setInProgressData={setInProgressData}
          setResolvedData={setResolvedData}
          handleComplete={handleComplete}
        />
      </div>

      <div className="grid grid-cols-1 gap-3 max-w-xl pt-6 md:pt-12">
        <h3 className="text-2xl font-semibold text-[#34485A] pb-4">
          Resolved Task
          <span className="ml-2 text-sm bg-green-100 text-green-700 px-2 py-1 rounded-full">
            {resolvedData.length}
          </span>
        </h3>
        <RC resolvedData={resolvedData} />
      </div>
    </>
  );

  return (
    <div className="main max-w-full flex flex-col lg:flex-row">

      {/* Left side */}
      <div className="mainSection max-w-5xl p-6 md:p-12 lg:min-w-5xl">
        <div className="flex justify-between items-center pb-4">
          <h3 className="text-2xl font-semibold text-black">Customer Tickets</h3>

          {/* Mobile only button */}
          <button
            className="lg:hidden flex items-center gap-2 bg-[#632EE3] text-white px-4 py-2 rounded-xl text-sm font-semibold"
            onClick={() => setIsModalOpen(true)}
          >
             Tasks
            {inProgressData.length > 0 && (
              <span className="bg-white text-[#632EE3] text-xs font-bold px-2 py-0.5 rounded-full">
                {inProgressData.length}
              </span>
            )}
          </button>
        </div>

        <section className='ticker grid grid-cols-1 lg:grid-cols-2 gap-4'>
          <TC
            tickets={activeTickets}      
            toggleProgress={toggleProgress}
            handleToggle={handleToggle}
            completedData={completedData}
          />
        </section>
      </div>

      {/* Desktop — Right side panel */}
      <section className="hidden lg:block pb-20 max-w-2xl overflow-y-auto">
        <RightPanel />
      </section>

      {/*  Mobile — Bottom Sheet Modal */}
      {isModalOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-50 flex items-end lg:hidden"
          onClick={() => setIsModalOpen(false)}
        >
          <div
            className="w-full bg-white rounded-t-2xl max-h-[85vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex justify-between items-center p-5 border-b sticky top-0 bg-white z-10">
              <div className="flex gap-4">
                <span className="font-bold text-[#34485A]">
                  Tasks
                </span>
                <span className="text-sm bg-yellow-100 text-yellow-700 px-2 py-1 rounded-full">
                  {inProgressData.length} In Progress
                </span>
                <span className="text-sm bg-green-100 text-green-700 px-2 py-1 rounded-full">
                  {resolvedData.length} Resolved
                </span>
              </div>
              <button
                className="text-gray-400 hover:text-gray-600 text-2xl font-bold"
                onClick={() => setIsModalOpen(false)}
              >
                ✕
              </button>
            </div>

            {/* Modal Content */}
            <div className="p-5">
              <RightPanel />
            </div>
          </div>
        </div>
      )}

    </div>
  );
};

export default mainS;