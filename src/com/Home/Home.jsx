import React, { useEffect } from 'react';
import title from '../../Hooks/title';
import Headings from '../Headings/Headings';
import Slider from '../Slider/Slider';
import banner from "../../assets/banner music.jpg"
import Popclass from '../popclasses/Popclass';
import Popinstructors from '../Popularinstructors/Popinstructors';
import Type from '../Typewriter/Type';
import { Typewriter } from 'react-simple-typewriter';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Home = () => {
    title("Home")
    useEffect(() => {
        AOS.init();
    }, [])
    return (
        <div>
            <div data-aos="fade-left" className="hero min-h-screen bg-base-200 ">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img src="https://wpe.hoffmanacademy.com/wp-content/uploads/2021/06/make-summer-of-music.jpg" className="max-w-sm rounded-lg shadow-2xl" />
                    <div>
                        <h1 className="text-5xl font-bold">   <h1 style={{ paddingTop: '5rem', margin: 'auto 0', fontWeight: 'bold' }}>
                            Welcome to {' '}
                            <span style={{ color: 'green', fontWeight: 'bold' }}>
                                {/* Style will be inherited from the parent element */}
                                <Typewriter
                                    words={['Summer School', 'Learn Music', 'Express Yourself', 'Do Amazing works!']}
                                    loop={Infinity}
                                    cursor
                                    cursorStyle='_'
                                    typeSpeed={70}
                                    deleteSpeed={50}
                                    delaySpeed={4000}
                                />
                            </span>
                        </h1></h1>
                        <p className="py-6 italic font-bold">Welcome to our Music Summer School! We are thrilled to have you join us for an incredible musical journey filled with learning, creativity, and inspiration. Our aim is to provide you with a supportive and enriching environment where you can explore your passion for music and further develop your skills.

                            As you step into our vibrant musical community, you'll be greeted by a diverse group of fellow musicians who share your love for music. Whether you're an aspiring instrumentalist, vocalist, composer, or simply a music enthusiast, our program is designed to cater to all levels of expertise and interests.</p>
                    </div>
                </div>
            </div>
            <Headings data-aos="fade-left" heading={"Pictures"} subheading={"Music Art"}></Headings>
            <Slider></Slider>
            <Headings data-aos="fade-left" heading={"Popular Classes"} subheading={"Instruments"}></Headings>
            <Popclass></Popclass>
            <Headings data-aos="fade-left" heading={"Popular Instructors"} subheading={"Music Category"}></Headings>
            <Popinstructors></Popinstructors>
            <div className='flex justify-center'>
                <div className="stats shadow ">

                    <div className="stat">
                        <div className="stat-figure text-secondary">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                        </div>
                        <div className="stat-title">Downloads</div>
                        <div className="stat-value">31K</div>
                        <div className="stat-desc">Jan 1st - Feb 1st</div>
                    </div>

                    <div className="stat">
                        <div className="stat-figure text-secondary">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"></path></svg>
                        </div>
                        <div className="stat-title">New Users</div>
                        <div className="stat-value">4,200</div>
                        <div className="stat-desc">↗︎ 400 (22%)</div>
                    </div>

                    <div className="stat">
                        <div className="stat-figure text-secondary">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"></path></svg>
                        </div>
                        <div className="stat-title">New Registers</div>
                        <div className="stat-value">1,200</div>
                        <div className="stat-desc">↘︎ 90 (14%)</div>
                    </div>

                </div>
            </div>
            {/* <Headings heading={"Motivations"} subheading={"Motivate Yourself"}></Headings> */}
            <Type></Type>
        </div>
    );
};

export default Home;