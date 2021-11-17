import {useRef, useEffect} from 'react'

const Start = () => {
    const text = useRef(null);
    useEffect(() => {
        let mounted = true;
        if (mounted) {
            setTimeout(()=>{
                text.current.style.opacity = '1';
            }, 1000)
            setTimeout(()=>{
                text.current.style.opacity = '0'
            }, 3000)}
        return () => {mounted = false}
    }, [])
    return (
        <div ref={text} style={{height: window.innerHeight}} className='s100 opacity-0 fc fnt-segoe fnt-25pt time-300ms'>
            Motion
        </div>
    )
}

export default Start
