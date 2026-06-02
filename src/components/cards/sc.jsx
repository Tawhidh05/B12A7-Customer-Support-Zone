import React from 'react';

// Note: It is a React best practice to capitalize component names (SC instead of sc)
const SC = () => {
    return (
        <div className="card w-full bg-white text-[#001931] shadow-md">
            <div className="card-body">
                <div className='flex flex-col'>
                    <h2 className="card-title pb-3 font-bold">Login Issues - Can't Access Account </h2>
                    <button className='btn text-[16px] border-none text-white font-semibold shadow-none bg-[#02A53B]'>Complete</button>
                </div>
            </div>
        </div>
    );
};

export default SC;