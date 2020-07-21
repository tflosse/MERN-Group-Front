const express = require('express');
const router = express.Router();
const User = require('../models/users');

//seed users:
// code for seeding is in ../db/seedRoute
// const seedData = require('../db/seedData');
// router.get('/seed', async (req, res) => {
//     await User.deleteMany({})
//     User.insertMany(seedData, (err,data) => {
//         if (err) console.log(err)
//             else res.send(data)
//     })
// });

// show route
// get all users (this route will not be need on the front end, 
// but is important to have when testing back-end and testing that usernames are created and updated properly)
