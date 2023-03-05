const router=require('express').Router();

const Project=require('../models/project');

router.route('/').get((req,res)=>{
    Project.find()
    .then(Projects =>res.json(projects))
    .catch(err=>res.status(400).json("Error:"+err));
});


router.route('/add').post((req,res)=>{
    const projectName=req.body.projectName;
    const newProject=new Project({projectName});

    newProject.save()
    .then(()=>res.json("project added!"))
    .catch(err=>res.status(400).json("Error"+err))
});

module.exports=router;