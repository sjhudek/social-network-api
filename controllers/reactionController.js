const Reaction = require('../models/Reaction');

module.exports = {
    getAllReactions: async () => {
        return await Reaction.find();
    },
    getReactionById: async (id) => {
        return await Reaction.findById(id);
    },
    createReaction: async (data) => {
        const newReaction = new Reaction(data);
        return await newReaction.save();
    },
    updateReaction: async (id, data) => {
        return await Reaction.findByIdAndUpdate(id, data, { new: true });
    },
    deleteReaction: async (id) => {
        return await Reaction.findByIdAndDelete(id);
    }
};
