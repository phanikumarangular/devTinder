

const AdminAuth = (req,res,next) => {
    const token = "xyz";
    const isAdminAuthorized = token === "xyz";
    if(!isAdminAuthorized){        
        res.status(401).send('unauthorized request');
    } else {
        next();
    }
}
const userAuth = (req,res,next) => {
    const token = "xyz";
    const isAdminAuthorized = token === "x1yz";
    if(!isAdminAuthorized){        
        res.status(401).send('unauthorized request');
    } else {
        next();
    }
}
module.exports = {AdminAuth,userAuth}