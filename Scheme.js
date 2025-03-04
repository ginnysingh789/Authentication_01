const zod=require('zod');
const requestScheme=zod.object({
    email:zod.string().email(),
    password:zod.string().min(5)
})
const ResetPasswordScheme=zod.object(
    {
        email:zod.string().email(),
        currentpassword:zod.string().min(5),
        newpassword:zod.string().min(5)
    }
)
module.exports={requestScheme,ResetPasswordScheme};

