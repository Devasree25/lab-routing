// App.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const API_URL = 'https://reactnd-books-api.udacity.com/books';
const HEADERS = {
  'Authorization': 'whatever-you-want'
};

function App() {
  const [books, setBooks] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    axios.get(API_URL, { headers: HEADERS })
      .then((response) => {
        setBooks(response.data.books);
      })
      .catch((error) => {
        console.error('Failed to fetch books:', error);
      });
  }, []);

  const handleSearch = () => {
    if (searchTerm.trim() === '') {
      // If the search term is empty, display all books
      setSearchResults([]);
    } else {
      // Filter books based on the search term
      const filteredResults = books.filter(book =>
        book.title.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setSearchResults(filteredResults);
    }
  };

  return (
    <div className="app-container">
      <div className="header">
        <img
          src="https://s3.ap-south-1.amazonaws.com/kalvi-education.github.io/front-end-web-development/Kalvium-Logo.png"
          alt="Kalvium Logo"
          className="logo"
        />
      </div>

      <div className="search-bar">
        <input
          type="text"
          placeholder="Search Books...and press the search-icon"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="search-input"
        />
        <button className="search-button" onClick={handleSearch}>
          <img
            src="https://img.icons8.com/ios-filled/30/000000/search.png"
            alt="Search Icon"
            className="search-icon"
          />
        </button>
      </div>

      <div className="book-list">
        {searchResults.length > 0 || searchTerm.trim() === '' ? (
          (searchResults.length > 0 ? searchResults : books).map((book) => (
            <div key={book.id} className="book-card">
              <img src={book.imageLinks.thumbnail} alt={book.title} className="book-image" />
              <div className="book-details">
                <h3 className="book-title">{book.title}</h3>
                <div className="book-authors">
                  {book.authors.map((author, index) => (
                    <span key={index} className="author-name">{author}</span>
                  ))}
                </div>
                <div className="book-info">
                  <p className="book-rating">Rating: {book.rating || '3.7⭐⭐⭐'}</p>
                  <p className="book-cost">Free</p>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p className="no-results"> Oops !😥No Results Found</p>
        )}
      </div>
    </div>
  );
}

export default App;











