import React from 'react'
import { Link } from 'react-router-dom'

const Book = ({book = '', shelf = 'none', updateBook}) => {
    
    return(
        <div className="book">
            <div className="book-top">
                <Link to={{pathname: `/books/${book.id}`}}>
                    <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${book.imageLinks.thumbnail})` }}></div>
                </Link>
                <div className="book-shelf-changer">
                <select value={ book.shelf || shelf } onChange={(e) => updateBook(book, e.target.value)}>
                    <option value="moveTo" disabled>Move to...</option>
                    <option value="currentlyReading">Currently Reading</option>
                    <option value="wantToRead">Want to Read</option>
                    <option value="read">Read</option>
                    <option value="none">None</option>
                </select>
                </div>
            </div>
            <div className="book-title">{book.title}</div>
            <div className="book-authors">{book.authors}</div>
        </div>
        
    )
    
}

export default Book