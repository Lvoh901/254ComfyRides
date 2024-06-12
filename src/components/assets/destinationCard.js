import React from 'react';
import scrollToSection from '../assets/ScrollTo';

function DestinationCard({imgSrc, destination, description, travelTime, passengers, parcelService }) {
    return (
        <div>
            <img
                alt=""
                src={imgSrc}
                className="h-64 w-full object-cover sm:h-80 lg:h-96"
            />

            <h3 className="mt-4 text-lg font-bold text-gray-900 sm:text-xl">{destination}</h3>

            <p className="mt-2 max-w-sm text-gray-700">{description}</p>

            <div className='bg-gray-100 p-2 flex flex-col lg:flex-row leading-3 gap-3'>
                <small className=''><strong>Travel Time:</strong> {travelTime}</small>
                <small className=''><strong>Capacity:</strong> {passengers} Passengers</small>
                <small className=''><strong>Parcel:</strong> {parcelService}</small>
            </div>

            <div className='py-2'>
                <button className='bg-blue-700 text-white font-bold px-2 py-1 hover:' onClick={() => scrollToSection('contactForm')}>Book</button>
            </div>
        </div>
    )
}

export default DestinationCard;