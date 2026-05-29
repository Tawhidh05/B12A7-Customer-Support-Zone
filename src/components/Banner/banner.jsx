import React from 'react';

const banner = () => {
    return (
        <div className='flex flex-col md:flex-row gap-4 p-6 md:p-16 justify-center items-center'>
            <div className='w-full h-[180px] md:h-[250px] bg-linear-to-r from-[#632EE3] to-[#9F62F2] text-white flex justify-center items-center rounded-lg'>
    
                <div className='text-center'>
                    <h4 className='font-normal text-xl pb-3'>In-Progress</h4>
                    <h3 className='font-bold text-5xl'>0</h3>
                </div>
            </div>
            <div className='w-full h-[180px] md:h-[250px] bg-linear-to-r from-[#54CF68] to-[#00827A] text-white flex justify-center items-center rounded-lg'>
                <div className='text-center'>
                    <h4 className='font-normal text-xl pb-3'>Resolved</h4>
                    <h3 className='font-bold text-5xl'>0</h3>
                </div>
            </div>
        </div>
    );
};

export default banner;