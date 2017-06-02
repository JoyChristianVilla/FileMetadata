//Set-up for all the necessary modules
var express = require('express');
var app = express();
var multer = require('multer');
var upload = multer({ dest: 'uploads/' })
var path = require('path')
//Use static method to identify directory for static files
app.use(express.static(path.join(__dirname, 'views')));
//upload.single('file') argument specifies that only a single file can be uploaded
app.post('/upload', upload.single('file'), function (req, res) {
  //When the post request is made to the /upload route, an object will be created
  var obj = {
    //The only property in the object is the size of the file, which we access through the file object that multer added to the req object
    size: req.file.size
  }
  //Send the object as the response
  res.send(obj);
})

//create the server on port 3000 with a callback function so we know when the server is running
app.listen(3000, function() {
  console.log('Congregation is running on port 3000');
});
