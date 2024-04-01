const CategoryRepository = require('../repositories/CategoryRepository');

class CategoryController {
    async index(_request, response) {
        const categories = await CategoryRepository.find();
        response.json(categories);
    }

    async show(request, response) {
        const { id } = request.params;
        const result = await CategoryRepository.findById(id);

        response.json(result);
    }

    async store(request, response) {
        const { body } = request;
        const newCategory = await CategoryRepository.create(body);

        response.json(newCategory);
    }

    async update(request, response) {
        const { id } = request.params;
        const { body } = request;

        const updatedCategory = await CategoryRepository.update(id, body);
        response.json(updatedCategory);
    }

    async delete(request, response) {
        const { id } = request.params;

        await CategoryRepository.delete(id);
        response.sendStatus(204);
    }
}

module.exports = new CategoryController();
