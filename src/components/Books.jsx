import {CustomContext} from "../hooks/Context"
import React, { useContext } from "react"
import Book from './Book'


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

                {/* <h3 className="AddNewBook">Add New Book</h3> */}
            </div> 
    )
}

export default Books