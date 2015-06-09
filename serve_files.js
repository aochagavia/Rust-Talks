var express = require('express');
var app = express();

app.use(express.static('.'));
app.listen(80, function() {
    console.log('Serving files on port 80');
});
