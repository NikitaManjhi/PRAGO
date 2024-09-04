const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
dotenv.config();
const JWT_SECRET = process.env.JWT_SECRET;

const verifyToken = (req, res, next) => {
  const authHeader = req.headers.authorization;
  if (!authHeader || !authHeader.startsWith("Bearer")) {
    res.status(400).send({
      msg: "You are not authenticated",
    });
  }

  const token = authHeader.split(" ")[1];

  try {
    const decode = jwt.verify(token, JWT_SECRET);
    req.user = decode;

    next();
  } catch (err) {
    res.status(404).json({
      error: console.error(err),
    });
  }
};

const verifyTokenandAuthorize = (req, res, next) => {
    
  verifyToken(req, res, () => {
    if (req.user.userId === req.params.id || req.user.isAdmin) {
      next();
    } else {
      res.status(403).json({
        msg: "You are not allowed to do that.",
      });
    }
  });
};

// Verify that the user is Admin
const verifyTokenAndAdmin = (req,res,next)=>{
    verifyTokenandAuthorize(req,res,()=>{
        if(req.user.isAdmin){
            next();
        }
        else{
            res.status(403).json("you are not allowed to do that!");
        }
    })
}

module.exports = {
  verifyToken,
  verifyTokenandAuthorize,
  verifyTokenAndAdmin
};
