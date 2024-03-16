const express = require('express')
const MongoDB = require("./db")

const app = express()
const port = 5000

MongoDB();
app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})