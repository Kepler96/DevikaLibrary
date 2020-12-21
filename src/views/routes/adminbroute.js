const { Router } = require('express');
const express= require('express');
const adminbRouter=express.Router();

function Router(nav){
    adminbRouter.get('/',function(req,res){
        res.render('addbook',{
            nav,
            title:'Library'
        })

    })
    adminbRouter.get('/add',function(req,res){
        res.send('book added');
                

    })
    return adminbRouter;
}


module.exports= Router;