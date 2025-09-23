async function getMessages(req,res){
    res.render("index")
}

async function getMessage(req,res){
    console.log(req.params.id)
    res.render("message")
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