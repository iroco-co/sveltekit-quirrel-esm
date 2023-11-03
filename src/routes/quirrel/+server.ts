import { Queue } from 'quirrel/sveltekit.d'
import { addEvent } from "$lib/journal";

const queue = Queue('/quirrel', async () => {
  addEvent("callback called");
})

export const POST = queue

export { queue }