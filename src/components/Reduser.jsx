import React from 'react';
import { useReducer } from 'react';


const limitRGB = (num) => (num < 0 ? 0 : num > 255 ? 255 : num)
const step = 10;

const reducer = (state, action) => {
    // очень удобная штука, так же позволяет передавать параметры
    switch (action.type) {
        case 'INCRIMENT_R':
            return {
                ...state,
                r: limitRGB(state.r + step)
            }
        case 'DECRIMENT_R':
            return {
                ...state,
                r: limitRGB(state.r - step)
            }
        case 'INCRIMENT_G':
            return {
                ...state,
                g: limitRGB(state.g + step)
            }
        case 'DECRIMENT_G':
            return {
                ...state,
                g: limitRGB(state.g - step)
            }
        case 'INCRIMENT_B':
            return {
                ...state,
                b: limitRGB(state.b + step)
            }
        case 'DECRIMENT_B':
            return {
                ...state,
                b: limitRGB(state.b - step)
            }
        default:
            return state
    }
}

function MyComponent() {

    const [{r, g, b}, dispatch] = useReducer(reducer, {r:0, g:150, b:200});

    return (
        <div>
            <h1 style={{
                color: `rgb(${r}, ${g}, ${b})`
            }}>
                Hello CodeSandbox
            </h1>
            <p>rgb(r:{r}, g:{g}, b:{b})</p>
            <div>
                <span>r</span>
                <button onClick={() => dispatch({type: 'INCRIMENT_R', payload: 1})}>+</button>
                <button onClick={() => dispatch({type: 'DECRIMENT_R'})}>-</button>
            </div>
            <div>
                <span>g</span>
                <button onClick={() => dispatch({type: 'INCRIMENT_G'})}>+</button>
                <button onClick={() => dispatch({type: 'DECRIMENT_G'})}>-</button>
            </div>
            <div>
                <span>b</span>
                <button onClick={() => dispatch({type: 'INCRIMENT_B'})}>+</button>
                <button onClick={() => dispatch({type: 'DECRIMENT_B'})}>-</button>
            </div>
            <br />
            <ul className="Description">
                <li>описание функционала</li>
                <li>1. смена цвета заголовка</li>
                <li>2. используется useReducer</li>
            </ul>
        </div>
    );
}

export default MyComponent