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

// Use PUT for updating a user
router.put('/:id', async (req, res) => {
    res.json(await userController.updateUser(req.params.id, req.body));
});

router.delete('/:id', async (req, res) => {
    res.json(await userController.deleteUser(req.params.id));
});

// Add a friend using POST
router.post('/:userId/friends/:friendId', async (req, res) => {
    try {
        const userWithNewFriend = await userController.addFriend(req.params.userId, req.params.friendId);
        res.json(userWithNewFriend);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Remove a friend using DELETE
router.delete('/:userId/friends/:friendId', async (req, res) => {
    try {
        const userWithoutFriend = await userController.removeFriend(req.params.userId, req.params.friendId);
        res.json(userWithoutFriend);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

module.exports = router;
