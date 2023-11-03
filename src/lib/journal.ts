const events: string[] = []

export function getEvents(): string[] {
  return events;
}

export function addEvent(event: string|undefined) {
  if (event) {
    events.push(event);
  }
}

