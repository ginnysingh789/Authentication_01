const express=require('express');
const jwt=require('jsonwebtoken');
const jwt_Password="12345";
const { requestScheme, ResetPasswordScheme } = require('./Scheme');

const DataBaseScheme = require('./db');
const app=express();
app.use(express.json())
function authMiddelware(req,res,next)
{
    const token = req.headers['authorization'];
    if(!token)
    {
        return res.status(411).json({msg:'token is not received'})
    }
    else(jwt.verify(token,jwt_Password,(err,decoded)=>{
        if(err)
        {
            return res.json({msg:'Invalid Token'})
        }
            next();
    }))
}

async function  CheckUserExistSignIn(signinPayload) {
    const findout=await DataBaseScheme.findOne({
        email:signinPayload.email,
        password:signinPayload.password
    })
    return findout !== null;
}
async function  CheckUserExistSignUp(signupPayload){
    const findout=await DataBaseScheme.findOne({
        email:signupPayload.email,
    })
    return findout !== null;
    }
app.post('/sign-up',async function(req,res)
{
    //Input validation
    const signupPayload=req.body;
    const parsePayload=requestScheme.safeParse(signupPayload);
    if(!(parsePayload.success))
    {
        return res.status(411).json({msg:'Inputs are not Valid'})
    }
    //Check UserExit or not 
    if(await CheckUserExistSignUp(signupPayload))
    {
         return res.status(500).json({msg:'User already Exist'})
    }
    //Else put the user it the database
   const pushData=await DataBaseScheme.create(
    {
        email:signupPayload.email,
        password:signupPayload.password
    }
   )
    res.status(200).json({msg:' Sign-up Data is pushed  in the database'});
})

app.get('/sign-in',async function(req,res)
{
    //Input validation
    const signinPayload=req.body;
    const parsePayload=requestScheme.safeParse(signinPayload);
    if(!(parsePayload.success))
    {
        res.status(411).json({msg:'Inputs are not Valid'})
    }
    if(!(await CheckUserExistSignIn(signinPayload)))
        {
             res.status(500).json({msg:'User  Does not already Exist'})
     
        }

    //Check userExit if exist then generate JWT web Token 
    const token=jwt.sign({email:signinPayload.email},jwt_Password);
      res.status(200).json({token});
})

app.get('/getData', authMiddelware,async function(req,res){

    //Here use the concept of jwt token verify then give the entire
    const fetchData=await DataBaseScheme.find()
     res.status(200).json({fetchData})

});

app.put('/rest-password', async function(req, res) {
    try {
        // First check if the provided data is valid
        const resetData = req.body;
        const parseResetData = ResetPasswordScheme.safeParse(resetData);
        
        if (!parseResetData.success) {
            return res.status(400).json({ msg: 'Invalid data' });
        }
        
        // Check if the user exists using the validated data
        const userExists = await CheckUserExistSignUp(parseResetData.data);
        
        if (userExists) {
            // Update the MongoDB document if user exists
            await DataBaseScheme.updateOne(
                { email: resetData.email },
                { $set: { password: resetData.newpassword } }
            );
            return res.status(200).json({ msg: 'Password updated successfully' });
        } else {
            // Respond if user is not found
            return res.status(404).json({ msg: 'User not found' });
        }
    } catch (error) {
        console.error("Error in /rest-password:", error);
        return res.status(500).json({ msg: 'Internal server error' });
    }
});


app.listen(3000,()=>{
    console.log('Port is successfully running')
})