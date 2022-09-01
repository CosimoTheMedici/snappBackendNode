const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors');

const app = express();
const PORT = 4000;
var server_host = process.env.YOUR_HOST || '0.0.0.0';
app.use(bodyParser.json());
app.use(cors())
const dataRoutes =  require('./src/router/routes')

app.use('/movies',dataRoutes);

app.get('/',(req,res)=> res.send("Hello from homepage=="))

app.listen(PORT,server_host,()=>console.log("server on port 4000"));

