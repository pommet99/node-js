const express = require('express')
const app = express()
const port = 8000

app.use(express.static('public'));

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(8000, () => {
  console.log(`Example app listening at http://localhost:8000`)
})