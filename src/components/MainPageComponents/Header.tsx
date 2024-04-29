import {React , useContext} from "react";
import assets from "../../assets/assets/assets";
import { useInView } from "react-intersection-observer";
import { Context } from "../../context/firebaseAuthContext";
import { ToggleButton } from "../ToggleButton";

interface darkModeProps {
    darkMode : Function
}
export const Header = (props : darkModeProps) => {
    const {ref , inView } = useInView();
    const { currentUser } = useContext(Context);

    const userImg = currentUser?.photoURL;
    return(
    <header ref={ref} className={`w-full h-24 px-5 flex justify-between items-center transition-all duration-1000 opacity-0 translate-y-5 ${inView ? "slideUp" : ""}`}>
        <h3 className=" text-xl sm:text-2xl  text-gray-600 dark:text-txt capitalize">
            Gemini
        </h3>
        <div className="flex items-center justify-center gap-2">
            <ToggleButton  darkMode={props.darkMode}/>
            <div className=" w-7 sm:w-10 h-10 rounded-lg flex items-center">
                <img className="w-full rounded-full " src={userImg ?  userImg  : assets?.user_icon} alt="user-icon" />
            </div>
        </div>

    </header>
    );
}