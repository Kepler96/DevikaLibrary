const express= require('express');
const booksRouter=express.Router();
function Router(nav){
    var books=[
        {
            title:'Anna Kareina',
            author:'Leo Tolstoy',
            genre:'Novel',
            img:"anna.jpg",
        },
        {
            title:'Jane Eyre',
            author:'Charlotte Bronte',
            genre:'Victorian Literature',
            img:"jane.jpg",
        },
        {
            title:'Inferno',
            author:'Dan Brown',
            genre:'Mystery Thriller',
            img:"inferno.png",
        }
    ];
    booksRouter.get('/',function(req,res){
        res.render("books",
        {
            nav,
            title:'Library',
            books
    
        });
    });
    booksRouter.get('/:id',function(req,res){
        const id=req.params.id;
    
        res.render("book",{
            nav,
            title:'Library',
            book:books[id]
        });
    })
    return booksRouter;
    
}

module.exports=Router;