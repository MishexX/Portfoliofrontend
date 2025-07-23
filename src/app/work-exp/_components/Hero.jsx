export default function Hero() {
    return (
      <section className="pt-32 pb-20 px-8 h-[500px] relative overflow-hidden bg-[#0F0715]">
        {/* Large Stroke Text */}
        <h1
          className="text-transparent font-bold absolute top-[15px] left-[52%] transform -translate-x-1/2 z-0 text-[280px] select-none"
          style={{ WebkitTextStroke: "2px #2A1454" }}
        >
          Experience
        </h1>
  
        <div className="container mx-auto flex flex-col items-center relative">
          {/* Foreground Text */}
          <h2 className="relative w-[750px] text-5xl font-bold top-16 text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-white z-10">
            My Journey: Building Scallable Solutions & Driving Innovation
          </h2>
  
          {/* Background Image */}
          <img
            src="hero.png"
            alt="Background"
            className="absolute inset-0 z-[-1] object-cover opacity-20"
          />
  
          {/* White Lighting Effect */}
          <div className="absolute top-[-100px] right-[-90px] w-40 h-40 bg-gradient-to-b from-[#232230] to-[#805BC0] opacity-100 rounded-full filter blur-3xl"></div>
  
          {/* Decorative Lines & Plus Symbols */}
          <div className="absolute inset-0 pointer-events-none">
            {/* Left Vertical Line */}
            <div className="absolute left-[30%] top-0 h-full w-[1px] bg-gray-600 opacity-30 after:content-['+'] after:absolute after:top-[50%] after:left-[-10px] after:text-white after:text-xl" />
  
            {/* Right Vertical Line */}
            <div className="absolute right-[20%] top-0 h-full w-[1px] bg-gray-600 opacity-30 after:content-['+'] after:absolute after:top-[50%] after:left-[-10px] after:text-white after:text-xl" />
  
            {/* Horizontal Line */}
            <div className="absolute top-[60%] left-0 w-full h-[1px] bg-gray-600 opacity-30 after:content-['+'] after:absolute after:left-[50%] after:top-[-10px] after:text-white after:text-xl" />
          </div>
        </div>
      </section>
    );
  }
  