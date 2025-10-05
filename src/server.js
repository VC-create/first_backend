//importing express into codebase
import express from "express"

const app = express();

//the adress of this server is what is started by github codespaces
//the port given by them
const PORT = process.env.PORT || 8000;

let data=[
    "vedika"
]

//Middleware
app.use(express.json())

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
    res.send(`
        <body style="background:pink color:blue">
        <h1>DATA</h1>
            <p>${JSON.stringify(data)}</p>
            <a href="/dashboard">Dashboard</a>
        </body>
        `);
});

app.get('/dashboard',(req,res)=>{
    //console.log("this is the /dashbaord endpoint");
    res.send("<h1>dashbaord<h1>");
});

//API endpoints is when the user submits something and it redirects them (nonvisual)

//method is in paranthesis - HTTP verb in parathesis
//CRUD = create (post), read (get), update(put), delete (delete)

app.get('/api/data',(req,res)=>{
    console.log("this is for data");
    res.send(data);
});

app.post('/api/data', (req,res)=>{
    //someone wants to create a user when they press a sign up button
    //the user clicks on the sign up button and their browser is wired to
    //send out a network request to the server to hangle that action
    const newEntry = req.body
    data.push(newEntry.name)
    res.sendStatus(201)
});

//starting a server
//this needs to be at the very bottom because the code needs to be configured
app.listen(PORT, ()=>{
    //template string
    console.log(`Server has started on: ${PORT}`);
});
