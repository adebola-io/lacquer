import React from 'react'
import { useDelay } from '../../hooks';


const FirstImage = () => {
    const delay = useDelay(1700);
    const image = React.useRef(null);
    const runAnimation = () => {
        setTimeout(()=>{
            image.current.classList.remove('opacity-0');
            image.current.classList.remove('down-3');
        }, 300)
    }
    if (delay) return <div></div>    

    return <div id='first-image-container' className='h85 w-fit-content fcol fc'>
        <img id='first-image' ref={image} onLoad={runAnimation} className='opacity-0 brdr-slim down-3 h100 time-600ms' src="../data/landing/girl-with-the-pearl-earring.png" alt="painting"/>
    </div>
}

export default FirstImage
