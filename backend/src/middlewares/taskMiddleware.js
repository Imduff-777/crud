const validateBody = (req,res,next) => {
    const body = req.body;
    //const { body } = req;

    if(body.title == undefined){
        return res.json({message: "O campo 'title' é obrigatorio."})
    }
    
    if(body.title == ""){
        return res.json({message: "O campo 'title' não pode estar vazio"})
    }

    next();
}

module.exports = {
    validateBody
}