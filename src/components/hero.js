import React from 'react';
import scrollToSection from './assets/ScrollTo';
import About from './assets/About';
import Gallery from './assets/Gallery';
import Footer from './assets/Footer';
import Home from './assets/Home';

function Hero() {
    return (
        <div>
            {/* Navigation */}
            <section id='home'>
                <div className='px-4 lg:px-8 py-4 bg-[#081446] text-gray-300 fixed w-full z-50'>
                    <div className='flex flex-col md:flex-row justify-between items-center'>
                        <p className='text-center text-sm font-bold'>Reach Us on: +254-712-345-678</p>

                        <div className='flex gap-2 mt-2 md:mt-0'>
                            <button
                                className='bg-blue-500 hover:bg-blue-800 text-white px-2 py-1 rounded text-sm'
                                onClick={() => scrollToSection('gallery')}
                            >
                                Book a Ticket
                            </button>

                            <button
                                className='bg-blue-500 hover:bg-blue-800 text-white px-2 py-1 rounded text-sm'
                                onClick={() => scrollToSection('gallery')}
                            >
                                Parcel Services
                            </button>
                        </div>
                    </div>

                    <div className='flex gap-4 lg:gap-12 border-t pt-2 mt-2'>
                        <button className='btn hover:underline lg:text-2xl' onClick={() => scrollToSection('home')}>Home</button>
                        <button className='btn hover:underline lg:text-2xl' onClick={() => scrollToSection('about')}>About Us</button>
                        <button className='btn hover:underline lg:text-2xl' onClick={() => scrollToSection('gallery')}>Our Fleet</button>
                    </div>
                </div>

                <div className='shadow-xl pt-24'>
                    <div className='flex flex-col items-center gap-2 pt-12 pb-4 px-4 lg:px-12 bg-[#F0EDEE]'>
                        <h1 className='text-2xl lg:text-3xl font-bold uppercase text-center leading-6'>Uwezo Shuttle</h1>

                        <div className='flex gap-12'>
                            <p className='flex gap-2 justify-center items-center text-center font-bold text-sm'>
                                <i className="fa-solid fa-location-dot lg:fa-2x "></i>
                                Mikindani Street, Mombasa
                            </p>
                            <p className='flex gap-2 justify-center items-center text-center font-bold text-sm'>
                                <i className="fa-regular fa-clock lg:fa-2x"></i>
                                Monday - Sunday 24/7
                            </p>
                        </div>
                    </div>
                </div>

                <Home />
            </section>

            {/* About */}
            <section id='about' className=''>
                <About />
            </section>

            {/* Fleet */}
            <section id='gallery' className=''>
                <Gallery />
            </section>

            {/* Footer */}
            <section id='footer'>
                <Footer />
            </section>
        </div>
    );
}

export default Hero;