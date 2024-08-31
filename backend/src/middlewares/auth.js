const jwt=require("jsonwebtoken");
const JWT_SECRET=process.env.JWT_SECRET;

const verifyToken = (req,res,next)=>{
    const authHeader=req.headers.authorization;
    if(!authHeader && !authHeader.startsWith("Bearer")){
        res.status(400).send({
            "msg" :"You are not authenticated"
        })
    }
    const token = authHeader.split(" ")[1];
    try{
        const decode = jwt.verify(token,JWT_SECRET);
        req.user=decode;
        next()
    }
    catch(err){
        req.status(404).json({
            "error": console.error(err)
        })
    }
}

const verifyTokenandAuthorize=function(req,res,next){
    verifyToken(req,res, ()=>{
        if(req.user._id==req.params.id || req.user.isAdmin){
            next();
        }
        else{
            res.status(401).json({
                "msg": "You cannot proceed"
            })
        }
    })
}
module.exports={
    verifyToken
}