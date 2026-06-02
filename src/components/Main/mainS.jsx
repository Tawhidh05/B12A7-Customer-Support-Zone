import React from 'react';
import TC from "../Ticker/tc"
import SC from "../cards/sc"
import RC from "../cards/rc"

const mainS = () => {
    return (
        <div className="main max-w-full flex flex-col lg:flex-row">
            {/* Left side */}
            <div className="mainSection max-w-5xl p-6 md:p-12">
                <h3 className="text-2xl font-semibold text-black pb-4">Customer Tickets</h3>
                <section className='ticker grid grid-cols-1 lg:grid-cols-2 gap-4'>
                    <TC/>
                    <TC/>
                    <TC/>
                    <TC/>
                    <TC/>
                    <TC/>
                    <TC/>
                    <TC/>

                </section>
            </div>
            {/* Right side */}
            <section className="">
                <div className="grid grid-cols-1 gap-3 max-w-xl">
                    <h3 className="text-2xl font-semibold text-[#34485A] pb-4 mx-auto lg:mx-0">Task Status</h3>
                    {/* <h4 className="text-lg font-regular text-[#627382] mx-auto lg:mx-0">Select a ticket add to task</h4> */}
                    <SC/>
                    <SC/>
                    <SC/>

                </div>
                <div className="grid grid-cols-1 gap-3 max-w-xl pt-6 md:pt-12">
                    <h3 className="text-2xl font-semibold text-[#34485A] pb-4 mx-auto lg:mx-0">Resolved Task</h3>
                    {/* <h4 className="text-lg font-regular text-[#627382] mx-auto lg:mx-0">No resolved tasks yet.</h4> */}
                    <RC/>
                </div>
            </section>
        </div>
    );
};

export default mainS;