let express = require('express');
let app = express();
let PORT = 5555

app.use(express.static('public'));



app.listen(5555, function(){
    console.log('Listening on port:', PORT);  
})