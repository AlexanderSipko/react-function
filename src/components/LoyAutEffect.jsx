import React from "react"


function BlinkyRender () {

    const [value, setValue] = React.useState(0)

    React.useLayoutEffect(() => {
        // лучше использовать useEffect
        if (value === 0 ) {
            setValue(10 + Math.random() * 200)
        }
    }, [value])

    console.log(value)

    function setNull () {
        setValue(0)
    }

    return (
        <div>
            <h2>Генерация случайного числа при нажатии</h2>
            <button onClick={setNull}>Get Random Number</button>
            <p>{value}</p>
        </div>
       
    )
}


export default BlinkyRender