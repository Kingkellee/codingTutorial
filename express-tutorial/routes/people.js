// How to Set up Routers
// Restructured Routes File, see original on FInal, route.js
const express = require('express'); //step 1

const router = express.Router(); //step 2

const {
    getPerson,
    createPerson,
    createPersonPostman,
    updatePerson,
    deletePerson
} = require('../controller/people')

// First Method to Chain Controllers to Routes, using the method
// router.get('/', getPerson)   // step 3, create routes
// router.post('/', createPerson)      // post method for inserting data
// router.post('/postman', createPersonPostman)    // post method for inserting data
// router.put('/:id', updatePerson)    // to update record
// router.delete('/:id', deletePerson) // to remove 

// Second Method to chain Controllers to Routes
// using the route method to join url paths with same url, and chaining the respective methods
router.route('/').get(getPerson).post(createPerson)
router.route('/postman').post(createPersonPostman)
router.route('/:id').put(updatePerson).delete(deletePerson)

// step 4 export route
module.exports = router