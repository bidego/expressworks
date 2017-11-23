var express = require('express')
var app = express()
var fs = require('fs')

app.get('/books', (req, res) => {
  var file = process.argv[3] // || ''
  fs.readFile(file, (e, data) => {
    if(e) { return res.sendStatus(500) }
    try {
      objects = JSON.parse(data)
    } catch (e) {
      res.sendStatus(500)
    }
    res.json(objects)
  })
})

app.listen(process.argv[2] || 3000)
