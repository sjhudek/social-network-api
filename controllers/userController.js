const User = require('../models/User');
const Thought = require('../models/Thought');

module.exports = {
    getAllUsers: async () => {
        return await User.find().populate('thoughts').populate('friends');
    },
    getUserById: async (id) => {
        return await User.findById(id).populate('thoughts').populate('friends');
    },
    createUser: async (data) => {
        const newUser = new User(data);
        return await newUser.save();
    },
    updateUser: async (id, data) => {
        return await User.findByIdAndUpdate(id, data, { new: true });
    },
    deleteUser: async (id) => {
        const userToDelete = await User.findById(id);
        await Thought.deleteMany({ _id: { $in: userToDelete.thoughts } });
        return await User.deleteOne({ _id: id });
    },
    addFriend: async (userId, friendId) => {
        const user = await User.findById(userId);
        user.friends.push(friendId);
        await user.save();
        return user;
    },
    
    removeFriend: async (userId, friendId) => {
        const user = await User.findById(userId);
        user.friends = user.friends.filter(id => id.toString() !== friendId);
        await user.save();
        return user;
    }
        
};
