"use client"
import React, { useState } from "react";

import "../app/globals.css";
import { data } from '@/public/data';
const Card = () => {
    const [slide, setSlide] = useState(0);

    const nextSlide = () => {
        setSlide(slide === data.length - 1 ? 0 : slide + 1);
    };

    // const prevSlide = () => {
    //     setSlide(slide === 0 ? data.length - 1 : slide - 1);
    // };

    console.log(data)
    return (

        <div>

            <div className=' h-[400px] w-[503px]  m-auto mt-44 f'>
                {data.map((item, id) => {
                    return (
                        <>
                            <div className={slide === id ? "slide" : "slide slide-hidden"}>
                                <div className='flex justify-center   '>
                                    <img className='h-20 w-20 bg-purple-800 rounded-full backdrop-blur-3xl	 ' src={item.img} />
                                </div>
                                <div className='flex-col justify-center mt-20'>
                                    <h1 className='text-center font-bold text-3xl  '>{item.title}</h1>
                                    <p className=' text-center p-7 font-normal text-lg'  >
                                        {item.description}
                                    </p>
                                    <div className='flex items-center justify-between p-5 '>
                                        <span className="indicators">
                                            {data.map((_, id) => {
                                                return (
                                                    <button
                                                        key={id}
                                                        className={
                                                            slide === id ? "indicator" : "indicator indicator-inactive"
                                                        }
                                                        onClick={() => setSlide(id)}
                                                    ></button>
                                                );
                                            })}
                                        </span>
                                        <span className='text-purple-800 cursor-pointer' onClick={nextSlide}>Next</span>
                                    </div >
                                </div>
                            </div>
                        </>
                    )

                })}





            </div>
        </div>

    )
}

export default Card