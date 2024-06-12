import React from 'react'
import DestinationCard from './destinationCard';

// destination card images
import Lamu from '../images/lamu.jpg';
import Mlolongo from '../images/mlolongo.jpg';
import Mombasa from '../images/mombasa.jpg';
import Voi from '../images/voi.jpg';
import Nairobi from '../images/nairobi.jpg';
import Taveta from '../images/taveta.jpg';
import Testimonial from './Testimonial';

// user images
import Male from '../images/userMale.jpg';
import Female from '../images/userFemale.jpg';

function Gallery() {
  return (
    <div className='flex flex-col justify-center items-center'>
      <h1 className='text-3xl lg:text-4xl font-bold my-8'>Our Top Destinations</h1>

      <div className='grid grid-cols-2 gap-4 lg:grid-cols-3 lg:gap-8 mt-3 px-8 lg:px-16'>
        <DestinationCard
          imgSrc={Lamu}
          destination='Lamu'
          description=''
          travelTime='Day/Night'
          passengers='9'
          parcelService="Goods/Parcels"
        />

        <DestinationCard
          imgSrc={Mlolongo}
          destination='Mlolongo'
          description=''
          travelTime='Day'
          passengers='9'
          parcelService="Goods/Parcels"
        />

        <DestinationCard
          imgSrc={Mombasa}
          destination='Mombasa'
          description=''
          travelTime='Day'
          passengers='10'
          parcelService="Parcels"
        />

        <DestinationCard
          imgSrc={Voi}
          destination='Voi'
          description=''
          travelTime='Day'
          passengers='11'
          parcelService="Goods/Parcels"
        />

        <DestinationCard
          imgSrc={Nairobi}
          destination='Nairobi'
          description=''
          travelTime='Day/Night'
          passengers='9'
          parcelService="Goods"
        />

        <DestinationCard
          imgSrc={Taveta}
          destination='Taveta'
          description=''
          travelTime='Day'
          passengers='9'
          parcelService="Parcels"
        />
      </div>

      <div className='bg-gray-200 w-full py-8 mt-5'>
        <div className='flex flex-col justify-center items-center'>
          <small className='uppercase'>testimonials</small>
          <h3 className='font-bold text-3xl mb-8'>What our Clients Say</h3>

          <div className="grid grid-cols-2 gap-4 lg:grid-cols-4 lg:gap-8 px-12">
            <Testimonial
              review='This was a great experience and I really enjoyed my journey from Mombasa to Nairobi. Looking forward to a future journey with this amazing team.'
              userImg={Male}
              nameReviewer='Said Mohammed'
              userLocation='Resident, Mombasa'
            />

            <Testimonial
              review='This was a great experience and I really enjoyed my journey from Mombasa to Nairobi. Looking forward to a future journey with this amazing team.'
              userImg={Female}
              nameReviewer='Said Mohammed'
              userLocation='Resident, Mombasa'
            />

            <Testimonial
              review='This was a great experience and I really enjoyed my journey from Mombasa to Nairobi. Looking forward to a future journey with this amazing team.'
              userImg={Male}
              nameReviewer='Said Mohammed'
              userLocation='Resident, Mombasa'
            />

            <Testimonial
              review='This was a great experience and I really enjoyed my journey from Mombasa to Nairobi. Looking forward to a future journey with this amazing team.'
              userImg={Female}
              nameReviewer='Said Mohammed'
              userLocation='Resident, Mombasa'
            />
          </div>

          <div className='py-12 flex flex-col justify-center items-center gap-3'>
            <p className='border-t border-black w-24'></p>
            <p className='font-bold'>Uwezo trips are an Experience to Look forward to</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Gallery;