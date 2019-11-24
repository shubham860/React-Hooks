import React,{useState,useEffect} from 'react';
import Useeffect_once from "./Useeffect_once";

const UseeffectCleanup = () => {
    const [display,setDisplay] = useState(true);
    return (
        <div>
            <button onClick={()=>{setDisplay(!display)}}>toggle</button>
            {
                display && <Useeffect_once/>
            }
        </div>
    );
};

export default UseeffectCleanup;
