import React from "react";
import { useState } from "react";


export const useToggle = () => {
    const [state, setState] = useState(false);
    
    const Toggle =  () => setState(state ? false : true);
    
    return [state , Toggle];
}