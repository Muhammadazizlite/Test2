import { Router } from "express";
import controller from "../controllers/index.js";


const router = Router();
router.get("/smartSearch",controller.smartSearch)
      .post("/buy",controller.buy)
      .post("/api/user",controller.add)
      .put("/api/users/:id",controller.put)
      .get("/api/users",controller.getUser)
      .post("/api/car",controller.carAdd)
      .put("/api/cars",controller.carPut)
      .get("/api/cars",controller.getCar)
      .delete("/api/user/:id",controller.deleteUser)


export default router;