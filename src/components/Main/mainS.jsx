import React from 'react';
import TC from "../Ticker/tc"

const mainS = () => {
    return (
        <div>
            {/* Left side */}
            <div className="mainSection  p-6 md:p-16">
                <h3 className="text-2xl font-semibold text-black">Customer Tickets</h3>
                <section className='ticker grid grid-cols-2 md:grid-cols-1 gap-4'>
                    <TC/>
                </section>
            </div>
        </div>
    );
};

export default mainS;