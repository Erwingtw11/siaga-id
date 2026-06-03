export default function FeaturesSection() {
  const fitur = [
    { title: "Peringatan Real-time", desc: "Dapatkan notifikasi instan sebelum bencana terjadi.", badge: "Instant Alert" },
    { title: "Peta Interaktif", desc: "Pantau situasi bencana secara langsung di wilayah terdekat.", badge: "Interactive Map" },
    { title: "Panduan Darurat", desc: "Panduan lengkap menghadapi berbagai jenis bencana alam.", badge: "Safety Manual" },
    { title: "Statistik & Riwayat", desc: "Analisis data bencana terintegrasi dalam bentuk grafik interaktif.", badge: "Data History" }
  ];

  return (
    <div className="space-y-12 py-2 w-full">

      {/* PAKSA MENGGUNAKAN TANDA SERU (!) UNTUK OVERRIDE SEMUA BUG LAYOUT */}
      <div className="w-full !text-center flex flex-col !items-center !justify-center max-w-3xl !mx-auto space-y-2">
        <span className="w-full block !text-center !mx-auto text-[10px] font-bold uppercase tracking-widest text-cyan-400">
          Fitur Utama
        </span>
        <h2 className="w-full block !text-center !mx-auto text-2xl sm:text-3xl md:text-4xl font-black text-white tracking-tight leading-tight">
          Semua yang Anda Butuhkan dalam Satu Platform
        </h2>
      </div>

      {/* Grid 4 Kolom */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {fitur.map((item, idx) => (
          <div key={idx} className="bg-white/[0.01] border border-white/5 rounded-xl p-5 flex flex-col justify-between min-h-[180px] hover:border-white/10 transition-all">
            <div>
              <div className="flex justify-between items-center mb-3">
                <span className="h-2 w-2 rounded-full bg-cyan-500" />
                <span className="text-[9px] font-bold text-slate-500 uppercase tracking-wider">{item.badge}</span>
              </div>
              <h3 className="text-base font-bold text-white">{item.title}</h3>
              <p className="text-xs text-slate-400 mt-1.5 leading-relaxed">{item.desc}</p>
            </div>
            <span className="text-[10px] font-bold text-cyan-400 uppercase tracking-widest mt-4 block cursor-pointer hover:text-cyan-300">
              Live Sync &rarr;
            </span>
          </div>
        ))}
      </div>

    </div>
  );
}