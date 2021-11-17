import React from 'react';

/**
 * React Hook that creates a short delay.
 * 
 * @param {number} delay
 * Delay in milliseconds. 
 */
export const useDelay = (delay) => {
    const em = () => {}
    const [a, setA] = React.useState(true);
    React.useEffect(() => {
        let mounted = true;
        setTimeout(()=>{
            mounted?setA(false):em();
        }, delay)
        return () => {
            mounted = false;
        };
    }, [delay])
    return a;
}

