import React, { useState } from 'react';

const BookForm = () => {
  const [bookData, setBookData] = useState({
    name: '',
    description: '',
    authorName: '',
    category: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setBookData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Assuming you have an API endpoint to save the book data
    fetch('http://localhost:3000/api/book', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(bookData),
    })
      .then(response => response.json())
      .then(data => {
        // Handle success, e.g., show a success message
        alert('Book saved successfully:');
      })
      .catch(error => {
        // Handle error, e.g., show an error message
        console.error('Error saving book:', error);
      });
  };

  return (
    <div>
      <h2>Add a New Book</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Book Name:
          <input
            type="text"
            name="name"
            value={bookData.name}
            onChange={handleChange}
            required
          />
        </label>
        <br />
        <label>
          Description:
          <textarea
            name="description"
            value={bookData.description}
            onChange={handleChange}
            required
          ></textarea>
        </label>
        <br />
        <label>
          Author Name:
          <input
            type="text"
            name="authorName"
            value={bookData.authorName}
            onChange={handleChange}
            required
          />
        </label>
        <br />
        <label>
          Category:
          <input
            type="text"
            name="category"
            value={bookData.category}
            onChange={handleChange}
            required
          />
        </label>
        <br />
        <button type="submit">Save Book</button>
      </form>
    </div>
  );
};

export default BookForm;
