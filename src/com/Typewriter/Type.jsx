import React from 'react';
import { Typewriter } from 'react-simple-typewriter';

const Type = () => {
    
    // const handleType = (count: number) => {
    //     // access word count number
    //     console.log(count)}

    
    //   const handleDone = () => {
    //     console.log(`Done after 5 loops!`)
    //   }


    return (
        <div data-aos="fade-up" className='text-4xl p-10 text-center font-bold '>
           <h1 style={{ paddingTop: '5rem', margin: 'auto 0', fontWeight: 'normal' }}>
        Life is simple just do{' '}
        <span style={{ color: 'red', fontWeight: 'bold' }}>
          {/* Style will be inherited from the parent element */}
          <Typewriter
            words={['Eat', 'Sleep', 'Learn', 'Repeat!']}
            loop={Infinity}
            cursor
            cursorStyle='_'
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={4000}
          />
        </span>
      </h1>
        </div>
    );
};

export default Type;