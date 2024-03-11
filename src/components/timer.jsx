import React, { useState, useEffect } from 'react';

const Timer = ({ timerStarted }) => {
    
    const [seconds, setSeconds] = useState(0);
    
    useEffect(() => {
        let timerInterval;

        if (timerStarted) {
            timerInterval = setInterval(() => {
                setSeconds((prevSeconds) => prevSeconds + 1);
            }, 1000);
        }

        return () => clearInterval(timerInterval);
    }, [timerStarted]);

    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;

    return (
        <div id="timeTaken" className="text-3xl">
            {minutes < 10 ? '0' : ''}{minutes}:{remainingSeconds < 10 ? '0' : ''}{remainingSeconds}
        </div>
    );
}

export default Timer;