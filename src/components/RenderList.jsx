import React from "react";
import Click from "./B_Click"
import TimerMemory from "./A_TimerMemory"

function RenderComponents () {
    const allComponents = [{
        'key':'1', 'component':<Click/>, 'name':'1 Clicker'
    },{
        'key':'2', 'component':<TimerMemory/>, 'name':'2 TimerMemory'
    }];

    const [hidden, setHidden] = React.useState(false)
    const [key, setKey] = React.useState(null)

    function handlerHidden(key) {
        setHidden(!hidden)
        setKey(key)
    }

    return (
        <div className="RenderList">
            <h2>Render Other function</h2>
            { allComponents.map((item) =>
                <div key={item.key}>
                    <h3>{item.name} <button onClick={() => handlerHidden(item.key) }>Show/Hidden</button> </h3>
                    { (hidden && key === item.key)? (
                        <div className="componentsShow">{item.component}</div>
                        ):
                        ''
                    }
                </div>
                )
            }
        </div>
    )
}

export default RenderComponents