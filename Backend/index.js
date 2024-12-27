const express = require("express");
const app = express();
const port = 3000;

app.use(express.json())

app.post("/todo", (req, res)=>{

});

app.get("/todos", (req, res)=>{

});

app.put("/completed", (req, res)=>{

});

app.listen(port, ()=>{
    console.log(`Your Todo App is Listening on port: ${port}`);
})
