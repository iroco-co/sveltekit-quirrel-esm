const crons: string[] = []

export function getCrons(): string[] {
  return crons;
}

export function addCron(cron: string|undefined) {
  if (cron) {
    crons.push(cron);
  }
}

export function deleteCron(cron: string | undefined) {
  if (cron) {
    const index = crons.indexOf(cron);
    if (index > -1) {
      crons.splice(index, 1);
    }
  }
}
