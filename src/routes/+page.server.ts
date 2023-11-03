import type { Actions } from './$types';
import {addCron, deleteCron, getCrons} from "$lib/crons";
import type {PageServerLoad} from "./$types";

export const load: PageServerLoad = () => {
  return {
    crons: getCrons()
  };
}

export const actions = {
  add: async ({request}) => {
    const data = await request.formData();
    addCron(data.get("cron")?.toString());
  },
  delete: async ({request}) => {
    const data = await request.formData();
    deleteCron(data.get("cron")?.toString());
  },
} satisfies Actions;