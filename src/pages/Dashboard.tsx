import { supabase } from "../lib/supabase";

export default function Dashboard() {
  async function handleLogout() {
    await supabase.auth.signOut();
    window.location.href = "/";
  }

  return (
    <main>
      <h1>Dashboard</h1>
      <p>You are logged in.</p>
      <button onClick={handleLogout}>Logout</button>
    </main>
  );
}
