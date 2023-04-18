import express  from "express"
import { create, get, getAll, remove, update } from "../controllers/books";
import { signin, signup } from "../controllers/auth";
const router =  express.Router();

router.post('/signup', signup);
router.post('/signin', signin);


export default router