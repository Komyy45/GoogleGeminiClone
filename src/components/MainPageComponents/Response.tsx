import React from "react";
import { useContext } from "react";
import assets from "../../assets/assets/assets";
import { Context } from "../../context/context";
import { Context as userInfo }  from "../../context/firebaseAuthContext";
export const Response = () => {
    const {response , Question} = useContext(Context);
    const { currentUser } = useContext(userInfo)
    
    const userImg = currentUser?.photoURL;
    return(
        <div className="w-full flex flex-col gap-10 items-center  dark:text-txt">
            <div className="flex w-full px-5 sm:w-3/4 gap-4">
                <div>
                    <img className="w-10 rounded-full" src={userImg ? userImg : assets.user_icon} alt="gemini-png"/>
                </div>
                <p className="w-full text-start content-box font-bold">
                    {Question}
                </p>
            </div>
            <div className="flex w-full px-5 sm:w-3/4 gap-2">
                <div>
                    <img className="w-10" src={assets.gemini_icon} alt="gemini-png"/>
                </div>
                
                {response}
                
            </div>
        </div> 
    )
}