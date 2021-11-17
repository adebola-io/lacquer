import React from 'react'
import {Link} from 'react-router-dom'

const FeaturedSlide = (props) => {
    return <Link to='#' className="h100 w20 featured-item bg-blue overflow-h">
        <div className="h200 w100">
            <div style={{backgroundImage: `url(../data/landing/${props.image}.jpg)`}} className="featured-background w100 h50 bg-c brightness-50 time-300ms"></div>
            <div className="featured-text w100 time-300ms h20 fcol fex txt-white pbottom-2 pleft-2">
                <h1 className='featured-name fnt-35pt'>{props.paintingName}</h1>
                <span className='featured-artist'>{props.paintingArtist}</span>
            </div>
        </div>
    </Link>
}

FeaturedSlide.defaultProps = {
    image: 'nighthawks',
    paintingName: 'Nighthawks',
    paintingArtist: 'Andrew Hopper'
}

export default FeaturedSlide
