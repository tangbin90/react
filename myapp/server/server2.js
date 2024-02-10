const express = require('express')
const app = express()

app.use((request, response, next)=>{
    console.log('some requirements to server2',request)
    next()
})

app.get('/cars', (request, response)=>{
    const cars = [
        {id:'001', name:'benz', price:18},
        {id:'002', name:'audi', price:19},
        {id:'003', name:'bmw', price:120}
    ]
    response.send(cars)
})

app.listen(5001, (err)=>{
    if(!err) console.log('server 2 started, address is: http://localhost:5001/cars');
})