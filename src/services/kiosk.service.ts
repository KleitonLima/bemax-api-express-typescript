import { knex } from "../knexfile";
import { Kiosk } from "../types";

const KioskService = {
  getAll: async () => {
    const kioks = await knex("kiosks");
    return kioks;
  },
  getById: async (id: string) => {
    const kioks = await knex("kiosks").where("id", id);
    return kioks;
  },
  create: async (kiosk: Kiosk) => {
    const kiosks = await knex("kioks").insert(kiosk);
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
    const kiosks = await knex("kiosks").where("id", id).del();
    return kiosks;
  },
};

export default KioskService;
