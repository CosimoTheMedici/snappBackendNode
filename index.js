const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors');

const app = express();
const PORT = 5050;

app.use(bodyParser.json());
app.use(cors())
const dataRoutes =  require('./src/router/routes')

app.use('/movies',dataRoutes);

app.get('/',(req,res)=> res.send("Hello from homepage=="))

app.listen(PORT,()=>console.log("server on port 5000"));
