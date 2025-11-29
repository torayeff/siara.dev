import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-dvh bg-[#050505] text-[#e0e0e0] font-mono flex flex-col p-6 md:p-12 relative overflow-hidden selection:bg-[#e0e0e0] selection:text-[#050505]">
      {/* Grid Background */}
      <div
        className="absolute inset-0 z-0 opacity-20 pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(to right, #333 1px, transparent 1px), linear-gradient(to bottom, #333 1px, transparent 1px)`,
          backgroundSize: "40px 40px",
        }}
      />

      {/* Header */}
      <header className="relative z-10 w-full mb-20">
        <div className="relative w-8 h-8 opacity-90">
          <Image
            src="/assets/images/logo-white.png"
            alt="Siara Logo"
            fill
            className="object-contain"
            priority
          />
        </div>
      </header>

      {/* Main Content */}
      <div className="relative z-10 flex-1 flex flex-col justify-center max-w-5xl w-full">
        <div className="flex flex-col gap-10">
          <h1 className="text-6xl md:text-9xl font-bold tracking-tighter uppercase leading-none mix-blend-difference">
            Siara<span className="animate-pulse text-[#e0e0e0]">_</span>
          </h1>

          <div className="w-full h-px bg-[#333] my-2" />

          <p className="text-xl md:text-2xl font-light leading-relaxed max-w-2xl text-[#888]">
            <span className="text-[#e0e0e0] font-medium block mb-2">
              Semantic Indexing and Retrieval Agent.
            </span>
            Transforming video into queryable knowledge graphs.
          </p>
        </div>
      </div>

      {/* Footer */}
      <footer className="relative z-10 w-full mt-20 flex justify-end">
        <p className="text-xs uppercase tracking-widest text-[#444] font-mono">
          © 2025 SIARA.DEV
        </p>
      </footer>
    </main>
  );
}
