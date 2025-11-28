import Image from "next/image";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-black flex flex-col items-center justify-center p-8 overflow-hidden">
      <div className="relative z-10 max-w-4xl w-full flex flex-col items-center gap-8 animate-fade-in-up">
        {/* Logo Container */}
        <div className="relative w-20 h-20 md:w-24 md:h-24 opacity-90 hover:opacity-100 transition-opacity duration-500">
          <Image
            src="/assets/images/logo-white.png"
            alt="Siara Logo"
            fill
            className="object-contain"
            priority
          />
        </div>

        {/* Text Content */}
        <div className="font-sans text-center selection:bg-white/20 flex flex-col items-center gap-6">
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-semibold tracking-tighter">
            <span className="bg-gradient-to-b from-white via-white/90 to-neutral-400 bg-clip-text text-transparent inline-block">
              Siara
            </span>
          </h1>

          <p className="text-xl md:text-3xl font-medium tracking-tight text-neutral-400 max-w-2xl leading-relaxed">
            Turn your passive demos into <br className="hidden md:block" />
            <span className="text-white">active sales agents.</span>
          </p>
        </div>
      </div>

      {/* Background Ambient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-white/[0.03] rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-50" />
    </main>
  );
}
