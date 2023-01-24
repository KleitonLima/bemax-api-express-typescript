import { NextFunction, Request, Response } from "express";
import kioskService from "../services/kiosk.service";

const KioskController = {
  getAll: async (req: Request, res: Response, next: NextFunction) => {
    try {
      const kiosks = await kioskService.getAll();
      res.json(kiosks);
    } catch (error) {
      next(error);
    }
  },

  getById: async (req: Request, res: Response, next: NextFunction) => {
    try {
      const kiosk = await kioskService.getById(req.params.id);
      res.json(kiosk);
    } catch (error) {
      next(error);
    }
  },

  create: async (req: Request, res: Response, next: NextFunction) => {
    try {
      const kiosk = await kioskService.create(req.body);
      res.json(kiosk);
    } catch (error) {
      next(error);
    }
  },

  update: async (req: Request, res: Response, next: NextFunction) => {
    try {
      const kiosk = await kioskService.update(req.params.id, req.body);
      res.json(kiosk);
    } catch (error) {
      next(error);
    }
  },

  delete: async (req: Request, res: Response, next: NextFunction) => {
    try {
      const kiosk = await kioskService.delete(req.params.id);
      res.json(kiosk);
    } catch (error) {
      next(error);
    }
  },
};

export default KioskController;
