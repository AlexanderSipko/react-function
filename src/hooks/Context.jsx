import React, { createContext, useState } from "react"

export const CustomContext = createContext()

export const Context = (props) => {
    const [books, setBooks] = useState([
        {id:1, title:'JS'},
        {id:2, title:'React'},
        {id:3, title:'Node JS'}]
    );

    const [newID, setNewID] = useState(books.length);

    const addBook = (book) => {
        setBooks([book, ...books])
        setNewID(books.length)
    }

    const removeBook = (id) => {
        setBooks(books.filter(item => item.id !== id.id))
    }

    const getNewID = (id) => {
        return +newID + 1
    }

    const value = { 
        addBook,
        removeBook,
        books,
        getNewID
    }

    return (
    <CustomContext.Provider value={value}>
        {props.children}
    </CustomContext.Provider>)
} 

export default Context
 