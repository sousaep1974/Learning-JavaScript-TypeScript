import User from "../models/User";

class UserController {
  async store(req, res) {
    try {
      const novoUser = await User.create({
        nome: "Filipe",
        email: "sousafd@gmail.com",
        password: "123456",
      });
      res.json(novoUser);
    } catch (e) {
      console.log(e);
      res.status(400).json({
        errors: e.errors.map((err) => err.message),
      });
    }
  }
}
export default new UserController();
