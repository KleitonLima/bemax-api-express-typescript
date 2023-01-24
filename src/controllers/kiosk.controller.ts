import { NextFunction, Request, Response } from "express";
import kioskService from "../services/kiosk.service";
import { Kiosk } from "../types";

interface KioskControllerProps {
  req: Request;
  res: Response;
  next: NextFunction;
}

const KioskController = {
  getAll: async ({ req, res, next }: KioskControllerProps) => {
    try {
      const kiosks: Kiosk[] = await kioskService.getAll();
      res.json(kiosks);
    } catch (error) {
      next(error);
    }
  },

  getById: async ({ req, res, next }: KioskControllerProps) => {
    try {
      const kiosk: Kiosk = await kioskService.getById(req.params.id);
      res.json(kiosk);
    } catch (error) {
      next(error);
    }
  },

  create: async ({ req, res, next }: KioskControllerProps) => {
    try {
      const kiosk: Kiosk = await kioskService.create(req.body);
      res.json(kiosk);
    } catch (error) {
      next(error);
    }
  },

  update: async ({ req, res, next }: KioskControllerProps) => {
    try {
      const kiosk: Kiosk = await kioskService.update(req.params.id, req.body);
      res.json(kiosk);
    } catch (error) {
      next(error);
    }
  },

  delete: async ({ req, res, next }: KioskControllerProps) => {
    try {
      const kiosk: Kiosk = await kioskService.delete(req.params.id);
      res.json(kiosk);
    } catch (error) {
      next(error);
    }
  },
};

export default KioskController;
