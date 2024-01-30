const express = require('express')
const app = express()

app.use((request, response, next)=>{
    console.log('some requirements')
    next()
})

app.get('/students', (request, response)=>{
    const students = [
        {id:'001', name:'tom', age:18},
        {id:'002', name:'jerry', age:19},
        {id:'003', name:'tony', age:120}
    ]
    response.send(students)
})

app.listen(5000, (err)=>{
    if(!err) console.log('server 1 started, address is: http://localhost:5000/students');
})