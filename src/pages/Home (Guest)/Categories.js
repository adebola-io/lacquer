import React from 'react'
import {Link} from 'react-router-dom'

const Categories = (props) => {
    return <Link to='#' className="brdr-slim page-board-button w15 category-button fc brdr-curve-none hvr--txt-white hvr--bg-black time-300ms">{props.name}</Link>
}

export default Categories
