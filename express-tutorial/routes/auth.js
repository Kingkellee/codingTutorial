const express = require('express')

const router = express.Router()

router.post('/', (req, res)=>{
    const {name} = req.body
    if (name) {
        res.status(200).send(`You are Logged in, welcome ${name}!!`)
    }
    res.status(401).send("Please input the correct Credentials")
})

module.exports = router