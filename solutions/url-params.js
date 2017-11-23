'use strict'

var express = require('express')
var crypto = require('crypto')

var app = express()

app.put('/message/:id', (req,res) => {
  var id = req.params.id
  var str = crypto
	.createHash('sha1')
	.update(new Date().toDateString() + id)
	.digest('hex')
  res.send(str)
})

app.get('/message/:id', (req,res) => {
  var id = req.params.id
  var str = crypto
	.createHash('sha1')
	.update(new Date().toDateString() + id)
	.digest('hex')
  res.send(str)
})

app.listen(process.argv[2])
