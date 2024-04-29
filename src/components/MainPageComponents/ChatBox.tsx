import React from "react";
import { useState } from "react";
import { useContext } from "react";
import assets from "../../assets/assets/assets";
import { Context } from "../../context/context";
import "../../styles/chatBox.css"
import 'boxicons'

export const ChatBox = () => {
    const {callApi} = useContext(Context);
    const [yourQuestion , setYourQuestion] = useState<string>("");

    return(
        <div className="w-[80%] sm:w-[70%] flex flex-col justify-center items-center">
            <div className="w-1/2 rounded-full bg-gray-100 flex flex-row p-3 px-5 animateWidth dark:bg-cardBg">
                
                <input className={`h-10 placeholder-slate-500 dark:placeholder-txt  focus:outline-none bg-slate-100 w-11/12 text-lg mr-4
                    dark:bg-cardBg dark:text-txt transition0_3s  focus:placeholder:transition-opacity focus:placeholder:opacity-0  ${!yourQuestion.length ? "w-11/12": "w-full"}`}
                type="text" onChange={(e) => setYourQuestion(e.target.value)} placeholder="Enter a prompt here"/>
                
                <div className="flex gap-3 ">
                    <button className="border-none w-6 flex items-center"> <i className='bx bx-image-add text-2xl dark:text-txt' ></i> </button>
                    <button className="border-none w-6 flex items-center">  <i className='bx bx-microphone text-2xl dark:text-txt' ></i>  </button>
                    {yourQuestion.length > 0 && <button onClick={() => callApi(yourQuestion)} className="flex items-center border-none w-6"> <i className='bx bxs-send text-xl dark:text-txt'></i> </button>}
                
                </div>
            </div>
            <p className="text-xs my-3 dark:text-txt">Gemini may display inaccurate info, including about people, so double-check its responses. Your privacy and Gemini Apps</p>
        </div>
    );
}