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
            <input type="text" ref={height}/>
            <input type="text" ref={weight}/>
                <button onClick={calcIBM} >Рассчитать</button>
            <p className="result">{result}</p>
        </div>
    )
}

export default Imt