import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import Van1 from '../images/van1.jpg';
import Van2 from '../images/van2.jpg';
import Van3 from '../images/van3.jpg';

function Home() {
    const images = [
        Van1,
        Van2,
        Van3,
    ];

    const scrollToSection = (id) => {
        document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <div className='relative'>
            <Carousel
                autoPlay={true}
                infiniteLoop={true}
                showThumbs={false}
                showStatus={false}
                showIndicators={false}
                showArrows={false}
            >
                {images.map((image, index) => (
                    <div key={index} className="">
                        <img src={image} alt={`Van ${index + 1}`} className="h-full w-full object-cover" />
                    </div>
                ))}
            </Carousel>
            <div className='absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center bg-black bg-opacity-50'>
                <div className='shadow-md p-4 max-w-md text-center bg-white bg-opacity-75'>
                    <h1 className='font-bold text-1xl lg:text-4xl mb-2'>Comfort and Safety Guaranteed</h1>
                    <p className='mb-4'>A travel companion you can trust</p>
                    <button
                        className='bg-blue-500 hover:bg-blue-800 text-white px-4 py-2 rounded text-sm'
                        onClick={() => scrollToSection('about')}
                    >
                        Book a Ticket
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Home;