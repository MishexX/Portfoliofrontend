import Image from "next/image";

const AboutSection = () => {
  return (
    <section className="py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
        {/* Image Container */}
        <div className="mx-auto w-full max-w-[300px] md:max-w-[400px] lg:w-[500px] lg:h-[500px] h-[300px] md:h-[400px] rotate-6 transform relative border-2 border-[#2A1454] rounded-3xl overflow-hidden">
          {/* Gradient Circle */}
          <div
            className="absolute left-[-50px] md:left-[-80px] lg:left-[-110px] bottom-[-50px] md:bottom-[-80px] lg:bottom-[-110px] 
            w-[100px] h-[100px] md:w-[160px] md:h-[160px] lg:w-[220px] lg:h-[220px]
            border-[2px] border-purple-900 border-r-8"
            style={{
              borderRadius: "110px",
              background:
                "linear-gradient(260deg, #8750F7 0%, rgba(115, 67, 210, 0.00) 100%)",
              filter: "blur(50px) md:blur(60px) lg:blur(75px)",
            }}
          ></div>
          <img
            src="misha1.jpeg"
            alt="Profile"
            className="w-full h-full object-cover rounded-3xl transform scale-105"
          />
        </div>

        {/* Content */}
        <div className="space-y-4 md:space-y-6 lg:space-y-6">
          <h2 className="text-xl md:text-2xl font-semibold text-[#8750F7]">
            About Me
          </h2>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight md:leading-normal">
            Everything you can imagine is real!
          </h1>

          <p className="text-gray-400 text-base md:text-lg leading-relaxed md:leading-relaxed">
            Hello! I'm Mikheil, a dedicated Fullstack Developer with a strong
            background in software development and IT infrastructure, driven by
            a passion for problem-solving, efficiency, and innovation. Over the
            years, I have built a solid foundation in developing scalable
            applications and managing complex IT environments. I believe in
            writing clean, scalable, and maintainable code with a strong focus
            on security, automation, and infrastructure optimization.
            <br className="hidden md:block" />
            <br className="hidden md:block" />
            Beyond professional work, I am deeply passionate about 3D design,
            graphic design, and creative projects. I enjoy working on personal
            and freelance projects that allow me to explore new design
            techniques and technologies.
          </p>

          <button className="flex items-center gap-2 border-2 border-[#8750F7] px-4 py-2 md:px-6 md:py-3 rounded-full hover:bg-[#8750F7]/10 transition-all w-fit">
            <span className="text-[#8750F7] text-sm md:text-base lg:text-[16px] font-normal">
              Download CV
            </span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="19"
              height="17"
              viewBox="0 0 19 17"
              className="fill-[#8750F7] w-4 h-4 md:w-5 md:h-5"
            >
              <path d="M16.0729 10.2567C15.9595 10.2567 15.8462 10.3039 15.7329 10.3983C15.6195 10.4928 15.5629 10.6155 15.5629 10.7667V12.58C15.5629 13.0333 15.4023 13.4205 15.0812 13.7417C14.7601 14.0628 14.3918 14.2233 13.9762 14.2233H4.68286C4.26731 14.2233 3.89898 14.0628 3.57786 13.7417C3.25675 13.4205 3.0962 13.0333 3.0962 12.58V10.7667C3.0962 10.6155 3.03953 10.4928 2.9262 10.3983C2.81286 10.3039 2.69009 10.2567 2.55786 10.2567C2.42564 10.2567 2.30286 10.3039 2.18953 10.3983C2.0762 10.4928 2.01953 10.6155 2.01953 10.7667V12.58C2.01953 13.3355 2.28398 13.9778 2.81286 14.5067C3.34175 15.0355 3.96509 15.3 4.68286 15.3H13.9762C14.694 15.3 15.3173 15.0355 15.8462 14.5067C16.3751 13.9778 16.6395 13.3355 16.6395 12.58V10.7667C16.6395 10.6155 16.5829 10.4928 16.4695 10.3983C16.3562 10.3039 16.224 10.2567 16.0729 10.2567ZM8.93286 11.7867C9.0462 11.9 9.17842 11.9567 9.32953 11.9567C9.48064 11.9567 9.61286 11.9 9.7262 11.7867L12.7295 8.78332C12.8051 8.66999 12.8429 8.54721 12.8429 8.41499C12.8429 8.28277 12.7956 8.16943 12.7012 8.07499C12.6068 7.98054 12.4934 7.92388 12.3612 7.90499C12.229 7.8861 12.1062 7.93332 11.9929 8.04665L9.83953 10.1433V2.26665C9.83953 2.11554 9.79231 1.98332 9.69787 1.86999C9.60342 1.75665 9.48064 1.69999 9.32953 1.69999C9.17842 1.69999 9.05564 1.75665 8.9612 1.86999C8.86675 1.98332 8.81953 2.11554 8.81953 2.26665V10.1433L6.6662 8.04665C6.55286 7.93332 6.43009 7.87665 6.29786 7.87665C6.16564 7.87665 6.04286 7.92388 5.92953 8.01832C5.8162 8.11277 5.75953 8.23554 5.75953 8.38665C5.75953 8.53777 5.8162 8.66999 5.92953 8.78332L8.93286 11.7867Z" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
