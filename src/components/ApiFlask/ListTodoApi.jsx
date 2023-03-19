import React from "react"

function printDate() {
  const temp = new Date();
  const pad = (i) => (i < 10) ? "0" + i : "" + i;
  return pad(temp.getHours()) + ':' +
    pad(temp.getMinutes())
}

function OneToDo(props) {
    const {id, text, done, putToDO} = props
    const [isDone, setDone] = React.useState(done)

    const handlerClickText = () => {
      // console.log(printDate())
      // добавить изменение данных
    }

    const handlerClick = () => {
      let body = {
          id:id,
          text: !isDone? text + ' ' + printDate() : text,
          done:!isDone
      }
      putToDO(id-1, body)
      setDone(isDone => !isDone)
    }

    return (
      <>
        { isDone? (
          <div id={id} className="Done"><i>{text}</i>
            <span onClick={handlerClick} className="StatusToDo">&#9989;</span>
          </div>
        ):(
          <div id={id} className="NotDone"><i onClick={handlerClickText}>{text}</i>
            <span onClick={handlerClick} className="StatusToDo">&#128205;</span>
          </div>
        )}
      </>
    )
}


function List(props) {

    const {items, putToDO } = props

    return (
        <ul className="UlToDo">
            {items.map(item => (
              <li key={item.id}>
                  <OneToDo {...item} putToDO={putToDO} />
              </li>
            ))}
          </ul>
    )
}

export default List