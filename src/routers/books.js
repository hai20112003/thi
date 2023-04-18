import express  from "express"
import { create, get, getAll, remove, update } from "../controllers/books";
const router =  express.Router();

router.post('/books', create);
router.get('/books', getAll);
router.get('/books/:id', get);
router.delete('/books/:id', remove);
router.put('/books/:id', update);

export default router