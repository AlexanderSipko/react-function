import React from "react";

const WithRef = () => {
    const inputEl = React.useRef(null)
    // const numRef = React.useRef(0)
    const [inValue, setValue] = React.useState('')
    const [numRefValue, setnumRefValue] = React.useState(0)

    const handleChange = () => {
        setValue(inputEl.current.value)
    }

    const handleClick = () => {
        setnumRefValue(numRefValue*1 + 1);
    }

    return (
        <div>
            <input onChange={handleChange} placeholder="name" ref={inputEl}/>
            <p>+ {inValue}</p>

            <button onClick={handleClick}>{numRefValue}</button>
        </div>
    )
}


export default WithRef