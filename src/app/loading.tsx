export default function Loading() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="orb-cyan w-[500px] h-[500px] top-0 left-0 opacity-30" />
      <div className="orb-purple w-[400px] h-[400px] bottom-0 right-0 opacity-30" />
      
      <div className="relative z-10 text-center">
        <div className="flex items-center justify-center gap-2 mb-4">
          <div className="w-3 h-3 rounded-full bg-cyan animate-bounce bounce-d0"></div>
          <div className="w-3 h-3 rounded-full bg-purple animate-bounce bounce-d1"></div>
          <div className="w-3 h-3 rounded-full bg-gold animate-bounce bounce-d2"></div>
        </div>
        <p className="text-muted-foreground font-semibold tracking-wide">Loading...</p>
      </div>
    </div>
  );
}
