
import React, { useEffect, useReducer } from "react"

export const initialState = {
    isActive:false,
    second:0
}

function reducer(state, action) {
    switch (action.type) {
        case 'initSecond':
            console.log('start+', action.second)
            return {...state, second: action.second};
        case 'start':
            return {...state, isActive: true};
        case 'stop':
            return {...state, isActive: false};
        case 'reset':
            return {...state, second: 0, isActive: false};
        case 'increment':
            return {...state, second: state.second + 1};
    default:
            throw new Error();
    }
}

function TimerMemory () {

    const [state, dispatch] = useReducer(reducer, initialState)
    // const [isActive, setActive] = React.useState(false)
    // const [second, setSecond] = React.useState(0)
    
    // const handlerTimer = () =>{
    //     // setActive(isActive => !isActive);
    // }

    // const handlerReset = () =>{
    //     // setActive(false);
    //     // setSecond(0)
    // }
    useEffect(() => {
        // определяем наличие локальной переменной
        const localCount = localStorage.getItem('myCount')
        // localCount && setSecond(+localCount)
        localCount && dispatch({type:'initSecond', second:+localCount})
    }, [])

    useEffect(() => {
        // управление интервалом по активации Start Stop
        let timerId = ''
        if (state.isActive) {
            timerId = setInterval(() => {
                // setSecond(secondes => +secondes + 1)
                dispatch({type:'increment'})
            }, 1000)
        } else if (!state.isActive) {
            clearInterval(timerId)
        }
        return () => clearInterval(timerId)
    }, [state.isActive])

    useEffect(() => {
        // при каждом изменении переменной заносим данные в локальную
        localStorage.setItem('myCount', state.second)
    }, [state.second])

    return (
        
        <div>
            <h3>Таймер</h3>
            {!state.isActive? (
                <button onClick={() => dispatch({type:'start'})} >Start</button>
                ):(
                <button onClick={() => dispatch({type:'stop'})} >Stop</button>
                )}
                <button  onClick={() => dispatch({type:'reset'})} >Restart</button>
                <h3>{state.second}</h3>

                <ul className="Description">
                    <li>описание функционала</li>
                    <li>1. данные таймера пишутся в localStorage</li>
                    <li>2. запуск/остановка таймера и возможность очистки локального хранилища</li>
                </ul>
        </div>
    )
}

export default TimerMemory