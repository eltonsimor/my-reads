import React, { Component } from 'react'

class Book extends Component{
    
    constructor(props){
        super(props)
        this.updateBook = this.updateBook.bind(this)
    }

    state = {
        shelf:'none'
    }

    componentDidMount() {
        if(this.props.book.shelf){
            this.setState({shelf: this.props.book.shelf});
        }
    }

    updateBook = (book, shelf) =>{
        this.props.updateBook(book, shelf)
    }

    render(){
        const { book } = this.props
        const { shelf } = this.state
        return(
            <div className="book">
                <div className="book-top">
                    <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${book.imageLinks.thumbnail})` }}></div>
                    <div className="book-shelf-changer">
                    <select value={ shelf } onChange={(e) => this.updateBook(book, e.target.value)}>
                        <option value="moveTo" disabled>Move to...</option>
                        <option value="currentlyReading">Currently Reading</option>
                        <option value="wantToRead">Want to Read</option>
                        <option value="read">Read</option>
                        <option value="none">None</option>
                    </select>
                    </div>
                </div>
                <div className="book-title">{book.title}</div>
                <div className="book-authors">{book.authors}</div>
            </div>
        )
    }
}

export default Book