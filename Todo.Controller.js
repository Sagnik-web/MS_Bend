const TODO = require("./Todo.Model")


exports.createTodo =async(req,res)=>{
    const todo = await TODO.create(req.body)
    res.status(200).json({
        success:true,
        todo
    })
}