import {CustomContext} from "../hooks/Context"
import React, { useContext } from "react"
import Book from './Book'
import AddBooks from "./AddBook";

function Books() {

    const { books } = useContext(CustomContext)
    return (
            <div>
                <h2>Рендер листа с книгами</h2>
                <ol> 
                    { books.map((book) => {
                        return  <Book key={book.id} {...book}/>
                    }) }
                </ol>

                <AddBooks/>

                <ul className="Description">
                    <li>описание функционала</li>
                    <li>1. возможность добавления записей в список</li>
                    <li>2. при вводе текста выводится кнопка ввода при заполнении input</li>
                    <li>3. есть событие при нажатии Enter (добавление записи)</li>
                    <li>4. валидация состояния input (не пустое значение)</li>
                    <li>5. лист не записывается в хранилище</li>
                </ul>
            </div> 
    )
}

export default Books