const express = require("express")
const router = express.Router()
const messageController = require("../controllers/messageController")
const check = require("express-validator");
const checkFunction = check.check;


router.get("/", messageController.getMessages)

router.get("/new", messageController.createMessageGet)

router.post("/new",checkFunction("username").notEmpty().withMessage("Please enter a username"), checkFunction("message").notEmpty().withMessage("Please enter your message")
, messageController.createMessagePost)

router.get("/message/:id", messageController.getMessage)


module.exports = router