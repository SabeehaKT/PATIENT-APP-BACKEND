const mongoose = require ("mongoose")
const schema = mongoose.Schema(
{
    "pid":{type:String,required:true},
    "pname":{type:String,required:true},
    "department":{type:String,required:true},
    "date":{type:String,required:true},
}
)

const patientmodel=mongoose.model("patients",schema);
module.exports={patientmodel}