import React from 'react';
import Footimg from "/images/image 4.png";
import SocIcons from './SocIcons';
import FootLinks from './FootLinks';



const Footer = () => {
  return (
    <footer className='text-white border-t-2 border-red-600 flex p-6  max-md:gap-10 items-center justify-around flex-wrap'>

      <div className='flex flex-col gap-3'>

        <div>
        <img src={Footimg} alt="footerImage"/>
        <h1 className='text-red-600 text-center mt-[-14px]'>BATTLEBOTS</h1>
        </div>
        <div>
            <SocIcons/>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row w-1/2"> 
         <div className="order-2 sm:order-1 w-full"> 
           <FootLinks/>
         </div>
        <div className="order-1 sm:order-2 w-full"> 
        <FootLinks/>
        </div>
      </div>



    </footer>
  )
}

export default Footer
