import React from "react"

function OneToDo(props) {
    const {id, text, done} = props
    const [isDone, setDone] = React.useState(done)

    const handlerClick = () => {
      setDone(isDone => !isDone)
    }

    return (
      <>
        { isDone? (
          <div id={id} className="Done"><i>{text}</i> &#9989;</div>
        ):(
          <div id={id} className="NotDone"><i>{text}</i>
            <span onClick={handlerClick} className="StatusToDo">&#128205;</span>
          </div>
        )}
      </>
    )
}


function List(props) {

    const {items } = props

    return (
        <ul className="UlToDo">
            {items.map(item => (
              <li key={item.id}>
                  <OneToDo {...item} />
              </li>
            ))}
          </ul>
    )
}

export default List