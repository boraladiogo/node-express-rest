const CategoryRepository = require('../repositories/CategoryRepository');

class CategoryController {
    async index(_request, response) {
        const categories = await CategoryRepository.find();
        response.json(categories);
    }

    show() {
        // Get one category
    }

    async store(request, response) {
        const { body } = request;
        const newCategory = await CategoryRepository.create(body);

        response.json(newCategory);
    }

    update() {
        // Update category
    }

    delete() {
        // Delete category
    }
}

module.exports = new CategoryController();
