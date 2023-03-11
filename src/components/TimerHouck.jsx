
import React from "react"

function getDefaultValue() {
    const userCount = localStorage.getItem('count');
    return userCount? +userCount: 0;
}

function TimerF () {

    const [seconds, setSeconds] = React.useState(getDefaultValue())
    const [isActive, setIsActive] = React.useState(false)
    
    function toggleActive() {
        setIsActive(!isActive)
    }

    function reset() {
        setIsActive(false)
        setSeconds(0)
    }

    React.useEffect(() => {
        let idInterval = null;
        if (isActive) {
            idInterval = setInterval(() => {
                setSeconds(seconds => +seconds + 1);
            }, 1000)
        } else if (!isActive) {
            clearInterval(idInterval)
        }
        return () => clearInterval(idInterval)
    }, [isActive])

    React.useEffect(() => {
        localStorage.setItem('count', seconds);
    }, [seconds])

    return (
        <div>
            <h1>Timer</h1>
            {isActive? (
                <button onClick={toggleActive} >Stop</button>
            ):(
                <button onClick={toggleActive} >Start</button>
            )} 
            <h3>{ seconds }</h3>
            <button onClick={reset} >Reset</button>
        </div>
    )
}


export default TimerF