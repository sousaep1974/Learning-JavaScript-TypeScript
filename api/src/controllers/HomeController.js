import Aluno from "../models/Aluno";

class HomeController {
  async index(req, res) {
    const novoAluno = await Aluno.create({
      nome: "Filipe",
      sobrenome: "Sousa",
      email: "sousafd2020@gmail.com",
      idade: 3,
      peso: 19,
      altura: 1.06,
    });
    res.json(novoAluno);
  }
}
export default new HomeController();
