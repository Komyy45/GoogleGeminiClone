import React from "react";
import { Header } from "./MainPageComponents/Header";
import { ChatBox } from "./MainPageComponents/ChatBox";
import { Body } from "./MainPageComponents/Body";


interface darkModeProps{
    darkMode : Function
}
export const MainPage = (props : darkModeProps) => {
    
    return(
        <div  className={` w-full min-h-full h-screen gap-2
        flex flex-col items-center justify-between dark:bg-custom `}>
            <Header darkMode={props.darkMode}/>
            <Body />
            <ChatBox />
        </div>
    );
}