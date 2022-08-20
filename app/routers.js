//~import modules
import { Router } from "express";
const router = Router();

import {fetchAllUsers} from './controller/mainController.js'

//~router
//main
router.get('/', fetchAllUsers);

export { router };
