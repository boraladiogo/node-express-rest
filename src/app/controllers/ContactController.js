const ContactRepository = require('../repositories/ContactRepository');

class ContactController {
    async index(_request, response) {
        const contacts = await ContactRepository.find();
        response.json(contacts);
    }

    async show(request, response) {
        const { id } = request.params;
        const contact = await ContactRepository.findById(id);

        response.json(contact);
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
