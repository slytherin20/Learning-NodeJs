const express = require("express");
const app = express();
const port = process.env.PORT || 3000;
const courses = require('./routes/courses');
const author = require('./routes/author');

app.use(express.json());
app.set('view engine','pug');
app.set('views','./views');
app.use('/courses',courses);
app.use('/',author);



app.listen(port,()=>{
    console.log("Server listening on port:",port)
})