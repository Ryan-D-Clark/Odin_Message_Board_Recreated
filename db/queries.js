const pool = require("./pool")

async function getAllMessages(){
    const {rows} = await pool.query("SELECT * FROM messages")
    return rows
}

async function getMessage(id){
    const {rows} = await pool.query(`SELECT * FROM messages WHERE id = ${id} `)
    console.log(rows)
}

module.exports = {
    getAllMessages,
    getMessage
}