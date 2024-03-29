const { Router } = require('express');

const ContactController = require('./controllers/ContactController');
const CategoryController = require('./controllers/CategoryController');

const router = Router();

// Contacts routes
router.get('/contacts', ContactController.index);
router.get('/contacts/:id', ContactController.show);
router.post('/contacts', ContactController.store);
router.put('/contacts/:id', ContactController.update);
router.delete('/contacts/:id', ContactController.delete);

// Categories routes
router.get('/categories', CategoryController.index);
router.post('/categories', CategoryController.store);

module.exports = router;
