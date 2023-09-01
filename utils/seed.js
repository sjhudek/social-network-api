const mongoose = require('mongoose');
const ObjectId = mongoose.Types.ObjectId; // Moved this line after requiring mongoose
const { users, thoughts, reactions } = require('./data');
const User = require('../models/User');
const Thought = require('../models/Thought');
require('../config/connection');

const seedDatabase = async () => {
    try {
        console.log("Seeding database...");
    await User.deleteMany({});
    await Thought.deleteMany({});
    
    const mappedUsers = users.map(({ id, ...rest }) => {
        return {
            ...rest,
            _id: id
        };
    });
    
    const mappedThoughts = thoughts.map(({ id, ...rest }) => {
        return {
            ...rest,
            _id: id
        };
    });         

    // Place the console.log statements here
    console.log(mappedUsers);
    console.log(mappedThoughts);

    await User.insertMany(mappedUsers);
    await Thought.insertMany(mappedThoughts);

    console.log('All data imported!');
    process.exit(0);

} catch (error) {
    console.error("Error seeding database:", error);
}
};

seedDatabase();
