const express = require('express');
const app = express();
const helmet = require('helmet');

app.use(helmet())
app.set('view engine','pug');
app.set('views','./views');


app.get("/",(req,res)=>{
   res.render('templates',{
    title:"Express App",
    msg:"This is a homepage"
   })
});


app.listen(5000,()=>{
    console.log("Listening on port 5000...")
})