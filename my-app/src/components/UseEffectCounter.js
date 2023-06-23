import React, { useState, useEffect } from 'react'

function UseEffectCounter() {
    const [count, setCount] = useState(0);
    const [time, setTime] = useState(0);

    useEffect(() => {
        console.log('count 1 effect')
        document.title = count;
    }, [count]);

    useEffect(() => {
        console.log('Creating timer')
        const interval = setInterval(() => {
            console.log('Interval executed')
            setTime(time => time + 1)
        }, 1000);
        return () => {
            console.log('Cleaning up')
            clearInterval(interval);
        }
    }, []);

    return (
        <div>
            <button onClick={
                () => setCount(count => count + 1)
            }>
                Increment count ({count})
            </button>
            <h2>Time is {time}</h2>
        </div>
    )
}

export default UseEffectCounter


// useEffect hook
// - you should always specify the useEffect dependency array
// - the array can consist of several props or state properties
// - without the array, useEffect will run on every render, which could hurt performance

// useEffect use case
// run on every render = pass no array parameter
// run conditionally = pass an array with appropriate props or state
// run only once = pass an empty array
// cleanup function =
    // executed before a component unmounts
    // get rid of anything the browser or the DOM no longer needs:
        // unused even listeners
        // intervals or timers
        // hung network requests