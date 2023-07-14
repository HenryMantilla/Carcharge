// Middleware to validate token
//import jwt from "jsonwebtoken";
/*
export const verifyToken = (req, res, next) => {
    const token = req.headers["authorization"].replace('Bearer ', '');
    if(!token){
        return res.status(401).send('Access denied');
    }
    try{
        const verified = jwt.verify(token, process.env.JWT_SECRET);
        req.user = verified;
        next();
    } catch(error){
        res.status(400).send('Invalid token');
    }
}
*/
//module.exports = verifyToken;

/*
import jwt from "jsonwebtoken";

export const verifyToken = (req,res,next)=>{
    const token = req.cookies.token;
    if(!token){
        return res.send('Access denied');
    }
    try {
        const verify = jwt.verify(token, process.env.SECRET_KEY);
        req.email = verify.email;
        //req.user = await UserModel.findById(verify.id);
        return next();
    } catch (error) {
       return res.send('Invalid Token'); 
    }
}
*/
import jwt from "jsonwebtoken";
export const verifyToken = (req,res,next) =>{
    const token = req.cookies.access_token;
    if (!token) {
      return res.status(401).send('No token found.');
    }

    jwt.verify(token, process.env.JWT_SECRET, (err, payload) => {
        if(err){
            return res.status(401).send('Invalid token.');
        }
        req.user = {
            email: payload.email,
        };
        next();
    })
}
