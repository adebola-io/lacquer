import React from 'react'
import { Link } from 'react-router-dom';
import FirstImage from './FirstImage';
import MasonryImage from './MasonryImage';
import Categories from './Categories';
import Featured from './Featured';
import DirButton from './DirButton';
import '../../concord/css/concord.app.css';
import './landing.css';
import './rwd-landing.css';


const Landing = () => {
    const [isReady, setIsReady] = React.useState(false);
    // Featured Container
    const [bigGear, setBigGear] = React.useState(0);
    // Reference to main element.
    const main = React.useRef(null);
    // display Card animation on scroll.
    const handleCards = () =>{
        if (document.querySelector('html').scrollTop > 680){
            setIsReady(true)
        } else if (document.querySelector('html').scrollTop < 680) {
            setIsReady(false)
        }
    }
    
    const shift = (direction) => {
        setBigGear(direction==='front'&&bigGear!==-60?bigGear-20:direction==='back'&&bigGear!==0?bigGear+20:bigGear)
    }

    React.useEffect(() => {
        let mounted = true;
        window.addEventListener('scroll', handleCards)
        if (mounted) {
            setTimeout(()=>{
                main.current.style.opacity = '1';
            }, 1500)
        }
        return () => {mounted=false};
    }, [main])

    return (
        <main ref={main} className='page-main opacity-0 time-300ms fnt-segoe'>
            <section id='first-board' className='page-board brdr-bottom-thin brdr-grey'>
                <div className='page-board-container'>
                    <div id='first-overlay' className="page-board-overlay px-5 fcy">
                        <FirstImage />
                    </div>
                    <div id='first-content' className="page-board-content px-5 fcol fcx fey">
                        <h1 id='first-heading' className='fnt-35pt w60 txt-ex'>Experience the masterpeices.</h1>
                        <span id='first-info' className="w50 txt-ex fnt-10pt">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Saepe voluptates, omnis in natus dolor optio consequatur corporis atque labore molestiae blanditiis distinctio quas nobis? Necessitatibus nesciunt nihil earum error culpa.</span>
                        <div id='first-button-row' className="first-button-row button-row flex mtop-2 w35 fex h-fit-content">
                            <Link to={'#'} id='get-started-button' className="page-board-button bg-charcoal brdr-transparent px-5 fc txt-white">Get Started</Link>
                            <Link to={'#'} id='login-button' className="mleft-1 page-board-button time-300ms hvr--up-5 px-5 fc hvr--shadow-8px">Login</Link>
                        </div>
                    </div>
                </div>
            </section>
            <div id='category-row' className="py-3 px-5 fsbx fcy brdr-bottom-thin brdr-grey">
                <span className='fnt-25pt'>Browse by category</span>
                <Categories name='Renaissance' />
                <Categories name='Japanese' />
                <Categories name='Modern' />
                <Categories name='Baroque' />
            </div>
            <section className="page-board brdr-bottom-thin brdr-grey">
                <div className="page-board-container">
                    <div className="page-board-overlay"></div>
                    <div className="page-board-content fcol fcx fcy px-5">
                        <h1 className='fnt-25pt txt-cx'>Learn about the best history has to offer.</h1>
                        <div id='second-card-container' className="page-board-card-row mtop-2 px-5">
                            <div style={{backgroundImage: 'url(../data/landing/the-creation-of-adam.jpg)', backgroundPositionX: '2%'}} className= {`secondary-card ${isReady?'':'opacity-0 down-5'} page-board-card hvr--brightness-25 time-300ms bg-c`}></div>
                            <div style={{backgroundImage: 'url(../data/landing/the-creation-of-adam.jpg)', backgroundPositionX: '34%'}} className={`main-card ${isReady?'':'opacity-0 down-10'} page-board-card hvr--brightness-25 time-600ms bg-c`}></div>
                            <div style={{backgroundImage: 'url(../data/landing/the-creation-of-adam.jpg)', backgroundPositionX: '61%'}} className={`secondary-card ${isReady?'':'opacity-0 down-15'} page-board-card hvr--brightness-25 time-900ms bg-c`}></div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="page-board brdr-bottom-thin brdr-grey">
                <div className="page-board-container">
                    <div id='third-overlay' className="page-board-overlay px-5 fex">
                        <div id='third-overlay-masonry' className="masonry fcx h100 w42">
                            <div className="masonry-strip mx-2 w3rd fcol mtop-15">
                                <MasonryImage src='tutu.jpg' />
                                <MasonryImage src='nj.jpg' />
                                {/* <MasonryImage src='b.jpg' /> */}
                            </div>
                            <div className="masonry-strip mx-2 w3rd p fcol">
                                <MasonryImage src='salvator.jpg' />
                                <MasonryImage src='monalisa.jpg' />
                                <MasonryImage src='lament-for-icarus.jpg' />
                                {/* <MasonryImage src='saturn-devouring-his-son.jpg' /> */}
                            </div>
                            <div className="masonry-strip mx-2 w3rd fcol mtop-25">
                                <MasonryImage src='young-man-on-a-riverbank.jpg' />
                                <MasonryImage src="girl-in-a-sailor's-blouse.jpg" />
                                {/* <MasonryImage src='young-man-on-a-riverbank.jpg' /> */}
                                {/* <MasonryImage src='las-meninas.jpg' /> */}
                            </div>
                        </div>
                    </div>
                    <div id='third-content' className="page-board-content px-5 fcol fcx">
                        <h1 id='third-heading' className='fnt-35pt w60'>Comission replicas of artworks easily.</h1>
                        <span id='third-info' className='w50 fnt-10pt'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rem esse nemo distinctio at, aut mollitia illum accusamus maxime sint unde magni ipsam facilis minus iure sed, itaque, corrupti ullam tempora!</span>
                    </div>
                </div>
            </section>
            <section id='fourth-board' className='page-board px-5 fcy fcx fcol'>
                    <h1 id='fourth-heading' className='m2 txt-cx'>Featured Collections</h1>
                    <div className="w100 h85 flex fy mbottom-5">
                        <DirButton dir='back' shift={shift}/>
                        <Featured bigGear={bigGear}/>
                        <DirButton dir='front' shift={shift}/>
                    </div>
            </section>
        </main>
    )
}

export default Landing
