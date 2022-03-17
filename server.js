//import statements
const express=require("express")
const mongoose = require("mongoose")
const dotenv = require("dotenv");
const studentRoutes=require("./routes/student")

//configuration
dotenv.config();
const port = process.env.PORT || 8000;
mongoose.connect(process.env.DATABASE_URL,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    }).then(() => console.log("db connected successfully"))
    .catch(err => console.log(err))


//app or server start
const app = express();


//middlewares
app.use(express.json());   // converts the incoming request body into json format
app.use("/student",studentRoutes); 

//routes
app.get("/", (req, res) => {
    res.send("Hey MongoDB")
    })


//listen
app.listen(port,()=>console.log(`server started at ${port}`))