const router=require('express').Router();
const Task=require('../models/task');

router.route('/').get((req,res)=>{
    Task.find()
    .sort({date:-1})
    .then(tasks=>res.json(tasks))
    .catch(err=>res.status(400).json("Error:"+err))
});

router.route('/add').post((req,res)=>{
    // todo sanitization and validation
    const projectName=req.body.projectName;
    const description=req.body.description;
    const duration=req.body.duration;
    const date=Date.parse(req.body.date);

    const newTask=new Task({
        projectName,
        description,
        duration,
        date  
    });

    newTask.save()
    .then(()=>res.json("Task Added!"))
    .catch(err=>res.status(400).json("Error:"+err))
});

router.route('/:id').get((req,res)=>{
    Task.findById(req.params.id)
    .then(taskDetails=>res.json(taskDetails))
    .catch(err=>{
        res.status(400).json("Error:"+err);
    });
});
router.route("/:id").delete((req, res) => {
    Task.findByIdAndDelete(req.params.id)
      .then(() => res.json("Task Deleted"))
      .catch(err => {
        res.status(400).json("Error: " + err);
      });
  });
  
  router.route("/update/:id").post((req, res) => {
    Task.findById(req.params.id)
      .then(task => {
        task.projectName = req.body.projectName;
        task.description = req.body.description;
        task.duration = Number(req.body.duration);
        task.date = Date.parse(req.body.date);
        task
          .save()
          .then(() => res.json("Task updated"))
          .catch(err => res.status(400).json("Error: " + err));
      })
      .catch(err => {
        res.status(400).json("Error: " + err);
      });
  });
  
  module.exports = router;
