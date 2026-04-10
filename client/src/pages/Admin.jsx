import { useEffect, useState } from "react";
import API from "../api/config";

function Admin() {
  const [messages, setMessages] = useState([]);
  const [stats, setStats] = useState([]);

  useEffect(() => {
    API.get("/admin/messages").then((res) => setMessages(res.data));
    API.get("/admin/stats").then((res) => setStats(res.data));
  }, []);

  return (
    <div className="min-h-screen p-10 text-white">
      <h1 className="text-3xl text-green-400 mb-8">ADMIN TERMINAL</h1>

      <h2 className="text-xl text-green-400 mb-4">Incoming Messages</h2>
      <div className="space-y-4 mb-10">
        {messages.map((m, i) => (
          <div
            key={i}
            className="border border-gray-800 p-5 rounded-xl hover:border-green-400 transition"
          >
            <div className="flex justify-between mb-2">
              <p className="text-green-400 font-semibold">{m.name}</p>
              <p className="text-gray-400 text-sm">
                {new Date(m.createdAt).toLocaleString()}
              </p>
            </div>
            <p className="text-gray-400 text-sm mb-1">{m.email}</p>
            <p className="text-yellow-400 mb-2">{m.subject}</p>
            <p className="text-gray-300">{m.message}</p>
          </div>
        ))}
      </div>

      <h2 className="text-xl text-green-400 mb-4">Client Activity</h2>
      <div className="grid md:grid-cols-3 gap-4">
        {stats.map((s, i) => (
          <div
            key={i}
            className="border border-gray-800 p-4 rounded-lg text-center hover:border-green-400"
          >
            <p className="text-gray-400 text-sm">{s._id}</p>
            <p className="text-2xl text-green-400">{s.count}</p>
            <p className="text-xs text-gray-500">messages</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Admin;
