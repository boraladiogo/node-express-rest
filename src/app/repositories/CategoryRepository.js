const database = require('../../database');

class CategoryRepository {
    async find() {
        const query = `
            SELECT * FROM categories
        `;

        const result = await database.query(query);
        return result;
    }

    create() {
        // Create new contact in database
    }

    update() {
        // Update a contact in database
    }

    delete() {
        // Delete a contact in database
    }
}

module.exports = new CategoryRepository();
