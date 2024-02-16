import React from 'react';
import sponsorData from '../data/Sponsors';

const Sponsors = () => {
  return (
    <>
    <h1 className='text-center text-white text-5xl'>SPONSORS</h1>
    <div className='text-white flex justify-around p-6 flex-wrap items-center gap-10 mt-5 max-md:gap-8'>
        {sponsorData.map((sponsor, index) => (
          <img
            key={index}
            src={sponsor.img}
            alt={sponsor.alt}
            className="w-32 grayscale hover:grayscale-0 transition duration-300"
          />
        ))}
      </div>
    </>
  )
}

export default Sponsors
