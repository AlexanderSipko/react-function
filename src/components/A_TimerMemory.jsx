
import React, { useEffect } from "react"

function TimerMemory () {

    const [isActive, setActive] = React.useState(false)
    const [second, setSecond] = React.useState(0)
    
    const handlerTimer = () =>{
        setActive(isActive => !isActive);
    }

    const handlerReset = () =>{
        setActive(false);
        setSecond(0)
    }


    useEffect(() => {
        // управление интервалом по активации Start Stop
        let timerId = ''

        if (isActive) {
            timerId = setInterval(() => {
                setSecond(secondes => +secondes + 1)
            }, 1000)
        } else if (!isActive) {
            clearInterval(timerId)
        }
    
        return () => clearInterval(timerId)
    }, [isActive])

    useEffect(() => {
        // определяем наличие локальной переменной
        // если есть то устанавливаем значение секунд
        const localCount = localStorage.getItem('myCount')
        localCount && setSecond(+localCount)
    }, [])

    useEffect(() => {
        // при каждом изменении переменной заносим данные в локальную
        localStorage.setItem('myCount', second)
    }, [second])

    return (
        
        <div>
            <h3>Simple timer, start/stop and reset function. However create and write localStorage</h3>
            {!isActive? (
                <button onClick={handlerTimer} >Start</button>
                ):(
                <button onClick={handlerTimer} >Stop</button>
            )}
                <button  onClick={handlerReset} >Restart</button>
                <h3>{second}</h3>
        </div>
    )
}

export default TimerMemory