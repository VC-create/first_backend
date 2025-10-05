//importing express into codebase
const express = require('express');

const app = express();

//the adress of this server is what is started by github codespaces
//the port given by them
const PORT = 8000;

let data={
    name:"vedika"
}

//can seperate endpoints into website endpoints and API endpoints
//wesbite endpoints send back html and typically when a user enters url in browser
//this is our home route with just one slash
//together these create the endpoint: the HTTP verb tells which type of request it is 
// and the route tells where to go and what to do 


//add the HTTP verbs (GET, POST, etc) and routes(paths like /dashbaord, etc)
app.get('/', (req,res)=>{
    //this is also called an endpoint and its the / route
    //console.log("Yay I hit an endpoint", req.method);
    //res.sendStatus(200);

    //you can send the page html code and that's how it creates the website
    res.send('<h1>this is actually a website now (html page)<input>')
});

app.get('/dashboard',(req,res)=>{
    //console.log("this is the /dashbaord endpoint");
    res.send("<h1>dashbaord<h1>");
});

//API endpoints is when the user submits something and it redirects them (nonvisual)
app.get('/api/data',(req,res)=>{
    console.log("this is for data");
    res.send(data);
});


//starting a server
//this needs to be at the very bottom because the code needs to be configured
app.listen(PORT, ()=>{
    //template string
    console.log(`Server has started on: ${PORT}`);
});
