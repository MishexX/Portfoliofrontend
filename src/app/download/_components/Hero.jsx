import Image from "next/image";

import worldIcon from '../../../../public/world.png'
import emailIcon from '../../../../public/email-icon.png'
import PhoneIcon from '../../../../public/phone-icon.png'
import linedInIcon from '../../../../public/linkedin-icon.png'
import GithubIcon from '../../../../public/github-icon.png'
import Link from "next/link";

const socialLinks = [
  { src: "world.png", alt: "World Icon", href: "#" },
  { src: "email-icon.png", alt: "Email Icon", href: "#" },
  { src: "phone-icon.png", alt: "Phone Icon", href: "#" },
  { src: "linkedin-icon.png", alt: "LinkedIn Icon", href: "#" },
  { src: "github-icon.png", alt: "GitHub Icon", href: "#" }
];

export default function Hero() {
  return (
    <section className="pt-32 pb-20 px-8 min-h-screen relative overflow-hidden bg-[#0F0715]">
      <h1
        style={{ WebkitTextStroke: "3px #2A1454" }}
        className="text-transparent absolute top-[90px] left-[40%] transform -translate-x-1/2 z-0 text-[349px] select-none"
      >
        HI
      </h1>
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between relative">
  
        {/* Left Section - Image */}
        <div className="w-full md:w-1/2 relative flex justify-center items-center">
          {/* Profile Image with Glowing Effect */}
          <div className="relative w-[380px] h-[380px] rounded-full overflow-hidden border-4 border-[#2A1454] z-100">
            <img
              src="gerold.png"
              alt="Profile"
              className="w-full h-full object-cover rounded-full"
            />
            {/* Glowing Effect */}
            <div className="absolute left-[-50px] bottom-[-50px] w-[150px] h-[150px] bg-purple-500 opacity-50 blur-3xl rounded-full"></div>
          </div>
        </div>

        {/* Right Section - Content */}
        <div className="w-full md:w-[50%] mb-12 md:mb-0 relative z-10">
          {/* Icons */}
          <div className="flex items-start gap-8 mb-4">
          {socialLinks.map((link, index) => (
                <a key={index} href={link.href} className="w-9 h-9 flex items-center justify-center rounded-full border-[1px] border-[#8750F7]">
                  <img src={link.src} width={20} height={20} alt={link.alt} style={{ filter: 'invert(27%) sepia(92%) saturate(750%) hue-rotate(245deg) brightness(98%) contrast(99%)' }} />
                </a>
              ))}
          </div>
          <h1 className="text-3xl font-bold mb-8 bg-clip-text text-white">
            Hi! I am Mikheil
          </h1>
          <div className="mb-8">
            {/* Increased size for Next-Level Web Developer text */}
            <span className="block bg-gradient-to-r from-purple-500 to-white bg-clip-text text-transparent text-[80px] leading-none font-bold">
              Next-Level Web
            </span>
            <span className="block bg-gradient-to-r from-purple-500 to-white bg-clip-text text-transparent text-[80px] leading-none font-bold">
              Developer.
            </span>
          </div>
          <p className="mb-8 text-white text-md">
            Experienced Fullstack Developer specializing in <br /> scalable applications, IT infrastructure, and <br /> security-driven solutions.
          </p>
        </div>
      </div>

      {/* Background Image on the Right Side */}
      <div className="absolute inset-0 z-0">
          <div className="absolute -right-50 top-0 h-full w-[60%] opacity-30">
              <Image
              src="/hero.png"
              alt="Hero Background"
              fill
              className="object-cover object-right -rotate-20"
              />
          </div>
          <div className="absolute inset-0 bg-[#0F0715] opacity-90" />
      </div>

      {/* White Lighting Element */}
      <div className="absolute top-[-100px] right-[-90px] w-40 h-40 bg-gradient-to-b from-[#232230] to-[#805BC0] opacity-100 rounded-full filter blur-3xl"></div>

      {/* Vertical & Horizontal Lines */}
      {/* --- Vertical Lines --- */}
            {/* First Vertical Line (Gradient) – full height at left:750px */}
            <div className="absolute" style={{ right: "70px", top: 0 }}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="4"
                height="829"
                viewBox="0 0 4 919"
                fill="none"
                className="h-full"
              >
                <path
                  d="M1.88672 0.343018V306.923V944.657"
                  stroke="url(#paint0_linear_291_827)"
                  strokeOpacity="0.6"
                  strokeWidth="3.223"
                />
                <defs>
                  <linearGradient
                    id="paint0_linear_291_827"
                    x1="2.38669"
                    y1="0.343024"
                    x2="2.38669"
                    y2="944.657"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#212034" />
                    <stop offset="0.741667" stopColor="#805BC0" />
                    <stop offset="1" stopColor="#232237" />
                  </linearGradient>
                </defs>
              </svg>
            </div>

            {/* Second Vertical Line – from the top to the middle at left:540px */}
            <div
              className="absolute"
              style={{ right: "250px", top: 0, height: "50%" }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="4"
                height="453"
                viewBox="0 0 4 453"
                fill="none"
                className="h-full"
              >
                <path
                  d="M1.8125 0.940186V452.954"
                  stroke="rgba(31, 30, 51, 0.6)"
                  strokeWidth="3.223"
                />
              </svg>
            </div>

            {/* --- Horizontal Lines with Plus Icons --- */}
            {[
              {
                top: "25%",
                svg: (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="800"
                    height="5"
                    viewBox="0 0 1547 5"
                    fill="none"
                  >
                    <path
                      d="M0 2.02924H1547"
                      stroke="#2D2C40"
                      strokeOpacity="0.4"
                      strokeWidth="4.02864"
                    />
                  </svg>
                ),
              },
              {
                top: "75%",
                svg: (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="800"
                    height="5"
                    viewBox="0 0 1547 5"
                    fill="none"
                  >
                    <path
                      d="M1547.8 2.61273H0"
                      stroke="#2D2C40"
                      strokeOpacity="0.4"
                      strokeWidth="4.02864"
                    />
                  </svg>
                ),
              },
              {
                top: "100%",
                svg: (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="1000"
                    height="5"
                    viewBox="0 0 1192 5"
                    fill="none"
                  >
                    <path
                      d="M0.888672 2.29205H1193.37"
                      stroke="#2D2C40"
                      strokeOpacity="0.4"
                      strokeWidth="4.02864"
                    />
                  </svg>
                ),
              },
            ].map((line, idx) => (
              <div
                key={idx}
                className="absolute left-0 w-full"
                style={{ top: line.top }}
              >
                {line.svg}
                {/* Plus Icon at the intersection with the first vertical line */}
                <div className="absolute" style={{ right: "65px", top: "-6px" }}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="14"
                    height="12"
                    viewBox="0 0 14 12"
                    fill="none"
                  >
                    <path
                      d="M0.84375 6.20984H13.3325"
                      stroke="white"
                      strokeWidth="1.61146"
                    />
                    <path
                      d="M7.28906 0.972595V11.4471"
                      stroke="white"
                      strokeWidth="1.61146"
                    />
                  </svg>
                </div>
              </div>
            ))}
    </section>
  );
}