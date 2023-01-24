import knex from "../db";
import { Kiosk } from "../types";

const KioskService = {
  getAll: async () => {
    const kiosks = await knex("kiosks");
    return kiosks;
  },

  getById: async (id: string) => {
    const kiosk = await knex("kiosks").where("id", id);
    return kiosk;
  },

  create: async (kiosk: Kiosk) => {
    const kiosks = await knex("kiosks").insert(kiosk);
    return kiosks;
  },

  update: async (id: string, kiosk: Kiosk) => {
    const kiosks = await knex("kiosks").where("id", id).update({
      name: kiosk.name,
      price: kiosk.price,
      quantity: kiosk.quantity,
      date: kiosk.date,
      hours: kiosk.hours,
    });
    return kiosks;
  },

  delete: async (id: string) => {
    const kiosk = await knex("kiosks").where("id", id).del();
    return kiosk;
  },
};

export default KioskService;
