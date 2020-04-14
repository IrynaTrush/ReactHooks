import React, { useState, useEffect } from 'react';
import "../timer/style.css"

const Timer = ({time, autoStart, onTick, step, onTimeEnd, onTimeStart, onTimePause}) => {
    const [seconds, setSeconds] = useState(time);
    const [isRunning, setIsRunning] = useState(autoStart);

    useEffect(() => {
        if (isRunning) {
            const id = window.setInterval(() => {
                setSeconds(seconds => seconds-1);
                onTick(seconds);
            }, step)

            if(seconds === 0) {
                setIsRunning(false)
                onTimeEnd()
            }
            return () => window.clearInterval(id);
        }
        return undefined;
    }, [isRunning, seconds, onTick, step, onTimeEnd, ]);

    return(
        <div className="timer__wrapper">
            <div className="timer">
                <div className="time">{seconds}</div>
                <button
                  disabled={!isRunning && seconds !== 0}
                  className="btn"
                  onClick={() => {
                      setIsRunning(false);
                      setSeconds(time);
                  }}>
                      Reset
                </button>
            </div>
            <div className="buttons">
                {
                    isRunning 
                    ? (
                        <button className="action btn" onClick={() => {
                            setIsRunning(false);
                            onTimePause();
                        }}><i className="fas fa-pause"></i></button>
                    )
                    : (
                        <button className="action btn" onClick={() => {
                            setIsRunning(true);
                            onTimeStart();
                        }}><i className="fas fa-play"></i></button> 
                    )
                }
            </div>
        </div>
    )
}

export default Timer