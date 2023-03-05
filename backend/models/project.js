const mongoose=require('mongoose');
const Schema=mongoose.Schema;


const projectSchema=new Schema(
    {
        projectName:{
            type:String,
            required:true,
            unique:true,
            trim:true,
            minLength:3
        }
    },
    {
        timestamps:true
    }

);

const Project =mongoose.model("Project",projectSchema);
module.exports=Project;