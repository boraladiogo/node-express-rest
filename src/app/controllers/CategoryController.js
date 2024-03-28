const CategoryRepository = require('../repositories/CategoryRepository');

class CategoryController {
    async index(_request, response) {
        const categories = await CategoryRepository.find();
        response.json(categories);
    }

    show() {
        // Get one category
    }

    store() {
        // Create new category
    }

    update() {
        // Update category
    }

    delete() {
        // Delete category
    }
}

module.exports = new CategoryController();
