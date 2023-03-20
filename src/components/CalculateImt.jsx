import React from "react";

function Imt () {

    const height = React.useRef('')
    const weight = React.useRef('')
    const [result, setResult] = React.useState('')

    function calcIBM(){
        const res =  weight.current.value/(Math.pow(height.current.value/100, 2))
        setResult(res)
    }

    return (
        <div className="calculator__count-box" zn_id="28">
            <h2>Рассчитать индекс массы тела</h2>
            <input type="text" ref={height}/>
            <input type="text" ref={weight}/>
                <button onClick={calcIBM} >Узнать результат</button>
            <p className="result">{result}</p>

            <ul className="Description">
                    <li>описание функционала</li>
                    <li>1. расчет индекса массы тела</li>
                </ul>
        </div>
    )
}

export default Imt