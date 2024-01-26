import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import { useNavigate, useParams } from 'react-router-dom';

function UpdateTitle({ updateBookTitle, getSingleBook, book }) {

    const params = useParams();
    const key = params.id;
    const navigate = useNavigate();

    const [title,setTitle] = useState();

    useEffect(()=>{
        getSingleBook(key);
    },[])

    const handleSubmit = (e) =>{
        e.preventDefault();
        updateBookTitle(title,key);
        // console.log(title);

        navigate(`/`);
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
            <input title='title' onChange={(e) =>{setTitle(e.target.value)}} required/>
                <Button type='submit'>submit</Button>
            </form>
        </div>
    );
}

export default UpdateTitle;