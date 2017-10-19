import React, { Component } from 'react'
import Book from './Book'

class LineBook extends Component{

    state = {
        showingBooksByShelf: [] 
    }

    filterBooksByShelf(books, code){
        this.setState({ showingBooksByShelf: books.filter((book) => book.shelf === code) })
     }

     componentWillMount(){
         this.filterBooksByShelf(this.props.books, this.props.shelf.code )
     }

    render(){
        const { shelf } = this.props
        const { showingBooksByShelf } = this.state
        return(
            <div className="bookshelf">
                <h2 className="bookshelf-title">{ shelf.title }</h2>
                <div className="bookshelf-books">
                    <ol className="books-grid">
                        {showingBooksByShelf.map((book) => (
                            <li key={ book.id }>
                                <Book book={ book }/>
                            </li>
                        ))}
                    </ol>
                </div>
            </div>
        )
    }
}

export default LineBook