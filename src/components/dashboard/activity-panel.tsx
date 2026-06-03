const activities = [
  {
    title: "Gempa terdeteksi di Lampung Selatan",
    time: "5 menit lalu",
    status: "Siaga",
    color: "text-orange-400",
  },
  {
    title: "Aktivitas gempa meningkat di Aceh",
    time: "12 menit lalu",
    status: "Awas",
    color: "text-red-400",
  },
  {
    title: "Pemantauan tsunami berjalan normal",
    time: "20 menit lalu",
    status: "Normal",
    color: "text-green-400",
  },
  {
    title: "Update data BMKG berhasil disinkronkan",
    time: "35 menit lalu",
    status: "Realtime",
    color: "text-cyan-400",
  },
];

export default function ActivityPanel() {
  return (
    <div className="rounded-[32px] border border-white/10 bg-[#0B1324]/80 p-6">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm font-medium uppercase tracking-[0.25em] text-cyan-400">
            Live Alerts
          </p>

          <h2 className="mt-3 text-4xl font-bold text-white">
            Aktivitas Terbaru
          </h2>
        </div>
      </div>

      <div className="mt-8 space-y-4">
        {activities.map((activity, index) => (
          <div
            key={index}
            className="rounded-2xl border border-white/10 bg-white/[0.03] p-5"
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <h3 className="text-lg font-semibold text-white">
                  {activity.title}
                </h3>

                <p className="mt-2 text-sm text-white/45">{activity.time}</p>
              </div>

              <span className={`text-sm font-semibold ${activity.color}`}>
                {activity.status}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
