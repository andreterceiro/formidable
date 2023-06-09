
const express = require('express')
const app = express()
const port = 3000
app.set('view engine', 'ejs');
app.set('views', 'views');
const formidable = require('formidable');
const fs = require('fs');

app.get('/', (req, res) => {
  res.render('index')
})

app.post("/upload", function(req, res) {
  var form = new formidable.IncomingForm();
  form.parse(req, function (err, fields, files) {
    console.log(fs.readFileSync(files.upload.filepath, 'utf8'));
    res.write('File uploaded');
    res.end();
  });
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

