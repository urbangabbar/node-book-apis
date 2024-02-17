import React, { useState, useEffect } from 'react';

const BookList = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    // Fetch books from the API
    fetch('http://localhost:3000/api/book')
      .then(response => response.json())
      .then(data => {
        // Set the retrieved books in the state
        setBooks(data);
      })
      .catch(error => {
        console.error('Error fetching books:', error);
      });
  }, []); // Empty dependency array ensures the effect runs only once on component mount

  return (
    <div>
      <h2>Book List</h2>
      <ul>
        {books.map(book => (
          <li key={book.id}>
            <strong>{book.name}</strong> - {book.description}<br />
            Author: {book.authorName}<br />
            Category: {book.category}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BookList;