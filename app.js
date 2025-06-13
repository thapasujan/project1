const app = require("express")()
const mongoose = require("mongoose")
const { connectDatabase } = require("./database/database")

connectDatabase()

// GET API 
app.get("/", (req, res) => {
    res.json({
        status: 200,
        message: "Success",
        data: "Hello World"
    })
})



app.listen(3000, (req, res) => {
    console.log("server is running on port 3000")
})