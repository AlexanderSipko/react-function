import {CustomContext} from "../hooks/Context"
import React, { useContext } from "react"


function AddBooks() {

    const [activeForm, setActivForm] = React.useState(false)

    return (
        <div>
            {activeForm && <div className="overBlock"></div>}
            <div className="BlockAddBock">
                <h3 className="AddNewBook" onClick={() => setActivForm(true)}>Click and add New Book</h3>
                {activeForm && <AddBooksNew activeShow={setActivForm}/>}
            </div>
        </div>
    )
}

export default AddBooks


function AddBooksNew(props) {

    const { activeShow } = props
    const { addBook, getNewID } = useContext(CustomContext)

    const [currentText, setCurrentText] = React.useState('')
    const [text, setText] = React.useState('')
    const refInput = React.useRef(null);

    function handleChange() {
        // обновление данных о введенных данных
        setText(refInput.current.value)
    }

    function  handleKeyPress(event) {
        // событие при нажатии Enter and input don't empty
        if(event.key === 'Enter' & text !==''){
                handleClick()
          }
    }

    function handleClick() {
        // добавление новой записи
        const newBook = {
            id:getNewID(),
            title:refInput.current.value
        }
        addBook(newBook);
        setCurrentText(newBook)
        refInput.current.value = ''
        setText('')
    }

    return (
            <div className="FormAddBook">
                <p onClick={() => activeShow(false)} className="Remove" > X </p>
                <input onKeyPress={handleKeyPress} onChange={handleChange} type="text" ref={refInput}/>

                { (text !=='') && <button onClick={handleClick}>Add Book</button> }
                { (currentText !=='') && <h3>success add: { currentText.title }</h3> }

                <p className="NewId">show next id: { getNewID() }</p>
            </div> 
    )
}