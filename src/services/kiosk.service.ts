import { knex } from "../knexfile";
import { Kiosk } from "../types";

const KioskService = {
  getAll: async () => {
    const kiosks: Kiosk[] = await knex("kiosks");
    return kiosks;
  },

  getById: async (id: string) => {
    const kiosks: Kiosk = await knex("kiosks").where("id", id);
    return kiosks;
  },

  create: async (kiosk: Kiosk) => {
    const kiosks: Kiosk = await knex("kioks").insert(kiosk);
    return kiosks;
  },

  update: async (id: string, kiosk: Kiosk) => {
    const kiosks: Kiosk = await knex("kiosks").where("id", id).update({
      name: kiosk.name,
      price: kiosk.price,
      quantity: kiosk.quantity,
      date: kiosk.date,
      hours: kiosk.hours,
    });
    return kiosks;
  },

  delete: async (id: string) => {
    const kiosk: Kiosk = await knex("kiosks").where("id", id).del();
    return kiosk;
  },
};

export default KioskService;
