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
        try {
            // const numericId = Number(id);
            const updatedThought = await Thought.findByIdAndUpdate(id, data, { new: true });
            if (!updatedThought) {
                throw new Error('No thought found with this id!');
            }
            return updatedThought;
        } catch (error) {
            throw error;
        }
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
    
            // Find the index of the reaction to remove
            const reactionIndex = thought.reactions.findIndex(reaction => reaction._id.toString() === reactionId);
    
            if (reactionIndex === -1) {
                throw new Error('Reaction not found!');
            }
    
            // Remove the reaction using splice
            thought.reactions.splice(reactionIndex, 1);
    
            await thought.save();
            return thought;
        } catch (error) {
            throw error;
        }
    }
    
};

