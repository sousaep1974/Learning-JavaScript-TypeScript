import { Router } from "express";
import userController from "../controllers/UserController";
import loginRequired from "../middlewares/loginRequired";

const router = new Router();

// Não deviriam existir
//router.get("/", userController.index);
//router.get("/:id", userController.show);

router.post("/", loginRequired, userController.store);
router.put("/", loginRequired, userController.update);
router.delete("/", loginRequired, userController.delete);

export default router;

/*
MÉTODOS DOS CONTROLLERS
index -> Lista todos usuários = GET
store/create -> cria um usuário = POST
delete -> apaga um usuário = DELETE
show -> mostra um usuário = GET
update -> atualiza um usuário = PATCH ou PUT
*/
