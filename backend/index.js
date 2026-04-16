import express, { request, response } from 'express';
import { PORT, mongoDBURL } from "./config.js";
import mongoose from 'mongoose';
import { Book } from './models/bookModel.js';
import booksRoute from './routes/booksRoute.js';
import cors from 'cors';
import dotenv from "dotenv";

const app = express();

app.use(express.json())

dotenv.config();

app.use(cors({
    origin: '*',
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-type']
}))

app.get('/', (request, response) => {
    console.log(request)
    return response.status(234).send('MERN Project')
});

app.use('/books', booksRoute)

mongoose
.connect(mongoDBURL)
.then((result) => {
    console.log('Connected to MongoDB')
    app.listen(PORT, () => {
        console.log(`App is listening to port: ${PORT}`);
    });
    }).catch((err) => {
        console.log(err)
    });