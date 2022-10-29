import React, {useEffect, useRef, useState} from "react";


export default function Timer({seconds}) {
    const [timeLeft, setTimeLeft] = useState(seconds);
    const [tick, setTick] = useState(false);
    const timer = useRef(null);

    useEffect(() => {
        if (tick) {
            startTimer();
        }
        return () => clearInterval(timer.current);
    }, [tick]);

    const startTimer = () => {
        timer.current = setInterval(() => setTimeLeft(t => t - 1), 1000);
    };

    return (

        <div >
            <span className="time-left">{timeLeft} sec</span>
            <button className="icon icon-play" onClick={() => setTick(true)}></button>
            <button className="icon icon-pause" onClick={() => setTick(false)}></button>

        </div>
    )
}
