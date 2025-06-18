const express = require("express");
const app = express();
const users = require('./MOCK_DATA.json');

app.get('/',(req,res)=>{
    return res.send("Hello form about page");
});

app.get('/api/users',(req,res)=>{
    return res.json(users);
})

app.get('/users',(req,res)=>{
    const html = `
    <ul>
        ${users.map((user)=>`<li>${user.first_name}</li>`).join('')}
    </ul>
    `
    res.send(html);
})



app
.route('/api/users/:id')
.get((req,res)=>{
    const id = Number(req.params.id);
    const user = users.find((user)=>user.id===id);
    return res.send(user);
})
.post((req,res)=>{
    return res.json({'status':'POST pending'});  //pending video no. 14
})
.patch((req,res)=>{
    return res.json({'status':'PATCH pending'});  //pending video no. 14
})
.delete((req,res)=>{
    return res.json({'status':'DELETE pending'});  //pending video no. 14
})



app.get('/about',(req,res)=>{
    return res.send(`Hello ${req.query.name || 'Geust'}`);
});



app.listen(8000,()=>console.log("Server started"));