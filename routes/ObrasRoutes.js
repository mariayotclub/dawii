import express from 'express';
import multer from 'multer';

const storage = multer.memoryStorage();
const upload = multer({ storage });
const router = express.Router();
import ObrasController from '../controllers/ObrasController.js'
const controle = new ObrasController();

const caminhobase = 'obras/'

router.get('/' + caminhobase + 'add', controle.openAdd)
router.post('/' + caminhobase + 'add',upload.single('imagem'), controle.add)
router.get('/' + caminhobase + 'lst', controle.list)
router.post('/' + caminhobase + 'lst', controle.find)
router.get('/' + caminhobase + 'del/:id', controle.del)
router.get('/' + caminhobase + 'edt/:id', controle.openEdt)
router.post('/' + caminhobase + 'edt/:id', controle.edt)
export default router