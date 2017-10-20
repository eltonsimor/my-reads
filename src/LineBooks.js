import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import LineBook from './LineBook'


class LineBooks extends Component{

  state = {
    booksShelfTitles: [
        { title: 'Currently Reading', code: 'currentlyReading' },
        { title: 'Want to Read', code: 'wantToRead' },
        { title: 'Read', code: 'read' }
      ],
      showingBooksByShelf:[]
  }

  render(){
      const { books } = this.props   
      const { booksShelfTitles } = this.state
      
      return(
          <div className="list-books">
          <div className="list-books-title">
            <h1>MyReads</h1>
          </div>
          <div className="list-books-content">
            <div>
                {booksShelfTitles.map((shelf) => (
                  <div key={ shelf.code }>
                    <LineBook 
                      shelf={ shelf } 
                      books={ books.filter((book) => book.shelf === shelf.code) } 
                      updateBook={ this.props.updateBook }/>
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
}

export default LineBooks