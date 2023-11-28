const express = require('express');
const router = express.Router();


router.get("/",(req,res)=>{
    res.render('templates',{
     title:"Express App",
     msg:"This is a homepage"
    })
 });

 module.exports = router;