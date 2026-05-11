import Container from "./container";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#071120]/80 backdrop-blur-xl">
      <Container>
        <div className="flex h-16 items-center justify-between">
          <div>
            <h1 className="text-xl font-bold tracking-wide text-white">
              SIAGA<span className="text-red-500">.</span>ID
            </h1>
          </div>

          <nav className="hidden items-center gap-8 md:flex">
            <a
              href="#"
              className="text-sm text-white/70 transition hover:text-white"
            >
              Home
            </a>

            <a
              href="#"
              className="text-sm text-white/70 transition hover:text-white"
            >
              Dashboard
            </a>

            <a
              href="#"
              className="text-sm text-white/70 transition hover:text-white"
            >
              Map
            </a>

            <a
              href="#"
              className="text-sm text-white/70 transition hover:text-white"
            >
              Preparedness
            </a>
          </nav>

          <button className="rounded-full bg-red-500 px-4 py-2 text-sm font-medium text-white transition hover:bg-red-400">
            Live Alert
          </button>
        </div>
      </Container>
    </header>
  );
}
