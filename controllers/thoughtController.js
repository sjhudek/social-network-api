const Thought = require('../models/Thought');

addReaction: async (thoughtId, reactionData) => {
    try {
        const thought = await Thought.findById(thoughtId);
        if (!thought) {
            throw new Error('No thought found with this id!');
        }
        thought.reactions.push(reactionData);
        await thought.save();
        return thought;
    } catch (error) {
        throw error;
    }
}

removeReaction: async (thoughtId, reactionId) => {
    const thought = await Thought.findById(thoughtId);
    thought.reactions.id(reactionId).remove();
    await thought.save();
    return thought;
};

module.exports = {
    getAllThoughts: async () => {
        return await Thought.find();
    },
    getThoughtById: async (id) => {
        return await Thought.findById(id);
    },
    createThought: async (data) => {
        const newThought = new Thought(data);
        return await newThought.save();
    },
    updateThought: async (id, data) => {
        return await Thought.findByIdAndUpdate(id, data, { new: true });
    },
    deleteThought: async (id) => {
        return await Thought.findByIdAndDelete(id);
    },
    addReaction: async (thoughtId, reactionData) => {
        try {
            const thought = await Thought.findById(thoughtId);
            if (!thought) {
                throw new Error('No thought found with this id!');
            }
            thought.reactions.push(reactionData);
            await thought.save();
            return thought;
        } catch (error) {
            throw error;
        }
    },
    removeReaction: async (thoughtId, reactionId) => {
        try {
            const thought = await Thought.findById(thoughtId);
            if (!thought) {
                throw new Error('No thought found with this id!');
            }
            thought.reactions.id(reactionId).remove();
            await thought.save();
            return thought;
        } catch (error) {
            throw error;
        }
    }    
};

