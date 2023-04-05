const express = require("express");
const app = express();
const port = 3000

app.get("/api/login", (req, res) => {
    res.send("hello nha!")
})

app.listen(port, () => {
    console.log(`listen on port ${port}`)
})