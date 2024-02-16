import React from 'react';
import { FaTwitter, FaInstagram, FaDiscord } from 'react-icons/fa';


const SocIcons = () => {
  return (
    <div className='flex gap-3'>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                <FaTwitter className='text-2xl hover:text-blue-400 cursor-pointer'/>
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                <FaInstagram className='text-2xl hover:text-pink-500 cursor-pointer'/>
            </a>
            <a href="https://discord.com" target="_blank" rel="noopener noreferrer">
                <FaDiscord className='text-2xl hover:text-blue-500 cursor-pointer'/>
            </a>
        </div>
  )
}

export default SocIcons;
