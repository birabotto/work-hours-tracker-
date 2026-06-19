import type { WorkEntry } from "../components/WorkEntryList";
import { calculateHours } from "./calculateHours";

export function generateSmsMessage(entries: WorkEntry[]) {
  const totalHours = entries.reduce((total, entry) => {
    return total + calculateHours(entry.start_time, entry.end_time);
  }, 0);

  const lines = entries.map((entry) => {
    const hours = calculateHours(entry.start_time, entry.end_time);

    return `${entry.work_date}: ${entry.start_time.slice(0, 5)} - ${entry.end_time.slice(0, 5)} (${hours}h)`;
  });

  return `Hello,

Here is my work hours summary:

${lines.join("\n")}

Total hours worked: ${totalHours}h

Thank you,
Tibirica`;
}
