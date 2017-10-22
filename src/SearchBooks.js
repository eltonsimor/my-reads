import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './App.css'
import Book from './Book'
import * as BooksAPI from './BooksAPI'
import { Debounce } from 'react-throttle';

class SearchBooks extends Component{

  state = {
    books: []
  }

  search = (val) => {
    if(val){
      BooksAPI.search(val, 1000).then(books => {
        if(books.error){
          books = []
        }
        this.setState({books})
      })  
    } else {
      this.setState({books:[]})
    }
  }

  updateBook = (book, shelf) =>{
    this.props.updateBook(book, shelf)
  }

  render(){
    const { books } = this.state

    return(
      <div className="search-books">
        <div className="search-books-bar">
          <Link className="close-search" to="/">Close</Link>
          <div className="search-books-input-wrapper">
            <Debounce time="200" handler="onChange">
              <input type="text" 
                    placeholder="Search by title or author"
                    onChange={(e) => this.search(e.target.value)}/>
            </Debounce>
          </div>
        </div>
        <div className="search-books-results">
          <ol className="books-grid">
            {books.map((book) =>(
            <li key={book.id}>
              <Book book={ this.props.books.find(b => b.id === book.id) || book } updateBook={ this.updateBook } />
            </li>
            ))}
          </ol>
        </div>
      </div>
    )
  }
}

export default SearchBooks