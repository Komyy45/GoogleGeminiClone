import React, { useContext, useEffect, useRef, useState } from "react";
import assets from "../../assets/assets/assets";
import { Context } from "../../context/context";
import { Loader } from "../Loader";
import { Response } from "./Response";
import { useInView } from "react-intersection-observer";

export const Body = () => {
    const {response , isLoading , callApi , Question  , isCalled} = useContext(Context);
    const {ref , inView } = useInView();

    
    return(
        <div ref={ref} className={`hideScrollbar w-full h-full flex flex-col  items-center justify-between flex-1 overflow-y-scroll transition-all duration-1000 opacity-0 translate-y-5 ${inView ? "slideUp" : ""}`}>
            {   
                isCalled &&  (isLoading  ? <Loader/> : <Response />)         
            }

            { !isCalled && <div className="h-full flex flex-col gap-12 w-full items-center justify-center "> <div className="px-10 w-4/6 flex flex-col  items-start">
                <h2 className="text-xl gradient-text font-semibold relative sm:text-6xl">Hello, Dev.</h2>
                <p className=" text-start text-5xl text font-semibold text-gray-300 ">How can I help you today?</p>
            </div>

                <div className="flex gap-5 flex-wrap justify-center ">
                <div onClick={() => callApi("Suggest beautiful places to see on an upcoming road trip")} className="relative h-[200px] w-52 p-4 bg-slate-100 dark:bg-cardBg hover:bg-slate-200 dark:hover:bg-cardBg/70 rounded-lg cursor-pointer cardUp transition-colors">
                    <p className="w-full text-black/80 dark:text-txt text-start">Suggest beautiful places to see on an upcoming road trip</p>
                    <div className="p-2 bg-white rounded-full absolute bottom-3 right-3 dark:bg-blue-300"><img className="w-7" src={assets.compass_icon} alt="" /></div>
                </div>
                
                <div onClick={() => callApi("Briefly summarize this concept: urban planning")} className="relative h-[200px] w-52 p-4 bg-slate-100 dark:bg-cardBg hover:bg-slate-200 dark:hover:bg-cardBg/70 rounded-lg cursor-pointer cardUp transition-colors">
                    <p className="w-full text-black/80 dark:text-txt text-start">Briefly summarize this concept: urban planning</p>
                    <div className="p-2 bg-white rounded-full absolute bottom-3 right-3 dark:bg-blue-300"><img className="w-7" src={assets.bulb_icon} alt="" /></div>
                </div>

                <div onClick={() => callApi("Brainstorm team bonding activities for our work retreat")} className="relative h-[200px] w-52 p-4 bg-slate-100 dark:bg-cardBg hover:bg-slate-200 dark:hover:bg-cardBg/70 rounded-lg cursor-pointer cardUp transition-colors">
                    <p className="w-full text-black/80 dark:text-txt text-start">Brainstorm team bonding activities for our work retreat</p>
                    <div className="p-2 bg-white rounded-full absolute bottom-3 right-3 dark:bg-blue-300"><img className="w-7" src={assets.message_icon} alt="" /></div>
                </div>

                <div onClick={() => callApi("Tell me about React js and React native")} className="relative h-[200px] w-52 p-4 bg-slate-100 dark:bg-cardBg hover:bg-slate-200 dark:hover:bg-cardBg/70 rounded-lg cursor-pointer cardUp transition-colors">
                    <p className="w-full text-black/80 dark:text-txt text-start">Tell me about React js and React native</p>
                    <div className="p-2 bg-white rounded-full absolute bottom-3 right-3 dark:bg-blue-300"><img className="w-7" src={assets.code_icon} alt="" /></div>
                </div>

            </div> </div>}


        </div>
    );
}