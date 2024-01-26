import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function AddBook({ addSingleBook }) {
    const navigate = useNavigate();
    const [title,setTitle] = useState('');
    const [author,setAuthor] = useState('');
    const [genre,setGenre] = useState('');
    const [year,setYear] = useState('');

    const handleSubmit = (e) =>{
        e.preventDefault();
        addSingleBook(title,author,genre,year);
        navigate(`/`);
    }

    return (
        <div>
      <form onSubmit={handleSubmit}>
        <label>Title:</label>
        <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} required />

        <label>Author:</label>
        <input type="text" value={author} onChange={(e) => setAuthor(e.target.value)} required />

        <label>Genre:</label>
        <input type="text" value={genre} onChange={(e) => setGenre(e.target.value)} required />

        <label>Year:</label>
        <input type="text" value={year} onChange={(e) => setYear(e.target.value)} required />

        <button type="submit">Add Book</button>
      </form>
    </div>
    );
}

export default AddBook;