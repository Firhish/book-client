import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import './Home.css';
import Header from '../header/Header';

function Home({ books }) {

    const navigate = useNavigate();

    return (
        <>
            <Header title={"Home"} customButtonTitle={"Add new book"} customButtonFunction={() => { navigate(`/addBook`) }}/>
            <div className='book-card-container'>
                {books.map((book) => {
                    return <>
                        <div className="book-card">
                            <div className='book-card-click-area' key={book._id} onClick={() => { navigate(`/single/${book._id}`) }} >{book.title}</div>
                            <Button type='button' className='update-button' onClick={() => { navigate(`/updateTitle/${book._id}`) }}>Update Title</Button>
                        </div></>
                })}
            </div>
        </>

    );
}

export default Home;