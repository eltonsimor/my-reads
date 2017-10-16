import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './App.css'
import Book from './Book'
import escapeRegExp from 'escape-string-regexp'

class SearchBooks extends Component{

  constructor(props){
    super(props)
    this.state = {
      query: ''
    }
    this.updateBook = this.updateBook.bind(this)
  }

  updateQuery = (query) => {
    this.setState({ query: query })
  }

  updateBook(book, shelf){
    this.props.updateBook(book, shelf)
  }

  render(){
    const { books } = this.props
    const { query } = this.state
    let showingBooks=[]
    if(query){
      const match = new RegExp(escapeRegExp(query), 'i')
      showingBooks = books.filter((book) => match.test(book.title))
    } else {
      showingBooks = books
    }
    return(
      <div className="search-books">
        <div className="search-books-bar">
          <Link className="close-search" to="/">Close</Link>
          <div className="search-books-input-wrapper">
            <input type="text" 
                   placeholder="Search by title or author"
                   value={query}
                   onChange={(event) => this.updateQuery(event.target.value)}/>
          </div>
        </div>
        <div className="search-books-results">
          <ol className="books-grid">
            {showingBooks.map((book) =>(
            <li key={book.id}>
              <Book book={ book } updateBook={this.updateBook}/>
            </li>
            ))}
          </ol>
        </div>
      </div>
    )
  }
}

export default SearchBooks