
const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const cors = require('cors')

app.use(bodyParser.json())
app.use(cors())
app.get("/status", (req, res) => {
  res.status(200).json({ "status": "UP" })
})
app.listen(3000, () => {
  console.log('Server running on port 3000');
});