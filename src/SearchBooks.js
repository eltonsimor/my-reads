import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './App.css'
import Book from './Book'
import * as BooksAPI from './BooksAPI'

class SearchBooks extends Component{

  constructor(props){
    super(props)
    this.state = {
      query: '',
      books: [],
    }
    this.updateBook = this.updateBook.bind(this)
  }



  updateQuery = (query) => {
    this.setState({ query: query })
    BooksAPI.search(query, 1000).then(books => {
        this.setState({books})
    })
  }

  updateBook(book, shelf){
    this.props.updateBook(book, shelf)
    this.props.history.push('/')
  }

  render(){
    const { query, books } = this.state
    let showingBooks=[];


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
            {books.map((book) =>(
            <li key={book.id}>
              <Book book={ this.props.books.find(b => b.id === book.id) || book } updateBook={this.updateBook} />
            </li>
            ))}
          </ol>
        </div>
      </div>
    )
  }
}

export default SearchBooks