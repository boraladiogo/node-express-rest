const database = require('../../database');

class ContactRepository {
    async find(orderBy = 'ASC') {
        const direction = orderBy.toUpperCase() === 'DESC' ? 'DESC' : 'ASC';
        const query = `SELECT * FROM contacts ORDER BY name ${direction}`;

        const result = await database.query(query);
        return result;
    }

    async findById(id) {
        const query = 'SELECT * FROM contacts WHERE id = $1';
        const value = [id];

        const [result] = await database.query(query, value);
        return result;
    }

    async create({
        name, email, phone,
    }) {
        const query = `
            INSERT INTO contacts (name, email, phone)
            VALUES ($1, $2, $3)
            RETURNING *
        `;

        const values = [name, email, phone];

        const result = await database.query(query, values);
        return result;
    }

    async update(id, {
        name, email, phone,
    }) {
        const query = `
            UPDATE contacts
            SET name = $1, email = $2, phone = $3
            WHERE id = $4
            RETURNING *
        `;
        const values = [name, email, phone, id];

        const [result] = await database.query(query, values);
        return result;
    }

    async delete(id) {
        const query = `
            DELETE FROM contacts
            WHERE id = $1
        `;
        const values = [id];

        const deleteOp = await database.query(query, values);
        return deleteOp;
    }
}

module.exports = new ContactRepository();
