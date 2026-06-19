import type { WorkEntry } from "./WorkEntryList";
import { generateSmsMessage } from "../lib/generateSmsMessage";

type Props = {
  entries: WorkEntry[];
};

export default function SmsPreview({ entries }: Props) {
  const message = generateSmsMessage(entries);

  async function handleCopy() {
    await navigator.clipboard.writeText(message);
    alert("SMS copied!");
  }

  return (
    <section className="rounded-2xl bg-white p-6 shadow space-y-4">
      <h2 className="text-xl font-bold text-slate-900">SMS Summary</h2>

      <textarea
        value={message}
        readOnly
        className="h-64 w-full rounded-lg border border-slate-300 p-4"
      />

      <button
        onClick={handleCopy}
        className="w-full rounded-lg bg-green-600 py-3 font-semibold text-white hover:bg-green-700"
      >
        Copy SMS
      </button>
    </section>
  );
}
