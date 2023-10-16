const studentModel = require("../db/model/student.model")


const postController = async(req,res) =>{
    console.log(req.body);
    let { email } = req.body
    // const student = new studentModel(req.body)
    //  student.save()
    //  res.send("data is send to db")

    let isUserAvailable = await studentModel.findOne({email:email})
    if(isUserAvailable){
        res.send({message:"user already  existed"})
    }else{
        const student = new studentModel(req.body)
        student.save()
        res.status(201).send({message:"data stored in db"})
    }
}

const getController = async(req , res) => {
   let data = await studentModel.find()
    console.log(data);
    res.json(data)
}

const studentLoginControll= async(req , res)=> {
console.log(req.body);
let studentDetail = await studentModel.findOne({email : req.body.email})

if(studentDetail){
    // res.send(studentDetail)
    if(studentDetail.password == req.body.password){
        let studentData = await studentModel.findOne({email : req.body.email}).select("-password")
        res.send(studentData)
    }
    else{
        res.send({message:"password is incorrect!!! try again"})
    }
}else{
    res.send({message:"USER NOT FOUND"})
    
}
}


module.exports = {postController , getController , studentLoginControll}