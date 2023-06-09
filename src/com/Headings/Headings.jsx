import React from 'react';
import { Bounce } from 'react-awesome-reveal';

const Headings = ({ heading, subheading }) => {
    return (
        <Bounce>
            <div className='text-center m-10 text-gray-600'>
                <div className='text-4xl font-bold italic'>
                    {heading}
                </div>
                <div className='text-2xl italic text-yellow-600'>
                    <p>-----  {subheading}  -----</p>
                </div>
            </div>
        </Bounce>
    );
};

export default Headings;