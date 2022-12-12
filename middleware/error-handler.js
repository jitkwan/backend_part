const errorHandlerMiddleware = (err,req,res,next) => {    //2.
    console.log(err)
    res.status(500).json({msg:'there was an error'})
}


export default errorHandlerMiddleware