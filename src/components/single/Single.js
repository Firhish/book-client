import React, { useEffect } from 'react';
import { useParams } from "react-router-dom";
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

function Single({ getSingleBook, book, deleteSingleBook }) {

    let params = useParams();
    let key = params.id;
    const navigate = useNavigate();

    useEffect(() => {
        getSingleBook(key);
    }, [])

    return (
        <div>
            <p>{book?.title}</p>
            <p>{book?.author}</p>
            <p>{book?.genre}</p>
            <p>{book?.year}</p>
            <Button onClick={() => {
                console.log(book._id);
                deleteSingleBook(book._id)
                navigate('/');

            }}>Delete Book</Button>
        </div>
    );
}

export default Single;