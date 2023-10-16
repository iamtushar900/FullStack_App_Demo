const express = require ("express")

const PORT = 7000;
const Hostname = "127.0.0.5"



const dbConnect = require("./db/db")
const studentModel = require("./db/model/student.model")

//routing files
const studentRouter = require("./routers/student.router")

const app = express()
//middleware
app.use(express.json())
const cors = require("cors")


app.use(cors({
    origin:"http://localhost:3000"
}))

//routers

app.use("/student",studentRouter)


app.post("/post",async (req , res) =>{
    console.log(req.body);
    let product = new studentModel(req.body)
    await product.save()
    res.status(201).send({"message":"data send to student Data Base"})
})


app.listen(PORT ,Hostname , async() =>{
    await dbConnect()
    console.log(`server is started at http://${Hostname}:${PORT}`);
})