import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import SearchBooks from './SearchBooks'
import LineBooks from './LineBooks'
import { Route } from 'react-router-dom'

class BooksApp extends React.Component {
  

  state = {
    showSearchPage: false,
    books: []
  }

  componentDidMount(){
    BooksAPI.getAll().then((books) => {
      this.setState({ books })
    })
  }

  updateBook(book, shelf){
    BooksAPI.update(book, shelf)
  }

  render() {
    return (
      <div className="app">
        <Route path="/search" render={()=> (
          <SearchBooks books={ this.state.books } updateBook={this.updateBook}/>
        )} />
        <Route exact path="/" render={() => (
          <LineBooks />
        )} />
      </div>
    )
  }
}

export default BooksApp
