import express from "express"
import { create, getAll, getOne, Remove, Update } from "../controllers/product";

    const router = express.Router();

    router.get("/products" , getAll ),
    router.get("/products:id" , getOne ),
    router.patch("/products:id" , Update ),
    router.delete("/products:id" , Remove ),
    router.post("/products" , create )
    export default router;