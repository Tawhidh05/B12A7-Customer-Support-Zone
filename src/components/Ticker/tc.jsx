import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle } from '@fortawesome/free-solid-svg-icons';
import { faCalendar } from '@fortawesome/free-regular-svg-icons';

const tc = () => {
    return (
        <div className=''>
            <div className="card w-full bg-white text-black card-xs shadow-md lg:card-sm">
            <div className="card-body">
                <div className='flex justify-between pr-2'>
                <h2 className="card-title">Login Issues - Can't Access Account</h2>
                <button className='green p-1 pr-2 pl-2 rounded-2xl'><FontAwesomeIcon icon={faCircle} />Status</button>
                </div>
                <p className='text-[#627382]'>Customer is unable to log in to their account. They've tried resetting their password multiple times but still...</p>
                <div className="flex items-center gap-2">
                <div className='flex items-center gap-3'>
                <p className='text-xs text-[#627382]'>#0001</p>
                <h5 className='text-[#F83044]'>HIGH PRIORITY</h5>
                </div>
                <div className='ml-auto flex items-center gap-3'>
                    <p className='text-sm text-[#627382]'>John Smith</p>
                    <p className='text-xs text-[#627382]'><FontAwesomeIcon icon={faCalendar} size='xl' />1/15/2024</p>
                </div>
                </div>
            </div>
            </div>
        </div>
    );
};

export default tc;