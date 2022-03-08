export async function sleep(ms: number) {
  return await new Promise<void>((resolve) => {
    setTimeout(() => {
      resolve();
    }, ms);
  });
}

export function deepCopy(object: any) {
  return JSON.parse(JSON.stringify(object));
}

export function getWeekNumber(d: Date) {
  // Copy date so don't modify original
  d = new Date(Date.UTC(d.getFullYear(), d.getMonth(), d.getDate()));
  // Set to nearest Thursday: current date + 4 - current day number
  // Make Sunday's day number 7
  d.setUTCDate(d.getUTCDate() + 4 - (d.getUTCDay() || 7));
  // Get first day of year
  const yearStart = new Date(Date.UTC(d.getUTCFullYear(), 0, 1));
  // Calculate full weeks to nearest Thursday
  const weekNo = Math.ceil((((d as any) - (yearStart as any)) / 86400000 + 1) / 7);
  // Return array of year and week number
  return [d.getUTCFullYear(), weekNo];
}

export function getNextWeek(weekNumber: number, year: number) {
  const nextWeek = (weekNumber + 1) % 53;
  return nextWeek === 0 ? [year + 1, nextWeek + 1] : [year, nextWeek];
}

export function hexToDecimalTokenId(tokenId: string): string {
  if (tokenId?.startsWith('0x')) {
    tokenId = String(parseInt(tokenId, 16));
  }
  return tokenId;
}
