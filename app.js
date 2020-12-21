var express= require('express');

const app= new express();
const port =process.env.PORT || 3000;

app.engine('ejs' , require('ejs').__express)

const nav=[
    {
    link:'/book',name:'Books'
    },
    {
        link:'/author',name:'Authors'
    },
    {
        link:'/adminb',name:'Add Book'
    },
    {
        
        link:'/admina',name:'Add Author'
        
    },
    {
        link:'/signup',name:'Sign Up'
    },
    {
        link:'/login',name:'Sign In'
    },
    


];


const booksRouter=require('./src/routes/bookroute')(nav);
const authorsRouter=require('./src/routes/authorroute')(nav);
const signupRouter=require('./src/routes/signuproute')(nav);
const loginRouter=require('./src/routes/loginroute')(nav);
const adminAR=require('./src/routes/adminaroute')(nav);
const adminbRouter=require('./src/routes/adminbroute')(nav);



app.use(express.static('./public'));
app.set('view engine','ejs');
app.set('views','./src/views');
app.use('/book',booksRouter);
app.use('/author',authorsRouter);
app.use('/signup',signupRouter);
app.use('/login',loginRouter);
app.use('/admina',adminAR);
app.use('/adminb',adminbRouter);
app.engine('ejs' , require('ejs').__express)
app.get('/',function(req,res){
    res.render("index",
    {
        nav,
        title:'Library'
    });
});


app.listen(port,()=>{console.log("server ready at" +port)});