import React from 'react';

const Headings = ({ heading, subheading }) => {
    return (
        <div data-aos="fade-left" className='text-center m-10 text-gray-600'>
            <div className='text-4xl font-bold italic'>
                {heading}
            </div>
            <div className='text-2xl italic text-yellow-600'>
                <p>-----  {subheading}  -----</p>
            </div>
        </div>
    );
};

export default Headings;