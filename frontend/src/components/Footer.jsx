import React from 'react'
import news1 from '../assets/news_5.jpeg'
import news2 from '../assets/new_6.jpg'
import news3 from '../assets/news_2.webp'
import news4 from '../assets/news_1.webp'

const Footer = () => {
    return (
        <div className='mb-0'>
            <div className='grid grid-cols-4 bg-[#999b7c] rounded-3xl' >
                <div>
                    <img src={news1} alt="" className='rounded-2xl w-80 h-60 px-2 py-2' />
                </div>
                <div>
                    <img src={news2} alt="" className='rounded-2xl w-80 h-60 px-2 py-2' />
                </div>

                <div>
                    <img src={news3} alt="" className='rounded-2xl w-80 h-60 px-2 py-2' />
                </div>
                <div>
                    <img src={news4} alt="" className='rounded-2xl w-80 h-60 px-2 py-2' />
                </div>
            </div>
            <div className='grid grid-cols-3 mt-4'>
                <p>About Us</p>
                <p>Explore More</p>
                <p>Get in Touch</p>

            </div>
        </div>
    )
}

export default Footer
