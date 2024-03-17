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

    async store(request, response) {
        const { body } = request;
        const newContact = await ContactRepository.create(body);

        response.json(newContact);
    }

    async update(request, response) {
        const { id } = request.params;
        const { body } = request;

        const updatedContact = await ContactRepository.update(id, body);

        response.json(updatedContact);
    }

    async delete(request, response) {
        const { id } = request.params;
        const newContactsList = await ContactRepository.delete(id);

        response.json(newContactsList);
    }
}

module.exports = new ContactController();
