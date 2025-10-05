//importing express into codebase
const express = require('express');

const app = express();
const PORT = 8000;

//starting a server
app.listen(PORT, ()=>{
    //template string
    console.log(`Server has started on: ${PORT}`);
});
