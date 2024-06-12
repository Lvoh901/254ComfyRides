import React from 'react';

function Testimonial({review, userImg, nameReviewer, userLocation}) {
    return (
        <div className='flex flex-col justify-center items-center border border-gray-500 p-3'>
            <i className="fa-solid fa-quote-left text-[#f9a826e6]"></i>

            <p className='text-center py-3'>{review}</p>

            <p className='border-b border-gray-600 w-28'></p>
            <img src={userImg} className='w-16 h-20 rounded-full mt-3' />
            <small className='italic text-center'><strong>{nameReviewer}</strong> <br/> {userLocation}</small>

        </div>
    )
}

export default Testimonial;