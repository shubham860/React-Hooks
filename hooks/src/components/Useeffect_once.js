import React,{useState,useEffect} from 'react';

const Useeffect_once = (props) => {
    const [x, setX] = useState(0);
    const [y, setY] = useState(0);

    const observe = e => {
        console.log('observe');
        setX(e.clientX);
        setY(e.clientY);
    }

    useEffect(() => {
        console.log('effect');
        window.addEventListener("mousemove", observe)
        return() => {
            console.log('return');
            window.removeEventListener("mousemove", observe);
        }

    })

    return (
        <div>
            X - {x}
            Y - {y}
        </div>
    )
}
export default Useeffect_once;