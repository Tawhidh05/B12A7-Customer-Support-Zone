import React from 'react';

const RC = ({ resolvedData = [] }) => {
  return (
    <div className='flex flex-col gap-3'>

      {/* Empty State */}
      {resolvedData.length === 0 ? (
        <p className='text-[#627382] items-center'>No resolved tasks yet.</p>
      ) : (

        // Map resolved tickets
        resolvedData.map((ticket) => (
          <div key={ticket.id} className=''>
            <div className="card w-full bg-[#E0E7FF] text-[#001931] shadow-md">
              <div className="card-body p-[18px]">

                <div className='flex justify-between items-center'>
                  <h2 className="card-title font-medium text-[18px]">
                    {ticket.title}
                  </h2>
                  {/* Resolved Badge */}
                  <span className='text-xs bg-green-100 text-green-700 px-2 py-1 rounded-full font-semibold'>
                    ✓ Resolved
                  </span>
                </div>

                <p className='text-sm text-[#627382]'>{ticket.customer}</p>
                <p className='text-xs text-[#627382]'>{ticket.createdAt}</p>

              </div>
            </div>
          </div>
        ))
      )}

    </div>
  );
};

export default RC;