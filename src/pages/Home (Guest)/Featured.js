import React from 'react';
import FeaturedSlide from './FeaturedSlide';

const Featured = (props) => {
    // eslint-disable-next-line
    
    return <div id='featured' className="w95 h100 bg-charcoal overflow-x-s hide-scrollbar">
            <div id="featured-container"  style={{transform: `translateX(${props.bigGear}%)`}} className='h100 w500 flex time-900ms'>
                <FeaturedSlide image='nighthawks' paintingName='Nighthawks' paintingArtist='Andrew Hopper' />
                <FeaturedSlide image='the-last-supper' paintingName='The Last Supper' paintingArtist='Leonardo da Vinci' />
                <FeaturedSlide image='starry-night' paintingName='Starry Night' paintingArtist='Vincent Van Gogh' />
                <FeaturedSlide image='the-death-of-julius-caesar' paintingName='The Death of Julius Caesar' paintingArtist='Vincenzo Camuccini' />
            </div>
        </div>
}

export default Featured
