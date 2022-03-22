"use strict";
// catRoute
import { Router } from "express";

const router = Router();
import { user_get_list, user_get } from "../controllers/userController";

router.get("/", user_get_list);

router.get("/:id", user_get);

export default router;
