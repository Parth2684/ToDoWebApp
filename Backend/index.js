const express = require("express");
const cors = require("cors")
const { createTodo, updateTodo } = require("./types");  
const { todo } = require("./db");
const app = express();
const port = 3000;

app.use(express.json())
app.use(cors({
    origin: "http://localhost:5173"
}));

app.post("/todo", async (req, res)=>{
    const createPayload = req.body;
    const parsedPayload = createTodo.safeParse(createPayload);
    if(!parsedPayload.success){
        res.status(411).json({
            msg: "Wrong Inputs"
        });return
    }
    await todo.create({
        title: createPayload.title,
        description: createPayload.description,
        completed: false
    })
    res.json({
        msg: "To Do Created"
    })
});

app.get("/todos", async (req, res)=>{
    const response = await todo.find({})
    res.json({
        response
    })
});

app.put("/completed", async (req, res)=>{
    const updatePayload = req.body;
    const parsedPayload = updateTodo.safeParse(updatePayload);
    if(!parsedPayload){
        res.status(411).json({
            msg: "Wrong Inputs"
        });
        return;
    }
    await todo.updateOne({
        _id: req.body.id
    }, {
        completed: true
    })
    res.json({
        msg: "To Do Marked as completed"
    })
});

app.listen(port, ()=>{
    console.log(`Your Todo App is Listening on port: ${port}`);
})
