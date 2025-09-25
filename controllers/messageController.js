const db = require("../db/queries")

async function getMessages(req,res){
    let messages = await db.getAllMessages()
    console.log("Testing")
    console.log("Messages: ", messages)
    res.render("index")
}

async function getMessage(req,res){
    let message = await db.getMessage(req.params.id)
    console.log(req.params.id, "req id")
    res.render("message", {message:message})
}

async function createMessageGet(req,res){
    res.render("form")
}

async function createMessagePost(req,res){
    res.render("./")
}

module.exports = {
    getMessages,
    getMessage,
    createMessageGet,
    createMessagePost
}