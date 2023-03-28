/*
1. set up express
2.set up routes
3.create scheama
4.add connection
5.add new data to schema
6.get single user by id
7.save schema

*/

const express = require('express')
const app = express();
const mongoose = require('mongoose')
const port = process.env.PORT || 3000;
const DB_URL = process.env.PORT || 'mongodb://localhost:27017/blogsApp'

const {postsRouter} = require('./routes/post')
const {usersRouter} = require('./routes/user')



app.use(express.json())
app.use(express.urlencoded())
app.use(express.static('./public'))

app.use(['/users', '/user'], usersRouter)

app.use(['/posts', '/post'], postsRouter) 

// app.use(app.router);
// routes.initialize(app);

mongoose.connect(DB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}, (err) => {
    if (!err) return console.log("DB connected ")
    console.log("Error connect to Server")
})

app.listen(port, (err)=>{
    (err) ? console.log(err) : console.log(`http://localhost:${port}`)
}
)
