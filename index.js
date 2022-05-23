const express = require('express');
const app =express();
const PORT =80;
app.set('view engine','hbs');
app.use('/public', express.static(__dirname + '/public'));
app.use(express.urlencoded({extended: false}))

app.get('/', (req,res) => {
    res.render('index')
});
app.get('/contact', (req,res) => {
    res.render('contact')
});
app.get('/detail-blog', (req,res) => {
res.render('detail');
});
app.get('/detail-blog/:index', (req,res) => {
    const index = req.params.index;
    console.log(index);

    res.redirect('/detail-blog')
    
})
app.get('/myproject', (req,res) => {
    res.render('addmyproject')
});
app.post('/myproject', (req,res) => {
    const posting = req.body ;
    console.log(posting);
    res.redirect('/detail-blog')
    
});


app.listen (PORT, () =>{
    console.log (`console running on port : ${PORT}`)
});