const validateContactData = (req, res,next) => {
    const {name, phone} = req.body;
    // if(name.length < 2 || phone.length < 10){
    //     return res.status(400).json({error:'Invalid contact});
    // }
    // else if(!name.include('@)){
    //    return res.status(400).json({error:'Invalid contact'});
    // }
    if(phone.value === null)
        return res.status(400).json({error:'Phone no. should not be empty'});
    next();
    }

module.exports = validateContactData;