const express=require('express');
const mongoose=require('mongoose');
const app=express();
const morgan=require('morgan');
const blogRoutes=require('./routes/blogRoutes');
const { render } = require('ejs');
const dbURI='mongodb+srv://sudumaster:Test1234@nodeblogs.jrc0caj.mongodb.net/Node-Blogs?retryWrites=true&w=majority';
mongoose.connect(dbURI)
.then(result=>app.listen(3000))
.catch(err=>console.log(err));
app.set('view engine','ejs');
app.use(express.static('public'));
app.use(morgan('dev'));
app.use(express.urlencoded({extended:true}));
app.get('/add-blog',(req,res)=>{
    const blog=new Blog({
        title:'My new blog2',
        snippet:'Testing for db updation',
        body:'I hope it is successfully updated in the database'
    });

    blog.save()
    .then(result=>{
        res.send(result);
    })
    .catch(err=>{console.log(err);});
});
app.get('/all-blog',(req,res)=>{
    Blog.find()
    .then((result)=>{
        res.send(result);
    })
    .catch((err)=>{
        console.log(err);
    });
});
app.get('/single-blog',(req,res)=>{
    Blog.findById('65565ddb16d4f0b17fcbb1d2')
    .then((result)=>{
        res.send(result);
    })
    .catch((err)=>{
        console.log(err);
    });
});
app.get('/',(req,res)=>{
    res.redirect('/blogs');
});
app.get('/about',(req,res)=>{
    res.render('about',{title:'About'});
});
app.use('/blogs',blogRoutes);
app.use((req,res)=>{
    res.status(404).render('404',{title:'404'});
})