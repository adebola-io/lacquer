import React from 'react'


const DirButton = ({dir, shift}) => {

    return (
        <div className='h100 fcy'>
            <button onClick={()=>{shift(dir)}} className="dirbutton-container brdr-none bg-transparent fcol fc">
                <div style={{transform: `rotate(${dir==='back'?'-':''}45deg)`}} className="dirbutton-bar"></div>
                <div style={{transform: `rotate(${dir==='back'?'':'-'}45deg)`}} className="dirbutton-bar"></div>
            </button>
        </div>
    )
}

export default DirButton
