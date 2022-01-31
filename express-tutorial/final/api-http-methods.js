const { application } = require('express')
const express = require('express')
const app = express()

let { people } = require('./data')

app.use(express.static('./methods-public')) //setting up a public static assest
app.use(express.urlencoded({extended: false})) // This is a built-in middleware function in Express. 
// It parses incoming requests with urlencoded payloads and is based on body-parser.

/* the extended flag alllows you to choose either passing url-encoded with 
querystring library when false or with the qs library when true */

app.use(express.json()) //parce json
//get method used to read data 
app.get('/api/people', (req, res)=>{
    res.status(200).json({success: true, data:people})
})

// post method for inserting data
app.post('/api/people', (req, res)=>{
    const {name} = req.body

    if(!name) {
        return res
            .status(400)
            .json({success:false, msg:'please provide a value'})
    }
    res.status(201).send({success:true, person:name})
})

app.post('/api/postman/people', (req, res)=>{
    const {name} = req.body

    if(!name) {
        return res
            .status(400)
            .json({success:false, msg:'please provide a value'})
    }
    res.status(201).send({success:true, data:[...people, name]})
})

app.post('/login', (req, res)=>{
    const {name} = req.body
    if (name) {
        res.status(200).send(`You are Logged in, welcome ${name}!!`)
    }
    res.status(401).send("Please input the correct Credentials")
})

app.put('/api/people/:id', (req, res)=>{
    const{id} = req.params
    const{name}= req.body

    // to find a person whose id matches the id in our data
    const person = people.find((person)=>person.id === Number(id))
    if(!person){
        return res
            .status(401)
            .json({success:false, msg:`User with id of ${id} does not exist`})
    }

    // to update the records of the id 
    const newPeople = people.map((person)=>{
        if(person.id===Number(id)){
            person.name = name
        }

        return person
    })
    res.status(200).json({success:true, data:newPeople})
})

// to remove 
app.delete('/api/people/:id', (req, res)=>{
    const person = people.find((people)=>people.id===Number(req.params.id))
    if(!person){
        return res
            .status(401)
            .json({success:false, msg:`The user with id of ${req.params.id} does not exist`})
    }
    const newPeople = people.filter(
        (person)=>person.id !== Number(req.params.id)
    )
    return res.status(200).json({success:true, data:newPeople})
})

app.listen(5000, ()=>{
    console.log('Listening on Port 5000...')
})