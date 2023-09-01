// routes/api/reactions.js
const router = require('express').Router();
const reactionController = require('../../controllers/reactionController');

router.post('/', async (req, res) => {
    res.json(await reactionController.createReaction(req.body));
});

module.exports = router;
