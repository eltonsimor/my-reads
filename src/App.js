import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import SearchBooks from './SearchBooks'
import LineBooks from './LineBooks'
import { Route } from 'react-router-dom'
import Loader from 'halogen/PulseLoader'

class BooksApp extends React.Component {
  

  state = {
    showSearchPage: false,
    books: [],
    loading: false
  }

  getBooks = () => {
    BooksAPI.getAll().then((books) => {
      this.setState({ books,loading:false })
    })
  }

  componentWillMount(){
    this.setState({loading:true})
    this.getBooks()
  }

  updateBook= (book, shelf) =>{
    this.setState({loading:true})
    BooksAPI.update(book, shelf).then(() => {
      this.getBooks()
    })
  }


  render() {
    return (
      <div className="app">

        {(this.state.loading) ? (
          <Loader
             color="#26A65B" size="16px" margin="4px" 
          />
        ) : (
        <div>
        <Route path="/search" render={({ history })=> (
          <SearchBooks books={ this.state.books } history={ history } updateBook={ this.updateBook }/>
        )} />
        <Route exact path="/" render={() => (
          <LineBooks books={ this.state.books } updateBook={ this.updateBook } />
        )} />
        </div>
        )}
          
        
        
        
      </div>
    )
  }
}

export default BooksApp
