export default function Hero() {
  return (
    <section className="pt-20 pb-12 px-4 md:px-8 h-[350px] md:h-[450px] relative overflow-hidden bg-[#0F0715]">
      {/* Large Stroke Text */}
      <h1
        className="text-transparent font-bold absolute top-[10px] left-1/2 transform -translate-x-1/2 z-0 select-none 
                   text-[80px] sm:text-[120px] md:text-[290px] md:mt-0 mt-12"
        style={{ WebkitTextStroke: "2px #2A1454" }}
      >
        Technical
      </h1>

      <div className="container mx-auto flex flex-col items-center relative">
        {/* Foreground Text */}
        <h2 className="relative text-3xl sm:text-4xl md:text-5xl font-bold top-12 md:top-16 text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-white z-10">
          Technical <span className="text-white">Skills</span>
        </h2>

        {/* Background Image */}
        <img
          src="hero.png"
          alt="Background"
          className="absolute inset-0 z-[-1] object-cover opacity-20"
        />

        {/* White Lighting Effect */}
        <div className="absolute top-[-60px] right-[-45px] w-20 h-20 sm:w-28 sm:h-28 bg-gradient-to-b from-[#232230] to-[#805BC0] opacity-100 rounded-full filter blur-3xl"></div>

        {/* Decorative Lines & Plus Symbols */}
        <div className="absolute inset-0 pointer-events-none">
          {/* Left Vertical Line */}
          <div
            className="absolute left-[25%] sm:left-[30%] top-0 h-full w-[1px] bg-gray-600 opacity-30 
                          after:content-['+'] after:absolute after:top-[50%] after:left-[-8px] after:text-white after:text-lg"
          />
          {/* Right Vertical Line */}
          <div
            className="absolute right-[20%] top-0 h-full w-[1px] bg-gray-600 opacity-30 
                          after:content-['+'] after:absolute after:top-[50%] after:left-[-8px] after:text-white after:text-lg"
          />
          {/* Horizontal Line */}
          <div
            className="absolute top-[60%] left-0 w-full h-[1px] bg-gray-600 opacity-30 
                          after:content-['+'] after:absolute after:left-[50%] after:top-[-8px] after:text-white after:text-lg"
          />
        </div>
      </div>
    </section>
  );
}
