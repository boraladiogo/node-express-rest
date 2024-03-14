const crypto = require('node:crypto');

const contacts = [
    {
        id: crypto.randomUUID(),
        name: 'Diogo',
        email: 'diogo@email.com',
        phone: '12346789',
        category: crypto.randomUUID(),
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
}

module.exports = new ContactRepository();
