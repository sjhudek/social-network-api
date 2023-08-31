const mongoose = require('mongoose');
const { users, thoughts, reactions } = require('./data');
const User = require('../models/User');
const Thought = require('../models/Thought');
const db = require('../config/connection');

mongoose.connect(db, { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true });

const seedDatabase = async () => {
    await User.deleteMany({});
    await Thought.deleteMany({});
    
    const createdUsers = await User.insertMany(users);

    // Attach the users to some of the thoughts for variety in seeding.
    for (let i = 0; i < thoughts.length; i++) {
        thoughts[i].username = createdUsers[Math.floor(Math.random() * createdUsers.length)].username;
    }

    await Thought.insertMany(thoughts);

    console.log('All data imported!');
    process.exit(0);
};

seedDatabase();
