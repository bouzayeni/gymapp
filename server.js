const express = require ('express')
const app = express();
const path = require('path');
require('dotenv').config() ;
//database config
const connectDB = require('./server/config/connectDB');
connectDB();

app.use(express.json());





const cors = require('cors');
app.use(cors('http://localhost:3000'));


// routes
app.use('/api/person',require('./server/routes/personRoute'));
app.use('/api/admin',require('./server/routes/adminRoute'));
app.use('/api/post',require('./server/routes/postRoute'));
app.use('/api/comment',require('./server/routes/commentRoute'));
// images path
app.use('/uploads',express.static(path.join(__dirname, '../','img-uploads')))

// rendering the front end 

app.use(express.static(path.join(__dirname, 'client','build')))
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "client", "build", "index.html"));
  });



app.listen(process.env.PORT, (err)=>err?console.log(err):console.log(`server is runing`))