const { UserForm } = require('../models/model');

class FormController {
    
    async create(req, res) {
        const userId = req.user.id
        const { name, surname, education, work } = req.body;

        const form = await UserForm.create({ name, surname, education, work, userId});
        return res.status(201).json(form);
    }
}

module.exports = new FormController();
