import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import SearchBooks from './SearchBooks'
import LineBooks from './LineBooks'
import { Route } from 'react-router-dom'
import Loader from 'halogen/PulseLoader'

class BooksApp extends React.Component {
  
  constructor(props){
    super(props);
    this.state = {
      showSearchPage: false,
      books: [],
      loading: false,
      shelfTitles: []
    }
  }

  getBooks = () => {
    BooksAPI.getAll().then((books) => {
      this.setState({ books,loading:false })
    })
  }

  componentWillMount(){
    this.setState({ loading:true })
  }

  componentDidMount(){
    this.loadingShelfTitles()
    this.getBooks()
  }

  loadingShelfTitles = () => {
      let shelfTitles = [
        { title: 'Currently Reading', code: 'currentlyReading' },
        { title: 'Want to Read', code: 'wantToRead' },
        { title: 'Read', code: 'read' }
      ]
      this.setState({ shelfTitles })
  }

  updateBook(book, shelf) {
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
          <div>x
            <Route path="/search" render={({ history })=> (
              <SearchBooks books={ this.state.books } updateBook={ (book, shelf) => {
                this.updateBook(book, shelf) 
                history.push('/')
              }}/>
            )} />
            <Route exact path="/" render={({ history }) => (
              <LineBooks 
                books={ this.state.books }
                shelfTitles={ this.state.shelfTitles }
                updateBook={ this.updateBook }
              />
            )} />
          </div>
        )}
      </div>
    )
  }
}

export default BooksApp
