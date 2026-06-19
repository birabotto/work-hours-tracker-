import { calculateHours } from "../lib/calculateHours";

export type WorkEntry = {
  id: string;
  work_date: string;
  start_time: string;
  end_time: string;
};

type Props = {
  entries: WorkEntry[];
  onDeleteEntry: (id: string) => void;
};

export default function WorkEntryList({ entries, onDeleteEntry }: Props) {
  const totalHours = entries.reduce(
    (total, entry) => total + calculateHours(entry.start_time, entry.end_time),
    0,
  );

  return (
    <section className="rounded-2xl bg-white p-6 shadow">
      <h2 className="text-xl font-bold text-slate-900">Monthly Hours</h2>

      <div className="mt-4 space-y-3">
        {entries.map((entry) => (
          <div
            key={entry.id}
            className="flex items-center justify-between rounded-lg border border-slate-200 p-4"
          >
            <div>
              <p className="font-semibold text-slate-900">{entry.work_date}</p>
              <p className="text-slate-500">
                {entry.start_time.slice(0, 5)} - {entry.end_time.slice(0, 5)}
              </p>
            </div>

            <div className="flex items-center gap-4">
              <p className="font-bold text-blue-600">
                {calculateHours(entry.start_time, entry.end_time)}h
              </p>

              <button
                onClick={() => onDeleteEntry(entry.id)}
                className="rounded-lg bg-red-100 px-3 py-2 text-sm font-semibold text-red-600 hover:bg-red-200"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-6 border-t pt-4 text-right">
        <p className="text-lg font-bold text-slate-900">Total: {totalHours}h</p>
      </div>
    </section>
  );
}
