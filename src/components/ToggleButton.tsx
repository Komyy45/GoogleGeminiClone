import React , { useState ,useEffect } from 'react';
import '../styles/ToggleButton.css'
import { useToggle } from '../hooks/toggle'
interface darkModeProps {
    darkMode : Function
}

export const ToggleButton = (props : darkModeProps) => {
    const [mode, switchMode] = useState<boolean>(false);
    useEffect(() => {
        const mode = localStorage.getItem('mode');
        if(mode === 'dark'){
            modeSwitcher();
        }
    }, []);
    const modeSwitcher = () => {
        switchMode(!mode);
        localStorage.setItem('mode' , mode ?  "light" : "dark");
        props.darkMode();
    }
    return(
        <div className="flex gap-2 justify-between items-center">
            {
                mode ? <i className='bx bx-moon text-xl text-blue-500'></i> : <i className='bx bx-sun text-xl' ></i>
            }
            <div className='flex'>
                <input type="checkbox" checked={mode} id="switch" onClick={modeSwitcher}/>
                <label htmlFor="switch">Toggle</label>
            </div>
        </div>
    )
}