import { getLatestEarthquake } from "@/lib/bmkg/earthquake";

export default async function LatestEarthquake() {
  const earthquake = await getLatestEarthquake();

  if (!earthquake) {
    return (
      <div className="rounded-3xl border border-white/10 bg-[#0F172A]/80 p-6">
        <p className="text-white">Gagal mengambil data BMKG.</p>
      </div>
    );
  }

  return (
    <div className="rounded-3xl border border-white/10 bg-[#0F172A]/80 p-6">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm uppercase tracking-[0.2em] text-cyan-400">
            Latest Earthquake
          </p>

          <h2 className="mt-3 text-3xl font-bold text-white">
            M {earthquake.Magnitude}
          </h2>
        </div>

        <div className="rounded-full bg-red-500/20 px-3 py-1 text-sm font-medium text-red-400">
          Realtime
        </div>
      </div>

      <div className="mt-8 space-y-4">
        <div>
          <p className="text-sm text-white/50">Wilayah</p>

          <h3 className="mt-1 text-lg font-semibold text-white">
            {earthquake.Wilayah}
          </h3>
        </div>

        <div>
          <p className="text-sm text-white/50">Waktu</p>

          <p className="mt-1 text-white/80">
            {earthquake.Tanggal} • {earthquake.Jam}
          </p>
        </div>

        <div>
          <p className="text-sm text-white/50">Potensi</p>

          <p className="mt-1 text-white/80">{earthquake.Potensi}</p>
        </div>
      </div>
    </div>
  );
}
