import React from 'react'
import Book from './Book'

function RenderingLists() {
    const booklist = [
        "to kill a mockingbird",
        "the great gatsby",
        "the catcher in the rye",
    ]

    const books = [
        {
            title: "to kill a mockingbird",
            author: "harper lee",
            pages: 281,
        },
        {
            title: "the great gatsby",
            author: "f. scott fitzgerald",
            pages: 218,
        },
        {
            title: "the catcher in the rye",
            author: "j. d. salinger",
            pages: 234,
        },
    ]

    return (
        <div>
            {booklist.map(book => {
                return <h2 key={book}>{book}</h2>
            })}
            <hr></hr>
            {books.map(book => {
                return (
                    <div key={book.title}>
                        <h5>{book.title}</h5>
                        <p>{book.author}</p>
                        <p>{book.pages}</p>
                    </div>
                )
            })}
            <hr></hr>

            {
                books.map(book => {
                    return <Book key={book.title} book={book}/>
                })
            }

            <hr></hr>
            
            {/* When to use index as a key
            {
                books.map((book, index) => {
                    return <Book key={index} book={book}/>
                })
            }

                1. Use index only if no unique IDs are available
                2. The list of elemens you're rendering must be static
                3. Your list must never be sorted or filtered

                How to get a unique key?
                1. Derive one from list item's properties
                2. Use on of npm's libraries, i.e. uuid, uuidv4, nanoid, etc
            */}

        </div>
    )
}

export default RenderingLists