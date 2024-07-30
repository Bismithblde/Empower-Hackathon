const express = require('express')
const app = express()

app.get("/api", (req, res) => {
    res.json({"Test": ["Test1"]})
})

app.listen(4000, ()=> {
    console.log("Server Started on port 4000")
})