import React from 'react';

const SC = ({ inProgressData = [], handleComplete }) => { 
  return (
    <div className='flex flex-col gap-3'>
      {inProgressData.length === 0 ? (
        <p className='text-[#627382]'>No tasks in progress yet.</p>
      ) : (
        inProgressData.map((ticket) => (
          <div key={ticket.id} className="card w-full bg-white text-[#001931] shadow-md">
            <div className="card-body">
              <div className='flex flex-col'>
                <h2 className="card-title pb-3 font-bold">{ticket.title}</h2>
                <p className='text-sm text-[#627382] pb-3'>{ticket.customer}</p>
                <button
                  onClick={() => handleComplete(ticket)}  // 
                  className='btn text-[16px] border-none text-white font-semibold shadow-none bg-[#02A53B]'
                >
                  Complete
                </button>
              </div>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default SC;