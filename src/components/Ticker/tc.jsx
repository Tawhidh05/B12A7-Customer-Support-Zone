import React from'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle } from '@fortawesome/free-solid-svg-icons';
import { faCalendar } from '@fortawesome/free-regular-svg-icons';



const tc = ({tickets = [], toggleProgress, handleToggle}) => {
    return (
        <>
            {tickets.map((ticket) => (
                <div className='' key={ticket.id} onClick={() => handleToggle(ticket.id, ticket)} >
            <div className="card w-full bg-white text-black card-xs shadow-md lg:card-sm">
            <div className="card-body">
                <div className='flex justify-between '>
                <h2 className="card-title">{ticket.title}</h2>

                {toggleProgress[ticket.id] ?
                  <button  className='bg-[#F8F3B9] text-[#9C7700] p-1 pr-2 pl-2 rounded-2xl'>
                    <FontAwesomeIcon className='text-[#FEBB0C]' icon={faCircle} />In-progress
                  </button>
                  :
                  <button className='bg-[#B9F8CF] text-[#0B5E06] p-1 pr-2 pl-2 rounded-2xl'>
                    <FontAwesomeIcon className='text-[#02A53B]' icon={faCircle} />Open
                  </button>
                }

                </div>
                <p className='text-[#627382]'>{ticket.description}</p>
                <div className="flex items-center gap-2">
                <div className='flex items-center gap-3'>
                <p className='text-xs text-[#627382]'>{ticket.id}</p>
                {/* High Priority */}
                {ticket.priority === "HIGH" && <h5 className='text-[#F83044]'>HIGH PRIORITY</h5>}
                {/* Medium Priority */}
                {ticket.priority === "MEDIUM" && <h5 className='text-[#FEBB0C]'>MEDIUM PRIORITY</h5>}
                {/* Low Priority */}
                {ticket.priority === "LOW" && <h5 className='text-[#02A53B]'>LOW PRIORITY</h5>}
                </div>
                <div className='ml-auto flex items-center gap-3'>
                    <p className='text-sm text-[#627382]'>{ticket.customer}</p>
                    <p className='text-xs text-[#627382]'><FontAwesomeIcon icon={faCalendar} size='xl' />{ticket.createdAt}</p>
                </div>
                </div>
            </div>
            </div>
        </div>
            ))}
        </>
    );
};

export default tc;