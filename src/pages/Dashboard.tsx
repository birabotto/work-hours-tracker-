import { supabase } from "../lib/supabase";

export default function Dashboard() {
  async function handleLogout() {
    await supabase.auth.signOut();
    window.location.href = "/";
  }

  return (
    <main className="min-h-screen bg-slate-100 p-6">
      <div className="mx-auto max-w-5xl">
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
      </div>
    </main>
  );
}
