// How to Set up Routers

// to be added to a base folder called routes

const express = require('express'); //step 1

const router = express.Router(); //step 2

let {people} = require('../data')

// step 3, create routes
router.get('/', (req, res)=>{
    res.status(200).json({success: true, data:people})
})

// post method for inserting data
router.post('/', (req, res)=>{
    const {name} = req.body

    if(!name) {
        return res
            .status(400)
            .json({success:false, msg:'please provide a value'})
    }
    res.status(201).send({success:true, person:name})
})

router.post('/postman', (req, res)=>{
    const {name} = req.body

    if(!name) {
        return res
            .status(400)
            .json({success:false, msg:'please provide a value'})
    }
    res.status(201).send({success:true, data:[...people, name]})
})

router.put('/:id', (req, res)=>{
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
router.delete('/:id', (req, res)=>{
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

// step 4 export route
module.exports = router