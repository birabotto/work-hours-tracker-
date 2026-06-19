import { useState } from "react";
import { supabase } from "../lib/supabase";

type Props = {
  onEntryCreated: () => void;
};

export default function WorkEntryForm({ onEntryCreated }: Props) {
  const [workDate, setWorkDate] = useState("");
  const [startTime, setStartTime] = useState("09:00");
  const [endTime, setEndTime] = useState("17:00");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    const { data: userData, error: userError } = await supabase.auth.getUser();

    if (userError || !userData.user) {
      alert("You must be logged in.");
      return;
    }

    const { error } = await supabase.from("work_entries").insert({
      user_id: userData.user.id,
      work_date: workDate,
      start_time: startTime,
      end_time: endTime,
    });

    if (error) {
      alert(error.message);
      return;
    }

    setWorkDate("");
    setStartTime("09:00");
    setEndTime("17:00");
    onEntryCreated();
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-2xl bg-white p-6 shadow space-y-4"
    >
      <h2 className="text-xl font-bold text-slate-900">Add work hours</h2>

      <input
        type="date"
        value={workDate}
        onChange={(e) => setWorkDate(e.target.value)}
        required
        className="w-full rounded-lg border border-slate-300 px-4 py-3"
      />

      <div className="grid grid-cols-2 gap-4">
        <input
          type="time"
          value={startTime}
          onChange={(e) => setStartTime(e.target.value)}
          required
          className="rounded-lg border border-slate-300 px-4 py-3"
        />

        <input
          type="time"
          value={endTime}
          onChange={(e) => setEndTime(e.target.value)}
          required
          className="rounded-lg border border-slate-300 px-4 py-3"
        />
      </div>

      <button className="w-full rounded-lg bg-blue-600 py-3 font-semibold text-white hover:bg-blue-700">
        Save hours
      </button>
    </form>
  );
}
