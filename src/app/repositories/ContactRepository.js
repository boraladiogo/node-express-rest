const crypto = require('node:crypto');
const database = require('../../database');

let contacts = [
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
    async find() {
        const q = 'SELECT * FROM contacts';
        const result = await database.query(q);

        return result;
    }

    findById(id) {
        const contact = contacts.find((e) => e.id === id);

        return new Promise((resolve) => {
            resolve(contact);
        });
    }

    create(body) {
        const { name, email, phone } = body;

        const newContact = {
            id: crypto.randomUUID(),
            name,
            email,
            phone,
            category: crypto.randomUUID(),
        };

        contacts.push(newContact);

        return new Promise((resolve) => {
            resolve(newContact);
        });
    }

    update(id, body) {
        const {
            name, email, phone, category,
        } = body;

        const updatedContact = {
            id,
            name,
            email,
            phone,
            category,
        };

        contacts = contacts.map((e) => (e.id === id ? updatedContact : e));

        return new Promise((resolve) => {
            resolve(updatedContact);
        });
    }

    delete(id) {
        contacts = contacts.filter((e) => e.id !== id);

        return new Promise((resolve) => {
            resolve(contacts);
        });
    }
}

module.exports = new ContactRepository();
