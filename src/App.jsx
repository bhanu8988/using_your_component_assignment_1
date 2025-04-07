import React from 'react';
import BookCard from './components/bookcard';
import './App.css'; // Optional, in case you want to style the container

const books = [
  {
    title: 'The Great Gatsby',
    author: 'F. Scott Fitzgerald',
    cover: 'https://m.media-amazon.com/images/I/81af+MCATTL.jpg',
  },
  {
    title: 'To Kill a Mockingbird',
    author: 'Harper Lee',
    cover: 'https://m.media-amazon.com/images/I/81OdwZ8Vw-L.jpg',
  },
  {
    title: '1984',
    author: 'George Orwell',
    cover: 'https://m.media-amazon.com/images/I/71kxa1-0mfL.jpg',
  },
];

function App() {
  return (
    <div className="app">
      <h1>Digital Library</h1>
      <div className="book-list">
        {books.map((book, index) => (
          <BookCard
            key={index}
            title={book.title}
            author={book.author}
            cover={book.cover}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
