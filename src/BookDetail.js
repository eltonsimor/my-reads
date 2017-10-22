import React from 'react'
import * as BooksAPI from './BooksAPI'
import './BookDetail.css'
import './App.css'
import { Link } from 'react-router-dom'
import Loader from 'halogen/PulseLoader'
import Rating from 'react-rating'


class BookDetail extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            book:'',
            loading: true
        }
    }
    componentDidMount(){
        BooksAPI.get(this.props.match.params.id).then(book => {
            this.setState({book})
            this.setState({loading:false})
        })
    }
    render(){
        const { book } = this.state
        return(
            <div>
                {(this.state.loading) ? (
                    <Loader
                        color="#26A65B" size="16px" margin="4px" 
                    />
                ) : (
                    <div>
                        <div className="list-books-title">
                            <h1>MyReads</h1>
                        </div>
                        <Link className="close-search" to="/">
                            Go Home
                        </Link>
                        {book &&(
                            <table>
                                <tbody>
                                    <td>
                                        <img className="image-book-detail-center" src={ book.imageLinks.thumbnail } alt={ book.title } height="450" width="350" />
                                        <h3>Rating</h3>
                                        <Rating start={ 0 } stop={ 5 } initialRate={ book.averageRating }/>
                                    </td>
                                    <td>
                                        <h1 className="header-text-center">{ book.title }</h1>
                                        <h2 className="header-text-center">Description</h2>
                                        <p>{ book.description }</p>
                                        <a href={ book.previewLink } target="_blank">See Book</a>
                                    </td>                    
                                </tbody>
                            </table>
                        )}
                    </div>
                )}
            </div>
        )
    }
}

export default BookDetail