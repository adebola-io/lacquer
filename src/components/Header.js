import React from 'react';
import { Link } from 'react-router-dom';
import '../concord/css/concord.app.css';
import './rwd-header.css'

class Header extends React.Component {
    constructor () {
        super();
        this.state = {
            translate: '-100%',
        }
    }
    componentDidMount () {
        setTimeout(()=>{
            this.setState({...this.state, translate: 0})
        }, 1000)
    }
    render () {
        return (
            <header style={{transform: `translateY(${this.state.translate})`}} className='page-header fnt-segoe bg-black txt-white px-5 time-300ms'>
                <div className='page-sidebar-button fcol fc'>
                    <div className="page-sidebar-button-bar"></div>
                    <div className="page-sidebar-button-bar"></div>
                    <div className="page-sidebar-button-bar"></div>
                </div>
                <img src="../../logo.png" id='motion-header-logo' className='mright-1 h50' alt="logo"/>
                <span className='comp-name'>Motion</span>
                <nav className='page-header-nav mleft-2'>
                    <Link to='/' className='page-header-nav-link hvr--txt-blue'>Home</Link>
                    <Link to='/home' className='page-header-nav-link hvr--txt-blue'>Explore</Link>
                    <Link to='/about' className='page-header-nav-link hvr--txt-blue'>About</Link>
                    <Link to='/contact-us' className='page-header-nav-link hvr--txt-blue'>Contact Us</Link>
                </nav>
                <span className='mleft-auto page-header-button brdr-curve-none hvr--bg-black hvr--txt-white time-300ms hover-inflate'>Sign In</span>
            </header>
        )
    }
}

export default Header