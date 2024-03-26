const ContactRepository = require('../repositories/ContactRepository');

class ContactController {
    async index(request, response) {
        const { orderBy } = request.query;
        const contacts = await ContactRepository.find(orderBy);

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
        await ContactRepository.delete(id);

        response.sendStatus(204);
    }
}

module.exports = new ContactController();
