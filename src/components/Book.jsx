import { CustomContext} from "../hooks/Context"
import { useContext } from "react"
import React from "react"

function Book(props) {

    const { id, title } = props
    const { removeBook } = useContext(CustomContext)

    return (
        <li className="li-book" onClick={() => removeBook({id})}>
            {title}
        </li>
    )
}

export default Book