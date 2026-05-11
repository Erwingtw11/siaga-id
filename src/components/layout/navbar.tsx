import Container from "./container";

export default function Navbar() {
  return (
    <header className="border-b border-white/10">
      <Container>
        <div className="flex h-16 items-center justify-between">
          <h1 className="text-xl font-bold text-white">
            SIAGA<span className="text-red-500">.</span>ID
          </h1>

          <nav className="hidden gap-6 md:flex">
            <a href="#" className="text-sm text-white/80 hover:text-white">
              Home
            </a>

            <a href="#" className="text-sm text-white/80 hover:text-white">
              Dashboard
            </a>

            <a href="#" className="text-sm text-white/80 hover:text-white">
              Map
            </a>

            <a href="#" className="text-sm text-white/80 hover:text-white">
              Preparedness
            </a>
          </nav>

          <button className="rounded-full bg-red-500 px-4 py-2 text-sm font-medium text-white">
            Live Alert
          </button>
        </div>
      </Container>
    </header>
  );
}
