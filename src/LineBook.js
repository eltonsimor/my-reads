import React from 'react'
import Book from './Book'

const LineBook = ({books = [], shelfTitle = '', updateBook}) =>{
    return(
        <div className="bookshelf">
            <h2 className="bookshelf-title">{ shelfTitle }</h2>
            <div className="bookshelf-books">
                <ol className="books-grid">
                    {books.map((book) => (
                        <li key={ book.id }>
                            <Book 
                                book={ book } 
                                shelf={book.shelf}
                                updateBook={ updateBook }/>
                        </li>
                    ))}
                </ol>
            </div>
        </div>
    )

}

export default LineBook