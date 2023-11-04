import type { Actions } from './$types';
import type {PageServerLoad} from "./$types";
import { getEvents } from "$lib/journal";
import { _queue } from "./quirrel/+server";

export const load: PageServerLoad = async () => {
  const job_list = []
  for await (const jobs of _queue.get()) {
    for (const job of jobs) {
      job_list.push(JSON.parse(JSON.stringify(job)))
    }
  }
  return {
    crons: job_list,
    events: getEvents()
  };
}

export const actions = {
  add: async ({request}) => {
    const { id, cron } = Object.fromEntries(await request.formData());
    const cronAndTz = cron.toString().split(';');
    await _queue.enqueue(
      {},
      {
        id: id.toString(),
        override: true,
        repeat: {
        cron: [cronAndTz[0], cronAndTz.length>1 ? cronAndTz[1] : 'UTC']
        }
      }
    )
  },
  delete: async ({request}) => {
    const { cronId } = Object.fromEntries(await request.formData());
    await _queue.delete(cronId.toString());
  },
} satisfies Actions;