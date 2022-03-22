"use strict";
// catRoute
import { Router } from "express";

const router = Router();
import { cat_list_get, cat_get } from "../controllers/catController";

router.get("/", cat_list_get);

router.get("/:id", cat_get);

export default router;
