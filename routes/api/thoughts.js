const router = require('express').Router();
const thoughtController = require('../../controllers/thoughtController');

router.get('/', async (req, res) => {
    res.json(await thoughtController.getAllThoughts());
});

router.get('/:id', async (req, res) => {
    res.json(await thoughtController.getThoughtById(req.params.id));
});

router.post('/', async (req, res) => {
    res.json(await thoughtController.createThought(req.body));
});

router.put('/:id', async (req, res) => {
    res.json(await thoughtController.updateThought(req.params.id, req.body));
});

router.delete('/:id', async (req, res) => {
    res.json(await thoughtController.deleteThought(req.params.id));
});

router.post('/:thoughtId/reactions', async (req, res) => {
    try {
        const thought = await thoughtController.addReaction(req.params.thoughtId, req.body);
        res.json(thought);
    } catch (err) {
        console.error(err);  // Log the error to the console
        res.status(500).json({ error: err.message });  // Send the error message in the response
    }
});

// Route to remove a reaction from a thought
router.delete('/:thoughtId/reactions/:reactionId', async (req, res) => {
    try {
        const thought = await thoughtController.removeReaction(req.params.thoughtId, req.params.reactionId);
        res.json(thought);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

module.exports = router;
