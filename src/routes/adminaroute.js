const express= require('express');
const adminAR=express.Router();

function Router(nav){
    adminAR.get('/',function(req,res){
        res.render('addauthor',{
            nav,
            title:'Library'
        })

    })
    adminAR.get('/add',function(req,res){
        res.send('author added');
                

    })
    return adminAR;
}


module.exports=Router;