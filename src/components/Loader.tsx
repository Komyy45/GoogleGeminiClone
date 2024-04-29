import React from "react"
import assets from "../assets/assets/assets"
export const Loader = () => {
    const mode = localStorage.getItem('mode');
    return(
        <div className="flex w-3/4 gap-2">
            <div>
                <img className="w-10" src={assets.gemini_icon} alt="gemini-png"/>
            </div>
            <div className="load w-full flex flex-col gap-4">
                <div className={`loading ${mode === "dark" ? "darkLoading" : ''} bar w-full rounded-md h-4`}></div>
                <div className={`loading ${mode === "dark" ? "darkLoading" : ''} bar w-full rounded-md h-4`}></div>
                <div className={`loading ${mode === "dark" ? "darkLoading" : ''} bar w-3/4 rounded-md h-4`}></div>
            </div>
        </div>
    )
}