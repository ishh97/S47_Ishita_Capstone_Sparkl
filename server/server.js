import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";

import UserModal from "./Schemes/user.scheme.js"
import BookModal from "./Schemes/books.scheme.js"
import BlogModal from "./Schemes/blog.scheme.js"
import WatchListModal from "./Schemes/watchlist.scheme.js"

dotenv.config();
const app =express()
app.use(express.json());

mongoose.connect(process.env.MONGOOSE_CONNECTION, {dbName:"SparklCapstone"})
  .then(() => {
    console.log("MongoDB connected successfully");
  })
  .catch(err => {
    console.error("Error connecting to MongoDB:", err);
  });

app.get('/', (req, res) => {
    res.send('Welcome to the server!');
})

app.get('/user', (req, res) => {
  UserModal.find({})
  .then(users => res.json(users))
  .catch(err => res.json(err))
})

app.get('/blog', (req, res) => {
  BlogModal.find({})
  .then(users => res.json(users))
  .catch(err => res.json(err))
})

app.get('/books', (req, res) => {
  BookModal.find({})
  .then(users => res.json(users))
  .catch(err => res.json(err))
})

app.get('/watchList', (req, res) => {
  WatchListModal.find({})
  .then(users => res.json(users))
  .catch(err => res.json(err))
})

app.listen(2004, () => {
    console.log('🚀 Server is running on port 2004');
});
