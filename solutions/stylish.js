var express = require('express');
var app = express();
app.use(require('stylus').middleware('solutions/stylish'));
app.use(express.static('solutions/stylish'));
app.listen(process.argv[2]);
