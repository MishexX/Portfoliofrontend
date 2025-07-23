import React from "react";

const TermsCondition = () => {
  return (
    <section className="relative py-24 md:py-52 px-4 sm:px-6 lg:px-8 bg-[#0F0715] overflow-hidden min-h-screen flex items-center">
      {/* Background Image Container */}
      <div className="absolute top-0 right-0 z-10 w-full max-w-[50vw] h-[80vh] -translate-y-1/4 translate-x-1/4 rotate-[-39deg] opacity-5 md:opacity-[0.04]">
        <img
          src="/hero.png"
          alt="Background"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Main Content Container */}
      <div className="container mx-auto relative flex flex-col lg:flex-row items-center justify-between h-full gap-8 md:gap-12">
        {/* Left Text Section */}
        <div className="relative z-10 w-full lg:w-1/2 text-center lg:text-left">
          {/* Stroke Text (Behind Content) */}
          <h1
            style={{ WebkitTextStroke: "1px #8750F7", whiteSpace: "nowrap" }}
            className="text-transparent absolute -left-4 md:-left-22 top-18 md:-top-35 text-[4rem] sm:text-[6rem] md:text-[10rem] lg:text-[13rem] xl:text-[18.8rem] select-none font-semibold z-0 opacity-30 md:opacity-100"
          >
            Terms And Conditions
          </h1>

          {/* Gradient Text (Front) */}
          <h1 className="relative z-30 text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold bg-gradient-to-r from-[#8750F7] to-[#FFFFFF] bg-clip-text text-transparent mt-28 md:mt-40 lg:mt-20">
            Privacy Policy
          </h1>
        </div>

        {/* Right Graphics Section */}
        <div className="relative w-full lg:w-1/2 flex justify-center lg:justify-end z-30">
          <div className="relative w-[280px] h-[280px] sm:w-[350px] sm:h-[350px] md:w-[500px] md:h-[500px]">
            {/* Main Image Container */}
            <div className="relative w-full h-full rounded-full overflow-hidden z-40 aspect-square">
              <img
                src="/pen.png"
                alt="Terms Illustration"
                className="w-full h-full object-cover"
              />
              {/* Semi-circle Outline */}
              <div className="absolute inset-0 border-2 md:border-4 border-[#AE76FB] border-b-transparent border-l-transparent rounded-full transform rotate-45" />
            </div>

            {/* Message Icon */}
            <img
              src="/message-icon.png"
              alt="Message"
              className="absolute top-2 md:top-4 -left-12 md:-left-20 w-32 md:w-58 h-12 md:h-18 z-50 animate-float"
            />

            {/* Vertical Dots */}
            <div className="absolute -right-8 md:-right-19 top-1/2 transform -translate-y-1/2 flex flex-col space-y-4 md:space-y-12 z-40">
              <img
                src="/bluedot.png"
                className="w-3 h-3 md:w-5 md:h-5"
                alt="dot"
              />
              <img
                src="/purpledot.png"
                className="w-3 h-3 md:w-5 md:h-5 ml-3 md:ml-6"
                alt="dot"
              />
              <img
                src="/greendot.png"
                className="w-8 h-8 md:w-15 md:h-15"
                alt="dot"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Lines Container */}
      <div className="hidden lg:block absolute inset-0 pointer-events-none z-5">
        {/* Vertical Lines */}
        <div className="absolute right-[10%] lg:right-[200px] top-0 h-full">
          <div className="w-px h-full bg-gradient-to-b from-[#212034] via-[#805BC0] to-[#232237] opacity-60" />
        </div>
        <div className="absolute right-[25%] xl:right-[450px] top-0 h-1/2">
          <div className="w-px h-full bg-[#1F1E33] opacity-60" />
        </div>

        {/* Horizontal Lines with Plus Icons */}
        <div className="absolute right-[10%] lg:right-[200px] top-[30%] w-[30%] lg:w-[400px]">
          <div className="h-px w-full bg-[#2D2C40] opacity-40" />
          <PlusIcon className="absolute right-0 -top-2" />
        </div>
        <div className="absolute right-[10%] lg:right-[200px] top-[70%] w-[25%] lg:w-[300px]">
          <div className="h-px w-full bg-[#2D2C40] opacity-40" />
          <PlusIcon className="absolute right-0 -top-2" />
        </div>
      </div>
    </section>
  );
};

// Plus Icon Component
const PlusIcon = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 14 12"
    className={`w-3 h-3 md:w-4 md:h-4 ${className}`}
  >
    <path d="M0.84375 6.20984H13.3325" stroke="white" strokeWidth="1.6" />
    <path d="M7.28906 0.972595V11.4471" stroke="white" strokeWidth="1.6" />
  </svg>
);

export default TermsCondition;
