import { Queue } from 'quirrel/sveltekit.d'
import { addEvent } from "$lib/journal";
import { DateTime } from "luxon";

const queue = Queue('/quirrel', async () => {
  addEvent({ts: DateTime.now().toUTC().toJSDate(), msg: "/quirrel called"});
})

export const POST = queue

export { queue as _queue }