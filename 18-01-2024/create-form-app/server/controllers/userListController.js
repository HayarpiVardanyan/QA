const { UserForm } = require('../models/model');

class UserListController {
  
  async getUserList(req, res) {
    try {
      const users = await UserForm.findAll();
      res.json(users);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  }
}

module.exports = new UserListController();
