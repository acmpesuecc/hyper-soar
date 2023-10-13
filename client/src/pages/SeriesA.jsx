import React, { useState, useEffect } from 'react';

import { logo } from '../assets';
import { Link } from 'react-router-dom'
import transition from '../transition.jsx'

const SeriesA = () => {
    const product = { id: 1, name: 'Drone A', description: 'Our flagship drone, designed to operate in the harshest environments.' };

    const [cartCount, setCartCount] = useState(0);

useEffect(() => {
    // Get the cart from localStorage and update the cart count
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    setCartCount(cart.length);
  }, []);

    const addToCart = () => {
      const cart = JSON.parse(localStorage.getItem('cart')) || [];
      cart.push(product);
      localStorage.setItem('cart', JSON.stringify(cart));
        setCartCount(cart.length);
    };

    
  return (
    <div className='md:h-screen'>
        <div className="w-full flex flex-row justify-between mt-[1%]">
            <Link to='/'>
                <img
                    src={logo}
                    className="pl-2 md:pl-8 h-24 object-contain"
                    alt="Logo"
                />
            </Link>
            <div className="relative ml-4">
          <i className="fa fa-shopping-cart fa-2x text-gray-600 cursor-pointer"></i>
          <Link to='/cart'>
            {cartCount > 0 && (
              <span className="absolute -top-2 right-2 bg-slate-500 rounded-full text-white text-xs p-4">
                {cartCount}
              </span>
            )}
          </Link>
        </div>
        </div>
        <div className='h-[91%] justify-center flex flex-col items-center'>
            <div className='h-[70%] w-[95%] flex md:flex-row flex-col'>
                <div className='w-full md:w-[50%]'>
                    <img src='../products/droneA.png' className='w-[90%] object-contain'/>
                </div>
                <div className='w-full md:w-[50%] flex flex-col justify-center items-center'>
                    <p className='text-2xl font-medium text-center w-full'>Our flagship drone, designed to operate in the harshest environments.</p>
                    <div className='flex flex-row mt-[20%] gap-16'>
                        <img src='../categories/obstacle.png' className='w-14 md:w-36'/>
                        <img src='../categories/rtb.png' className='w-14 md:w-36'/>
                        <img src='../categories/maxtime.png' className='w-14 md:w-36'/>
                        
                            <button onClick={addToCart} className='absolute right-12 bottom-36 flex flex-row w-28 pl-3 pt-1 h-10 bg-green text-white'>Add to Cart</button>
                       
                    </div>
                </div>
            </div>
            <div className='h-[30%] w-[95%] bg-dark-gray mb-[2%] md:mt-0 mt-[10%] p-4'>
                <h1 className='text-white font-integral text-8xl md:text-8xl pl-[3%]'>Nike</h1>
                <h2 className='text-green pl-[3%] font-inter mt-6 text-3xl'>Series A</h2>
            </div>
        </div>
    </div>
  )
}

export default transition(SeriesA);