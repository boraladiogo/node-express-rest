const database = require('../../database');

const contacts = [
    {
        id: 'b12f2603-c07e-4614-b89e-feadf0cbcefa',
        name: 'Diogo',
        email: 'diogo@email.com',
        phone: '12346789',
        category: 'ca2d316b-d460-48bc-8834-96205733f661',
    },
    {
        id: 'dc2d53e9-9b78-4b30-af31-4a8b655e2c6d',
        name: 'Thais',
        email: 'thais@email.com',
        phone: '987654321',
        category: '014f3e0d-3568-4241-bc06-f6c003b87dbd',
    },
];

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
