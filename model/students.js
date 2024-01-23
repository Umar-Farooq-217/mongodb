import mongoose from "mongoose";
const {Schema} = mongoose;


const studentSchema = new Schema({
    name: {type:String, required:true},
    age:Number,
   
});
export const studentModel = mongoose.models?.students || mongoose.model('students',studentSchema)