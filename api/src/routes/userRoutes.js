import { Router } from "express";
import userController from "../controllers/UserController";
const router = new Router();

router.post("/", userController.store);

export default router;

/*
MÉTODOS DOS CONTROLLERS
index -> Lista todos usuários = GET
store/create -> cria um usuário = POST
delete -> apaga um usuário = DELETE
show -> mostra um usuário = GET
update -> atualiza um usuário = PATCH ou PUT
*/
