import { useEffect, useState } from "react";
import WorkEntryForm from "../components/WorkEntryForm";
import WorkEntryList, { type WorkEntry } from "../components/WorkEntryList";
import { supabase } from "../lib/supabase";
import SmsPreview from "../components/SmsPreview";

export default function Dashboard() {
  const [entries, setEntries] = useState<WorkEntry[]>([]);
  const [selectedMonth, setSelectedMonth] = useState(
    new Date().toISOString().slice(0, 7),
  );

  async function loadEntries() {
    const startDate = `${selectedMonth}-01`;
    const endDate = `${selectedMonth}-31`;

    const { data, error } = await supabase
      .from("work_entries")
      .select("id, work_date, start_time, end_time")
      .gte("work_date", startDate)
      .lte("work_date", endDate)
      .order("work_date", { ascending: true });

    if (error) {
      alert(error.message);
      return;
    }

    setEntries(data || []);
  }

  useEffect(() => {
    loadEntries();
  }, [selectedMonth]);

  async function handleLogout() {
    await supabase.auth.signOut();
    window.location.href = "/";
  }

  async function handleDeleteEntry(id: string) {
    const confirmDelete = confirm(
      "Are you sure you want to delete this entry?",
    );

    if (!confirmDelete) return;

    const { error } = await supabase.from("work_entries").delete().eq("id", id);

    if (error) {
      alert(error.message);
      return;
    }

    loadEntries();
  }

  return (
    <main className="min-h-screen bg-slate-100 p-6">
      <div className="mx-auto max-w-5xl space-y-6">
        <header className="flex items-center justify-between rounded-2xl bg-white p-6 shadow">
          <div>
            <h1 className="text-2xl font-bold text-slate-900">
              Work Hours Tracker
            </h1>
            <p className="text-slate-500">Dashboard</p>
          </div>

          <button
            onClick={handleLogout}
            className="rounded-lg bg-slate-900 px-4 py-2 text-white hover:bg-slate-700"
          >
            Logout
          </button>
        </header>
        <section className="rounded-2xl bg-white p-6 shadow">
          <label className="block text-sm font-semibold text-slate-700">
            Select month
          </label>

          <input
            type="month"
            value={selectedMonth}
            onChange={(e) => setSelectedMonth(e.target.value)}
            className="mt-2 w-full rounded-lg border border-slate-300 px-4 py-3"
          />
        </section>
        <WorkEntryForm onEntryCreated={loadEntries} />
        <WorkEntryList entries={entries} onDeleteEntry={handleDeleteEntry} />
        <SmsPreview entries={entries} />
      </div>
    </main>
  );
}
