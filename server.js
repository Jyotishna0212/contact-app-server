//  Basic express server create --responcse and request 
const express = require("express");
const  dotenv = require("dotenv").config();
const app = express();
const port = process.env.PORT || 5000;

 app.listen(port,()=>{
    console.log(`server runnig on port ${port}`)
    //  This is static server 
 });