import React from 'react'
import { Link } from 'react-router-dom'
import LineBook from './LineBook'


const LineBooks = (props) => {
  
  const { shelfTitles, updateBook, books } = props    
  return(
    <div className="list-books">
      <div className="list-books-title">
        <h1>MyReads</h1>
      </div>
      <div className="list-books-content">
        <div>
            {shelfTitles.map((shelf) => (
              <div key={ shelf.code }>
                <LineBook 
                  shelfTitle={ shelf.title } 
                  books={ books.filter((book) => book.shelf === shelf.code) } 
                  updateBook={ updateBook }
                />
              </div>
            ))}
        </div>
      </div>
      <div className="open-search">
        <Link 
          to="/search">Add a book</Link>
      </div>
    </div>
  )  
  
}

export default LineBooks