import React, { Component } from 'react'
import Book from './Book'

class LineBook extends Component{

    render(){
        const { shelf, books } = this.props
        return(
            <div className="bookshelf">
                <h2 className="bookshelf-title">{ shelf.title }</h2>
                <div className="bookshelf-books">
                    <ol className="books-grid">
                        {books.map((book) => (
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