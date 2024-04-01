const database = require('../../database');

class CategoryRepository {
    async find() {
        const query = `
            SELECT * FROM categories
        `;

        const result = await database.query(query);
        return result;
    }

    async findById(id) {
        const query = `
            SELECT * FROM categories
            WHERE id = $1
        `;
        const values = [id];

        const result = await database.query(query, values);
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

    async update(id, { name }) {
        const query = `
            UPDATE categories
            SET name = $1
            WHERE id = $2
            RETURNING *
        `;
        const values = [name, id];

        const result = await database.query(query, values);
        return result;
    }

    async delete(id) {
        const query = `
            DELETE FROM categories
            WHERE id = $1
        `;
        const values = [id];

        const deleteOp = await database.query(query, values);
        return deleteOp;
    }
}

module.exports = new CategoryRepository();
