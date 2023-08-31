const router = require('express').Router();
const userController = require('../../controllers/userController');

router.get('/', async (req, res) => {
    res.json(await userController.getAllUsers());
});

router.get('/:id', async (req, res) => {
    res.json(await userController.getUserById(req.params.id));
});

router.post('/', async (req, res) => {
    res.json(await userController.createUser(req.body));
});

router.put('/:id', async (req, res) => {
    res.json(await userController.updateUser(req.params.id, req.body));
});

router.delete('/:id', async (req, res) => {
    res.json(await userController.deleteUser(req.params.id));
});

module.exports = router;
