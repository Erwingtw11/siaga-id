import Container from "./container";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 py-6">
      <Container>
        <div className="flex flex-col items-center justify-between gap-4 text-center md:flex-row md:text-left">
          <div>
            <h2 className="text-lg font-semibold text-white">
              SIAGA<span className="text-red-500">.</span>ID
            </h2>

            <p className="mt-1 text-sm text-white/60">
              Smart Early Warning System for Indonesia
            </p>
          </div>

          <p className="text-sm text-white/50">
            © 2026 SIAGA.ID — All rights reserved.
          </p>
        </div>
      </Container>
    </footer>
  );
}
