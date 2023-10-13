import React from "react";


const Footer = () => {
        <div className='bg-dark-gray w-screen md:h-64 absolute flex flex-row'>
            <div className='w-[50%] flex flex-row md:gap-8'>
                <div className='ml-[8%]'>
                    <h2 className='text-pink text-xs md:text-lg mt-6 font-bold'>SUPPORT</h2>
                    <p className='text-white text-xs md:text-lg font-light hover:text-green cursor-pointer mt-2'>Refund</p>
                    <p className='text-white text-xs md:text-lg font-light hover:text-green cursor-pointer mt-2'>Returns</p>
                </div>
                <div className='ml-[8%]'>
                    <h2 className='text-blue text-xs md:text-lg mt-6 font-bold'>FOLLOW US</h2>
                    <p className='text-white text-xs md:text-lg font-light hover:text-green cursor-pointer mt-2'>Meta</p>
                    <p className='text-white text-xs md:text-lg font-light hover:text-green cursor-pointer mt-2'>Instagram</p>
                </div>
            </div>
            <div className='w-[50%]'>
                <h1 className='text-white text-right mr-[5%] mt-[70%] md:mt-[12%] font-integral text-sm md:text-3xl'>Hyper Soar</h1>
            </div>
        </div>
}

export default Footer;