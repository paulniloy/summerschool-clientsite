import React from 'react';

const Slidertext = ({ heading, img, info, message }) => {
    return (
        <div className='flex flex-col'>
            <div className='text-3xl font-bold'>
                {heading}
            </div>
            <div className='text-2xl font-medium italic'>
            {info}
            </div>
            <div className='text-xl font-thin italic'>
            {message}
            </div>
        </div>
    );
};

export default Slidertext;