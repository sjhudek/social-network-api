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

module.exports = router;
