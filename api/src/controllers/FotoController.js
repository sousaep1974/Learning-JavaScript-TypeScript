import multer from "multer";
import multerConfig from "../config/multerConfig";

import Foto from "../models/Foto";

const upload = multer(multerConfig).single("photoFile");

class FotoController {
  store(req, res) {
    return upload(req, res, async (error) => {
      if (error) {
        return res.status(400).json({
          errors: [error.code],
        });
      }

      const { originalname, filename } = req.file;
      const { aluno_id } = req.body;
      const photoFile = await Foto.create({ originalname, filename, aluno_id });
      return res.json(photoFile);
    });
  }
}
export default new FotoController();
