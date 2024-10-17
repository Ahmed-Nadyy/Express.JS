
const auth=(req, res, next)=>{
    const {user} = req.query;

    if(user === 'valid-user'){
        next();
    }else{ 
        res.status(401).send('unauthorized');
    }
}

module.exports = auth;