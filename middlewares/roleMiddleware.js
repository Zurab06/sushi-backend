const { secret } = require("../config")
const jwt = require('jsonwebtoken')

module.exports = function(roles){
return function (req,res,next){
    if(req.method === "OPTIONS"){
        next()
    }
    try {
        const token = req.headers.authorization.split(' ')[1]
        if(!token){
            return res.status(403).json({message:'доступ только для админа'})
        }
        const {roles:userRoles} = jwt.verify(token,secret)
        let hasRole = false
        userRoles.forEach(role => {
            if(userRoles.includes('ADMIN')){
                hasRole = true
            }
            if(!hasRole){
                return res.status(403).json({message:'нет доступа'})
            }
            next()
        });
    } catch (error) {
        console.log(error);
        return res.status(403).json({message:'доступ только для админа'})
    }
}
}