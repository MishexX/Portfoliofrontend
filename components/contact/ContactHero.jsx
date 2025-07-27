export default function ContactHero() {
  return (
    <section className="relative py-16 md:py-32 px-4 sm:px-6 lg:px-8 bg-[#0F0715] overflow-hidden min-h-screen flex items-center">
      {/* Background Image Container */}
      <div className="absolute top-0 right-0 z-10 w-full max-w-[50vw] h-[80vh] -translate-y-1/4 translate-x-1/4 rotate-[-39deg] opacity-5">
        <img
          src="/hero.png"
          alt="Background"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Sun Rays Effect */}
      <div className="absolute top-8 -right-8 md:top-16 md:-right-16 w-24 h-24 md:w-48 md:h-48 opacity-50 mix-blend-screen z-15 pointer-events-none">
        <div className="absolute inset-0 animate-pulse">
          {[...Array(12)].map((_, i) => (
            <div
              key={i}
              className="absolute w-px h-full bg-[#8750F7] origin-bottom"
              style={{
                left: "50%",
                transform: `rotate(${i * 30}deg) translateY(-20%)`,
                opacity: Math.random() * 0.3 + 0.2,
              }}
            />
          ))}
        </div>
      </div>

      {/* Decorative Lines - Hidden on mobile */}
      <div className="hidden lg:block absolute inset-0 pointer-events-none z-5">
        {/* Vertical Lines */}
        <div className="absolute right-[15%] top-0 h-full">
          <svg width="4" height="100%" viewBox="0 0 4 944" className="h-full">
            <path
              d="M2 0V944"
              stroke="url(#verticalGradient)"
              strokeOpacity="0.6"
              strokeWidth="3"
            />
            <defs>
              <linearGradient id="verticalGradient">
                <stop stopColor="#212034" />
                <stop offset="0.74" stopColor="#805BC0" />
                <stop offset="1" stopColor="#232237" />
              </linearGradient>
            </defs>
          </svg>
        </div>

        {/* Horizontal Lines */}
        {[30, 70].map((position, idx) => (
          <div
            key={idx}
            className={`absolute right-[15%] w-[30%]`}
            style={{ top: `${position}%` }}
          >
            <svg width="100%" height="2" viewBox="0 0 1547 2">
              <path
                d={`M0 1H${idx === 0 ? "1547" : "1547.8"}`}
                stroke="#2D2C40"
                strokeOpacity="0.4"
                strokeWidth="4"
              />
            </svg>
            <div className="absolute right-0 -top-3">
              <svg width="14" height="12" viewBox="0 0 14 12">
                <path
                  d="M0.8 6h12.5M7 0.9v10.5"
                  stroke="white"
                  strokeWidth="1.6"
                />
              </svg>
            </div>
          </div>
        ))}
      </div>

      {/* Text Container */}
      <div className="container mx-auto relative text-center lg:text-left ">
        {/* Stroke Text Background */}
        <h1
          style={{ WebkitTextStroke: "1px #8750F7", flex: "nowrap" }}
          className="text-transparent absolute -right-10 lg:-right-40 top-1/2 -translate-y-1/2 z-10 text-9xl md:text-8xl lg:text-[10rem] xl:text-[17.8rem] font-normal select-none opacity-30 lg:opacity-50"
        >
          Kontakt aufnehmen
        </h1>

        {/* Main Heading */}
        <h1 className="relative z-20 text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold bg-gradient-to-r from-[#8750F7] to-white bg-clip-text text-transparent md:left-105 lg:mx-0 max-w-2xl lg:max-w-none">
          Kontakt aufnehmen
        </h1>
      </div>
    </section>
  );
}
