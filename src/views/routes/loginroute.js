const { Router } = require('express');
const express= require('express');
const loginRouter=express.Router();
function Router(nav){

    loginRouter.get('/',function(req,res){
        res.render("login",
        {
            nav,
            title:'Library',
            
    
        });
    });
    
    
    return loginRouter;
    
}

module.exports= Router;