import React, { useEffect } from "react";
import TimerMemory from "./A_TimerMemory"
import Books from './Books'
import ApiFlask from './ApiFlask'
import Imt from './CalculateImt'
import BlinkyRender from './LoyAutEffect'

function RenderComponents () {

    const allComponents = [
        { key: "1", component: <Books />, name: "1 Список книг", },
        { key: "2", component: <TimerMemory />, name: "2 Таймер" },
        { key: "3", component: <Imt />, name: "3 Расчет индекса массы тела" },
        { key: "4", component: <ApiFlask />, name: "4 Пример TODO с подключенным API" },
        { key: "5", component: <BlinkyRender />, name: "5 Пример работы useLoyautEffect" },

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
            <h2>Разный функционал на React</h2>
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
            <ul className="Description">
                <li>описание функционала</li>
                <li>1. каждый блок содержит разные микро приложения на React</li>
                <li>2. настроены кнопки показа и скрытия микроблоков</li>
                <li>3. основная цель - обучение React</li>
            </ul>
        </div>
    )
}

export default RenderComponents

function ChangeText(e) {
    var btns = document.querySelectorAll('button')
        
    btns.forEach(function(btn) {
        if (btn !== e.target) {
            btn.textContent = 'Show'
        } else {
            (e.target.textContent === 'Show')? (
                e.target.textContent = 'Hidden'
            ) : (
                e.target.textContent = 'Show'
            )
        }}
    )
}