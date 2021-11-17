import React from 'react'
import '../../concord/css/concord.app.css'

const MasonryImage = ({src}) => {
    return <img className='w100 mbottom-10 brdr-slim' src={`../data/Landing/${src}`} alt="painting"/>
}

export default MasonryImage
