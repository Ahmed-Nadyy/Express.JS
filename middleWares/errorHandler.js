module.exports=(req, res, next, error)=>{
    res.status(400).json(error);
}