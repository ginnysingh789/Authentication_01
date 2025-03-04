const mongoose=require('mongoose');
mongoose.connect('mongodb+srv://ginnysangral786:ginny1singh@cluster0.8gzvj.mongodb.net/Authentication_Database').then(()=>console.log('Monoose Connect Successfully')).catch(()=>
console.log('Mongoose is not  connected'));
const DataScheme=new mongoose.Schema({
    email:String,
    password:String
})
const DataBaseScheme=mongoose.model('DataBaseScheme',DataScheme);
module.exports=DataBaseScheme;
