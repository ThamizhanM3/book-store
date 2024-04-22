import React, { useEffect, useState } from 'react'
import BackButton from '../components/BackButton'
import Spinner from '../components/Spinner'
import axios from 'axios'
import { useNavigate, useParams } from 'react-router-dom'
import { useSnackbar } from "notistack";

const EditBook = () => {
    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');
    const [publishYear, setPublishYear] = useState('');
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
    const { id } = useParams();
    const { enqueueSnackbar } = useSnackbar();

    useEffect(() => {
        // setLoading(true);
        // axios
        //     .get(`https://book-store-or5q.onrender.com/books/${id}`)
        //     .then((response) => {
        //         setAuthor(response.data.author)
        //         setTitle(response.data.title)
        //         setPublishYear(response.data.publishYear)
        //         setLoading(false)
        //         console.log('hello')
        //     })
        //     .catch((error) => {
            //         alert('error occured')
            //         console.log(error)
            //     })
            fetchBook()
    }, [])

    const fetchBook = async () => {
        const response = await fetch(`https://book-store-or5q.onrender.com/books/${id}`)
        const data = await response.json()
        setAuthor(data.author)
        setTitle(data.title)
        setPublishYear(data.publishYear)

    }

    const handleEditBook = () => {
        const data = {
            title,
            author,
            publishYear
        };
        setLoading(true);
        axios
            .put(`https://book-store-or5q.onrender.com/books/${id}`, data)
            .then(() => {
                setLoading(false);
                enqueueSnackbar('Book Edited Sucessfully', { variant: 'success' })
                navigate('/')
            })
            .catch((error) => {
                setLoading(false)
                alert('Error Occured... Check Console');
                enqueueSnackbar('Error', { variant: 'error' })
                console.log(error)
            })
    }
    return (
        <div className='p-4'>
            <BackButton />
            <h1 className="text-3xl my-4">Edit Book</h1>
            { loading ? <Spinner /> : '' }
            <div className="flex flex-col border-2 border-sky-400 rounded-xl w-[600] p-4 mx-auto">
                <div className="my-4">
                    <label htmlFor="" className="text-xl mr-4 text-grey-500">Title</label>
                    <input type="text" name="" id="" value={title} onChange={(e) => {setTitle(e.target.value); console.log(e.target.value)}} className='border-2 border-grey-500 px-4 py-2 w-full' />
                </div>
                <div className="my-4">
                    <label htmlFor="" className="text-xl mr-4 text-grey-500">Author</label>
                    <input type="text" name="" id="" value={author} onChange={(e) => {setAuthor(e.target.value)}} className='border-2 border-grey-500 px-4 py-2 w-full' />
                </div>
                <div className="my-4">
                    <label htmlFor="" className="text-xl mr-4 text-grey-500">Publish Year</label>
                    <input type="text" name="" id="" value={publishYear} onChange={(e) => {setPublishYear(e.target.value)}} className='border-2 border-grey-500 px-4 py-2 w-full' />
                </div>
                <button className="p-2 bg-sky-300 m-8" onClick={handleEditBook}>
                    Save
                </button>
            </div>
        </div>
    )
}

export default EditBook
