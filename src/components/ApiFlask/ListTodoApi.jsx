

function OneToDo(props) {

    const {id, text, done } = props

    return (
      <>
        { done? (
          <div id={id} className="Done"><i>{text}</i> &#9989;</div>
        ):(
          <div id={id} className="NotDone"><i>{text}</i> &#128205;</div>
        )}
      </>
    )
}


function List(props) {

    const {items} = props

    return (
        <ul className="UlToDo">
            {items.map(item => (
              <li key={item.id}>
                  <OneToDo {...item}/>
              </li>
            ))}
          </ul>
    )
}

export default List