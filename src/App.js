import { useEffect } from 'react';
import api from './api/axiosConfig';
import './App.css';
import { useState } from 'react';
import { Routes, Route} from 'react-router-dom';
import Layout from './Layout';
import Home from './components/home/Home';
import Single from './components/single/Single';
import AddBook from './components/addBook/AddBook';
import UpdateTitle from './components/updateTitle/UpdateTitle';

function App() {

  const [books,setBooks] = useState([]);
  const [book,setBook] = useState();

  const getBooks = async () =>{
    try{
      const response = await api.get("/api/v1/books");
      setBooks(response.data);
      console.log(response.data);
    } catch(err){
      console.log(err)
    }
  }

  const getSingleBook = async (bookId) =>{
    try{
      const response = await api.get(`/api/v1/books/${bookId}`);
      const singleBook = response.data;
      setBook(singleBook);
    }
    catch(err){
      console.log(err);
    }
  }

  const addSingleBook = async (title, author, genre, year) =>{
    try{
      const response = await api.post(`/api/v1/books`, {title: title, author: author, genre: genre, year: year});
      // const newBook = response.data;
      // setBooks((prevBooks)=>[...prevBooks,newBook]);
      getBooks();
    }
    catch(err){
      console.log(err);
    }
  }

  const deleteSingleBook = async(bookId) =>{
    try{
      const response = await api.delete(`/api/v1/books/${bookId}`);
      if(response.status === 200){
        console.log(response.data);
        getBooks();
      } else{
        console.log('Delete failed');
      }
    }
    catch(err){
      console.log(err);
    }
  }

  const updateBookTitle = async(newTitle,bookId) =>{
    try{
      const response =  await api.put(`/api/v1/books/${bookId}`,{ title: newTitle });
      getBooks();
    } catch(err){
      console.log(err)
    }
  }



  useEffect(()=>{
    getBooks();
  },[])

  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Layout/>}>
          <Route path='/' element={<Home books={books}/>}/>
          <Route path='/single/:id' element={<Single getSingleBook={getSingleBook} book={book} deleteSingleBook={deleteSingleBook}/>}/>
          <Route path='/addBook' element={<AddBook addSingleBook={addSingleBook}/>}/>
          <Route path='/updateTitle/:id' element={<UpdateTitle updateBookTitle={updateBookTitle} getSingleBook={getSingleBook} book={book}/>}/>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
