import React from 'react'
import news1 from '../assets/news_5.jpeg'
import news2 from '../assets/new_6.jpg'
import news3 from '../assets/news_2.webp'
import news4 from '../assets/news_1.webp'

const Footer = () => {
    return (
        <div className="mb-0">
            <div className="group grid grid-cols-4 bg-[#999b7c] rounded-3xl gap-4 p-4">
                {[
                    {
                        img: news1,
                        title: "UI/UX Design",
                        desc: "Creating intuitive interfaces that enhance user experience.",
                    },
                    {
                        img: news2,
                        title: "Frontend Development",
                        desc: "Building responsive websites using modern JavaScript frameworks.",
                    },
                    {
                        img: news3,
                        title: "Backend Development",
                        desc: "Implementing scalable server-side logic and APIs.",
                    },
                    {
                        img: news4,
                        title: "DevOps & Deployment",
                        desc: "Automating workflows and deploying applications efficiently.",
                    },
                ].map((item, index) => (
                    <div
                        key={index}
                        className="relative w-80 h-52 rounded-2xl overflow-hidden shadow-lg"
                    >
                        <img
                            src={item.img}
                            alt={item.title}
                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition duration-500"></div>
                        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 text-white space-y-3 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                            <h2 className="text-2xl font-bold">{item.title}</h2>
                            <p className="text-sm">{item.desc}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Footer
