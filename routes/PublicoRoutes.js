import express from 'express';
const router = express.Router();
import PublicoController from '../controllers/PublicoController.js';
const controle = new PublicoController();

router.get('/site', controle.index);
router.get('/site/galeria', controle.galeria);
router.get('/site/eventos', controle.eventos);

export default router;