const express= require('express');
const authorsRouter=express.Router();
function Router(nav){
    var authors=[
        {
            title:'Leo Tolstoy',
            
            genre:'Fictioj',
            book:'Anna Karenina',
            img:"tolstoy.jpg",
        },
        {
            title:'Charlotte Bronte',
            
            genre:'Fiction',
            book:'Jane Eyre',
            img:"bronte.jpg",
        },
        {
            title:'Dan Brown',
            
            genre:'Fiction',
            book:'Inferno',
            img:"Dan_Brown.jpg",
        }
    ];
    authorsRouter.get('/',function(req,res){
        res.render("authors",
        {
            nav,
            title:'Library',
            authors
    
        });
    });
    authorsRouter.get('/:id',function(req,res){
        const id=req.params.id;
    
        res.render("author",{
            nav,
            title:'Library',
            author:authors[id]
        });
    })
    return authorsRouter;
    
}

module.exports= Router;
