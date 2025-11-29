import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#050505] text-[#e0e0e0] font-mono selection:bg-[#e0e0e0] selection:text-black p-4 md:p-8 flex flex-col relative overflow-hidden">
      {/* Subtle Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#202020_1px,transparent_1px),linear-gradient(to_bottom,#202020_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none" />

      <div className="relative z-10 w-full max-w-5xl mx-auto flex-1 flex flex-col justify-between border-x border-[#202020]/50 px-4 md:px-8 bg-[#050505]/50 backdrop-blur-[1px]">
        {/* Header / Top Bar */}
        <header className="flex justify-between items-start pt-8 md:pt-12 border-b border-[#202020] pb-6">
          <div className="flex items-center gap-4">
            <div className="relative w-8 h-8">
              <Image
                src="/assets/images/logo-white.png"
                alt="Siara Logo"
                fill
                className="object-contain opacity-80"
              />
            </div>
            <span className="uppercase tracking-widest text-xs text-[#666]">
              v0.1.0
            </span>
          </div>
          <div className="text-xs text-[#666] flex flex-col items-end">
            {/* Placeholder for future nav or status */}
          </div>
        </header>

        {/* Main Content */}
        <div className="flex flex-col gap-8 py-20">
          <h1 className="text-7xl md:text-9xl font-bold tracking-tighter uppercase leading-[0.8]">
            Siara
          </h1>
          <div className="h-px w-24 bg-[#e0e0e0]" />
          <p className="text-lg md:text-2xl max-w-2xl leading-normal text-[#a0a0a0]">
            <span className="text-[#e0e0e0]">
              Semantic Indexing and Retrieval Agent.
            </span>
            <br />
            Transforming video into queryable knowledge graphs.
          </p>
        </div>

        {/* Footer */}
        <footer className="border-t border-[#202020] py-8 flex justify-between items-end text-xs text-[#666] uppercase tracking-wider">
          <div className="flex flex-col gap-2">
            <p>Video-to-Knowledge</p>
          </div>
          <div className="text-right">
            <p>© 2025 SIARA.DEV</p>
          </div>
        </footer>
      </div>
    </main>
  );
}
