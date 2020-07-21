const mongoose = require('./connection');
const db = mongoose.connection;
const User = require('../models/users');
// const Idea = require('../models/ideas');
// const Comment = require('../models/comments');
const Seed = require('./seedData')

db.on("error", console.error.bind(console, "MongoDB connection error:"));

const main = async () => {
    await User.deleteMany({})
    const users = Seed;
    await User.insertMany(users);
    console.log("Added seed users, along with ideas and comments!");
};
const run = async () => {
    await main();
    db.close();
};

run();