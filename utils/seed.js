const mongoose = require("mongoose");
const ObjectId = mongoose.Types.ObjectId; // Moved this line after requiring mongoose
const { users, thoughts, reactions } = require("./data");
const User = require("../models/User");
const Thought = require("../models/Thought");
require("../config/connection");

const seedDatabase = async () => {
    try {
      console.log("Seeding database...");
      
      // Clear existing data
      await User.deleteMany({});
      await Thought.deleteMany({});
  
      // Insert new data
      await User.insertMany(users);
      await Thought.insertMany(thoughts);
  
      console.log("All data imported!");
      process.exit(0);
    } catch (error) {
      console.error("Error seeding database:", error);
    }
  };
  

seedDatabase();
