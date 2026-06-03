import FadeIn from "@/components/animations/fade-in";

const activities = [
  {
    title: "Gempa terdeteksi di Lampung Selatan",
    time: "5 menit lalu",
    status: "Siaga",
  },
  {
    title: "Aktivitas gempa meningkat di Aceh",
    time: "12 menit lalu",
    status: "Awas",
  },
  {
    title: "Pemantauan tsunami berjalan normal",
    time: "20 menit lalu",
    status: "Normal",
  },
  {
    title: "Update data BMKG berhasil disinkronkan",
    time: "35 menit lalu",
    status: "Realtime",
  },
];

export default function ActivityPanel() {
  return (
    <div className="rounded-3xl border border-white/10 bg-[#0F172A]/80 p-6">
      <div className="mb-8">
        <p className="text-sm uppercase tracking-[0.2em] text-cyan-400">
          Realtime Activity
        </p>

        <h3 className="mt-3 text-2xl font-bold text-white">
          Aktivitas Monitoring
        </h3>
      </div>

      <div className="space-y-5">
        {activities.map((activity, index) => (
          <FadeIn key={index}>
            <div className="flex items-start justify-between gap-4 rounded-2xl border border-white/10 p-4 transition duration-300 hover:border-cyan-400/20">
              <div>
                <h4 className="font-medium text-white">{activity.title}</h4>

                <p className="mt-2 text-sm text-white/50">{activity.time}</p>
              </div>

              <div
                className={`rounded-full px-3 py-1 text-xs font-medium ${
                  activity.status === "Awas"
                    ? "bg-red-500/20 text-red-400"
                    : activity.status === "Siaga"
                      ? "bg-orange-500/20 text-orange-400"
                      : activity.status === "Realtime"
                        ? "bg-cyan-400/20 text-cyan-400"
                        : "bg-green-500/20 text-green-400"
                }`}
              >
                {activity.status}
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </div>
  );
}
