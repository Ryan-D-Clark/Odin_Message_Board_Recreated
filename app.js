const path = require("node:path")
const express = require("express")
const app = express()
const assetsPath = path.join(__dirname, "public")
app.use(express.static(assetsPath))
const dotenv = require('dotenv');
dotenv.config();
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true })) 

const messageRoute = require("./routes/messageRoute")
app.use("/", messageRoute)

app.listen(process.env.PORT, (error) => {
  if (error) {
    throw error
  }
  console.log(`My first Express app - listening on port ${process.env.PORT}!`)
})

