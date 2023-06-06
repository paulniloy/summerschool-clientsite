import React from 'react';
import title from '../../Hooks/title';
import Headings from '../Headings/Headings';
import Slider from '../Slider/Slider';
import banner from "../../assets/banner music.jpg"
import Popclass from '../popclasses/Popclass';

const Home = () => {
    title("Home")
    return (
        <div>
            <div className="hero min-h-screen" style={{ backgroundImage: `url(https://wpe.hoffmanacademy.com/wp-content/uploads/2021/06/make-summer-of-music.jpg)` }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="">
                        <h1 className="mb-5 text-6xl font-bold text-gray-100">Welcome</h1>
                        <p className=" text-xl italic font-bold text-gray-400">Welcome to our Music Summer School! We are thrilled to have you join us for an incredible musical journey filled with learning, creativity, and inspiration. Our aim is to provide you with a supportive and enriching environment where you can explore your passion for music and further develop your skills.

                            As you step into our vibrant musical community, you'll be greeted by a diverse group of fellow musicians who share your love for music. Whether you're an aspiring instrumentalist, vocalist, composer, or simply a music enthusiast, our program is designed to cater to all levels of expertise and interests.</p>
                    </div>
                </div>
            </div>
            <Headings heading={"Pictures"} subheading={"Music Art"}></Headings>
            <Slider></Slider>
            <Headings heading={"Popular Classes"} subheading={"Instruments"}></Headings>
            <Popclass></Popclass>
            <Headings heading={"Popular Instructors"} subheading={"Music Category"}></Headings>
        </div>
    );
};

export default Home;