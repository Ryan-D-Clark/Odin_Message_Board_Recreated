const db = require("../db/queries")
const check = require("express-validator");
const { validationResult } = check;

async function getMessages(req,res){
    let messages = await db.getAllMessages()
    console.log("Testing")
    console.log("Messages: ", messages)
    res.render("index", {messages:messages})
}

async function getMessage(req,res){
    let message = await db.getMessage(req.params.id)
    console.log(req.params.id, "req id")
    console.log(message, "message")
    res.render("message", {message:message})
}

async function createMessageGet(req,res){
    res.render("form")
}

async function createMessagePost(req,res, next){
    const errors= validationResult(req);
    if (!errors.isEmpty()) {
        return res.render("form", {errors:errors.array()[0].msg, username:req.body.username, message:req.body.message});
     }
    console.log(req.body.username, req.body.message)
    await db.postMessage(req.body.username, req.body.message)
    res.redirect("./")
    next()
}

module.exports = {
    getMessages,
    getMessage,
    createMessageGet,
    createMessagePost
}