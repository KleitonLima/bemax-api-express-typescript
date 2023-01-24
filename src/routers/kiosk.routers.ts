import express, { Router } from "express";
import KioskController from "../controllers/kiosk.controller";

const kioskRouter: Router = Router();

kioskRouter.route("/").get(KioskController.getAll).post(KioskController.create);

kioskRouter
  .route("/:id")
  .get(KioskController.getById)
  .put(KioskController.update)
  .delete(KioskController.delete);

export default kioskRouter;
