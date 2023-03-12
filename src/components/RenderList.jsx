import React, { useEffect } from "react";
import Click from "./B_Click"
import TimerMemory from "./A_TimerMemory"

function ChangeText(e) {
    var btns = document.querySelectorAll('button')
        
    btns.forEach(function(btn) {
        if (btn !== e.target) {
            btn.textContent = 'Show'
        }}
    )

    if (e.target.textContent === 'Show') {
        e.target.textContent = 'Hidden'
    } else {
        e.target.textContent = 'Show'
    }
}

function RenderComponents () {
    const allComponents = [
        { key: "1", component: <Click />, name: "1 Clicker" },
        { key: "2", component: <TimerMemory />, name: "2 TimerMemory" }
      ];

    const [hidden, setHidden] = React.useState(false)
    const [key, setKey] = React.useState(null)


    function handlerHidden(currenKey) {

        if (key === null) {
            setHidden(!hidden)
            setKey(currenKey)
            return 
        }

        if (currenKey === key) {
            setHidden(!hidden)
            setKey(key)
        } else {
            setHidden(true)
            setKey(currenKey)
        } 
    }

    useEffect (() => {
        var btns = document.querySelectorAll('button')
        
        btns.forEach(function(btn) {
            btn.addEventListener('click', (e) => ChangeText(e))}
        )
        return btns.forEach(function(btn) {
            btn.removeEventListener('click', (e) => ChangeText(e))}
        )
    },[])

    return (
        <div className="RenderList">
            <h2>Render Other function</h2>
            { allComponents.map((item) =>
                <div key={item.key}>
                    <div className="NameButton">
                        <h3>{item.name}</h3>
                        <button id={item.key} onClick={() => handlerHidden(item.key) }>Show</button>
                    </div>
                    
                    { (hidden && key === item.key) && (
                        <div className="componentsShow">{item.component}</div>
                        )
                    }
                </div>
                )
            }
        </div>
    )
}

export default RenderComponents