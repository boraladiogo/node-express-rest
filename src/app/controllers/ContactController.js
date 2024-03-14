const ContactRepository = require('../repositories/ContactRepository');

class ContactController {
    index(_request, response) {
        const contacts = ContactRepository.find();
        response.json(contacts);
    }

    show() {
        // Obter um único registro
    }

    store() {
        // Criar novo registro
    }

    update() {
        // Editar um registro
    }

    delete() {
        // Remover um registro
    }
}

module.exports = new ContactController();
