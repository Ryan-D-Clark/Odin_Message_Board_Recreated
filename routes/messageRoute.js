const express = require("express")
const router = express.Router()
const messageController = require("../controllers/messageController")

router.get("/", messageController.getMessages)

router.get("/new", messageController.createMessageGet)

router.post("/new", messageController.createMessagePost)

router.get("/message/:id", messageController.getMessage)


module.exports = router