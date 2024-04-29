import React, { useContext, useState } from "react";
import assets from "../assets/assets/assets";
import { Context } from "../context/context";
import { Context as FirebaseContext } from "../context/firebaseAuthContext";
import { Navigate } from "react-router";


export const Sidebar = () => {
    const {Questions , callApi , setIsCalled , resetQuestionHistory} = useContext(Context);
    const { logOut , currentUser } = useContext(FirebaseContext);
    const [toggle , setToggle] = useState(false);
    const logOutHandler = () => {
        setIsCalled(false);
        resetQuestionHistory();
        logOut();
    }
    return(
        <div className={`${toggle ? 'w-[275px]' : 'w-[75px]'} 
        justify-between flex flex-col items-start gap-5 dark:text-txt bg-slate-100 py-[38px] px-4 transition0_3s dark:bg-cardBg`}
        >       
            <div className="flex flex-col gap-10">
                    <button className="w-6 ml-2" onClick={() => setToggle(!toggle)}>
                        <i className='bx bx-menu text-2xl text-black dark:text-txt'></i>
                    </button>
                    <button className={`${ toggle ? "w-[122px]": "w-[50px]"} ml-[-5px] dark:bg-[#1A1A1C] dark:text-gray-[#5D6365] transition0_3s flex gap-3 justify-center items-center bg-slate-200 p-2 bg-opacity-75 text-gray-500 rounded-full text-sm`}>
                        <img  className={"w-[15px]"}src={assets.plus_icon} alt="Add-Chat"/>
                    {toggle ? "New Chat" : ""}</button>
            </div>

            <div className="flex flex-col gap-1  w-full flex-1">
                {toggle && <h2  className="text-md text-start">Recent</h2>}
                { toggle &&
                    Questions.map((e , i) => {
                        if(i > 3) return null;
                        return (
                            <button onClick={() => callApi(e)}
                            className="flex dark:hover:bg-[#1A1A1C] cardUp text-start 
                            transition0_3s items-center p-3 hover:text-blue-400 
                            hover:bg-gray-200 rounded-full text-xs">{e}
                            </button>
                        )
                    })
                }
            </div>

            <div className="flex flex-col gap-1 justify-center w-full">
                <button className="flex transition0_3s items-center p-3 dark:hover:bg-[#1A1A1C] hover:text-blue-400 hover:bg-gray-200 rounded-full capitalize text-black dark:text-txt"><i className='bx  bx-info-circle text-xl mr-3'></i>{toggle ? "help" : ""}</button>
                <button className="flex transition0_3s items-center p-3 dark:hover:bg-[#1A1A1C] hover:text-blue-400 hover:bg-gray-200 rounded-full capitalize text-black dark:text-txt"><i className='bx  bx-time text-xl mr-3'></i>{toggle ? "activity" : ""}</button>
                <button className="flex transition0_3s items-center p-3 dark:hover:bg-[#1A1A1C] hover:text-blue-400 hover:bg-gray-200 rounded-full capitalize text-black dark:text-txt"><i className='bx  bx-cog text-xl mr-3'></i>{toggle ? "settings" : ""}</button>
                <button onClick={() => logOutHandler()} className="flex transition0_3s items-center p-3 dark:hover:bg-[#1A1A1C] hover:text-blue-400 hover:bg-gray-200 rounded-full capitalize text-black dark:text-txt"><i className='bx bx-log-out text-xl mr-3'></i>{toggle ? "logout" : ""}</button>
            </div>
            {
                currentUser === null ? <Navigate replace to="/" /> : null
            }
        </div>
    );
}