//import statement
const express = require('express');
const dotenv=require("dotenv")
const authRouter=require("./routes/auth")
//configuration
dotenv.config();
const port=process.env.PORT || 8000;

//app or server start
const app=express();

//middlewares
app.use(authRouter);

//routes
//four type of req method: get,post,put,delete
app.get('/', (req, res) => {
    res.send('Hello World!...');
});

//listen
app.listen(port, () => {
    console.log(`server started at port ${port}`);
});