export function calculateHours(startTime: string, endTime: string) {
  const start = new Date(`2000-01-01T${startTime}`);
  const end = new Date(`2000-01-01T${endTime}`);

  const diffInMs = end.getTime() - start.getTime();
  return diffInMs / 1000 / 60 / 60;
}
