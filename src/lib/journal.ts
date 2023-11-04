const events: CbEvent[] = []

export function getEvents(): CbEvent[] {
  return events;
}

export function addEvent(event: CbEvent|undefined) {
  if (event) {
    events.push(event);
  }
}

export type CbEvent = {
  ts: Date
  msg: string
}