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
    const { getNewID } = useContext(CustomContext)

    return (
            <div className="FormAddBook">
                <p onClick={() => activeShow(false)}>remove</p>
                <h2 className="AddNewBook">Type name book</h2>
                <p>Show next id: { getNewID() }</p>
            </div> 
    )
}