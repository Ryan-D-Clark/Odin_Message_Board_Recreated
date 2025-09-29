const pool = require("./pool")

async function getAllMessages(){
    const {rows} = await pool.query("SELECT * FROM messages")
    return rows
}

async function getMessage(id){
    const {rows} = await pool.query(`SELECT * FROM messages WHERE id = ${id} `)
    console.log(rows)
    return rows
}

async function postMessage(username, message){
    const result = await pool.query(`INSERT INTO messages (username,message,date) VALUES ('${username}','${message}',current_timestamp)`)
    console.log(result)
}

module.exports = {
    getAllMessages,
    getMessage,
    postMessage
}