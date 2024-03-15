const crypto = require('node:crypto');

const contacts = [
    {
        id: 'b12f2603-c07e-4614-b89e-feadf0cbcefa',
        name: 'Diogo',
        email: 'diogo@email.com',
        phone: '12346789',
        category: 'ca2d316b-d460-48bc-8834-96205733f661',
    },
    {
        id: crypto.randomUUID(),
        name: 'Thais',
        email: 'thais@email.com',
        phone: '987654321',
        category: crypto.randomUUID(),
    },
];

class ContactRepository {
    find() {
        return new Promise((resolve) => {
            resolve(contacts);
        });
    }

    findById(id) {
        const contact = contacts.find((e) => e.id === id);

        return new Promise((resolve) => {
            resolve(contact);
        });
    }
}

module.exports = new ContactRepository();
