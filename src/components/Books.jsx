import {CustomContext} from "../hooks/Context"
import React, { useContext } from "react"
import Book from './Book'
import AddBooks from "./AddBook";

function Books() {

    const { books } = useContext(CustomContext)
    return (
            <div>
                <h2>Some Text</h2>
                <ol> 
                    { books.map((book) => {
                        return  <Book key={book.id} {...book}/>
                    }) }
                </ol>

                <AddBooks/>
            </div> 
    )
}

export default Books