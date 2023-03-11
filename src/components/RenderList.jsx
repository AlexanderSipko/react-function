import React from "react";
import TimerF from "./Timer"

function RenderComponents () {
    const allComponents = [{
        'key':'1', 'component':<TimerF/>, 'name':'Timer_1'
    },{
        'key':'2', 'component':<TimerF/>, 'name':'Timer_2'
    }];

    const [hidden, setHidden] = React.useState(false)
    const [key, setKey] = React.useState(null)

    function heandlerHidden(key) {
        setHidden(!hidden)
        setKey(key)
    }

    return (
        <div className="RenderList">
            <h2>All Components</h2>
            { allComponents.map((item) =>
                <div key={item.key}>
                    <h3>{item.name} <button onClick={() => heandlerHidden(item.key) }>Show/Hidden</button> </h3>
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