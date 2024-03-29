const database = require('../../database');

class CategoryRepository {
    async find() {
        const query = `
            SELECT * FROM categories
        `;

        const result = await database.query(query);
        return result;
    }

    async create({ name }) {
        const query = `
            INSERT INTO categories (name)
            VALUES ($1)
            RETURNING *
        `;
        const values = [name];

        const result = await database.query(query, values);
        return result;
    }

    update() {
        // Update a contact in database
    }

    delete() {
        // Delete a contact in database
    }
}

module.exports = new CategoryRepository();
