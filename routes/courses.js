const express = require("express");
const router = express.Router();
const joi = require('joi');
let courses = [
    {
        id:1,
        name:"Maths"
    },
    {
        id:2,
        name:"Science"
    },
    {
        id:3,
        name:"HIstory"
    },
    {
        id:4,
        name:"POlitical Science"
    },
]
const schema = joi.object({
    name: joi.string().required().min(3),
    id: joi.number().min(1)
});
function validateCourse(course){
    const value = schema.validate(course)
    return value;
}


//Get request
router.get("/",(req,res)=>{
    res.send(courses)
})
router.get("/:id",(req,res)=>{
    let course = courses.find(course=> course.id==req.params.id);
    if(!course) res.status(404).send("No such course in our record");
    else res.send(course)
})


//POST request
router.post("/",(req,res)=>{

    const course = {
        id:courses.length+1,
        name:req.body.name
    }
        var val = validateCourse(course);
        if(val.error){

            res.status(400).send("Invalid data sent")
            console.log(val.error)
        }
    courses.push(course)
    res.status(200).send(course)
    
})


//PUT request:update existing course
router.put("/:id",(req,res)=>{
    let course = courses.find(c=>c.id==req.params.id);
    if(!course){
        res.status(404).send("Course not found");
        res.end();
    }
    let obj = validateCourse(req.body);
    if(!obj.error){
        course.name = req.body.name;
        res.send(course)
    }
    else{
        res.status(400).send(obj.error.details[0].message);
        res.end();
    }
})



router.delete("/:id",(req,res)=>{
    let position;
    for(let i=0;i<courses.length;i++){
        if(courses[i].id==req.params.id){
            position = i;
        }
    }
    if(!position){
        res.status(404).send("Not found");
        res.end();
    }
    else{
        courses.splice(position,1);
        res.status(200).send(courses);
    }
})

module.exports = router;