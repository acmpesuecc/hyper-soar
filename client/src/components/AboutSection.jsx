import React from 'react'
import Card from './Card.jsx'
import Footer from './Footer.jsx';

const AboutSection = () => {
    const imageData = [
        {
            label: "Alex Turner",
            alt: "alex turner",
            url:
                "https://ca-times.brightspotcdn.com/dims4/default/e304200/2147483647/strip/false/crop/2045x1150+0+0/resize/1486x836!/quality/80/?url=https%3A%2F%2Fcalifornia-times-brightspot.s3.amazonaws.com%2F8d%2Fc3%2Fef134648d292b8e44680629c0312%2Fla-1525446840-jgf27g71ed-snap-image"
        },
        {
            label: "Emily Chen",
            alt: "emily chen",
            url:
                "https://sinsi.princeton.edu/sites/g/files/toruqf2066/files/styles/3x4_750w_1000h/public/people/chen_emily_edit.jpg?itok=iWd2_Wx3"
        },
        {
            label: "Neil Melendez",
            alt: "neil melendez",
            url: "https://moneyinc.com/wp-content/uploads/2018/11/Willow-750x500.jpg"
        }
    ];
    return (
        <div className='flex bg-green max-w-screen'>
            <div className='md:h-screen max-w-40 ' id='about_us'>
                <div className='w-[95%] md:w-[95%] pl-[5%] pt-[5%] md:pt-[2%] md:h-[80%]'>
                    <h1 className='font-bold font-integral text-4xl md:text-6xl mb-6'>
                        About Us
                    </h1>
                    <hr/>
                    <div>
                        <br/>
                        <br/>
                    </div>
                    <p className='mt-8 font-weight-600 text-3xl pb-6'>
                    Here at <b className='text-3xl'>Hyper Soar</b>, our skilled team is dedicated to creating modern and high-performance drones that will <b className='text-3xl'>elevate</b> your aerial experience.</p>
                </div>
            </div>
            <div className='max-w-60'>
                
            </div>
        </div>
    )
}

                export default AboutSection