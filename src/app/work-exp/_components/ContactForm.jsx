import Image from "next/image";
import Link from "next/link";

import linkedInIcon from '../../../../public/linkedin-icon.png'
import discordIcon from '../../../../public/discord-icon.png'

import phoneIcon from '../../../../public/phone-icon.png'
import emailIcon from '../../../../public/email-icon.png'
import addressIcon from '../../../../public/address-icon.png'
import githubIcon from '../../../../public/github-icon.png'

export default function ContactForm() {
  return (
    <section className="min-h-[100vh] max-w-[100vw] relative bg-black text-white py-20 px-8 md:px-16 overflow-hidden">      

      {/* Background Image (Now with Low Opacity) */}
      <div className="absolute inset-0 z-0">
        <div className="absolute -left-30 top-0 h-full w-[60%] opacity-20">
          <Image
            src="/hero.png"
            alt="Hero Background"
            fill
            className="object-cover object-right -rotate-35"
          />
        </div>
        <div className="absolute inset-0 bg-black opacity-80" />
      </div>

      {/* Grid Lines (Now on the Left Side) */}
      <div className="absolute left-[100px] top-0 h-full z-10">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="4"
          height="100%"
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

      <div className="absolute left-[200px] top-0 h-[40%] z-10">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="4"
          height="100%"
          viewBox="0 0 4 453"
          fill="none"
          className="h-full"
        >
          <path d="M1.8125 0.940186V452.954" stroke="rgba(31, 30, 51, 0.6)" strokeWidth="3.223" />
        </svg>
      </div>

      {/* Horizontal Lines (Now on the Left Side) */}
      {["25%", "75%", "100%"].map((top, idx) => (
        <div key={idx} className="absolute left-0 w-[800px] z-10" style={{ top }}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="700"
            height="5"
            viewBox="0 0 800 5"
            fill="none"
            className="-translate-x-1/2"
          >
            <path d="M0 2.02924H800" stroke="#2D2C40" strokeOpacity="0.4" strokeWidth="4.02864" />
          </svg>
          <div className="absolute left-[100px] top-[-6px]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="14"
              height="12"
              viewBox="0 0 14 12"
              fill="none"
            >
              <path d="M0.84375 6.20984H13.3325" stroke="white" strokeWidth="1.61146" />
              <path d="M7.28906 0.972595V11.4471" stroke="white" strokeWidth="1.61146" />
            </svg>
          </div>
        </div>
      ))}

      {/* Content */}
      <div className="flex items-center justify-center gap-18">
        {/* Contact Form */}
        <div className=" bg-[#140C1C] p-4 w-[500px] text-left rounded-lg z-10 px-6">
          <h2 className="text-3xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-white">Let's work Together!</h2>
          <p className="text-sm text-gray-300 mt-2">I design and code beautifully simple things and I love what I do. Just simple like that!</p>

          {/* Input Fields */}
          {/* First and Last Name */}
          <div className="flex items-center gap-4 mt-4">
            <input className="px-6 py-2 bg-black rounded-lg border-[0.2px] border-gray-600 text-gray-300 text-sm" type="text" placeholder="FIrst Name" />
            <input className="px-6 py-2 bg-black rounded-lg border-[0.2px] border-gray-600 text-gray-300 text-sm" type="text" placeholder="Last Name"/>
          </div>
          {/* Email and address */}
          <div className="flex items-center gap-4 mt-4">
            <input className="px-6 py-2 bg-black rounded-lg border-[0.2px] border-gray-600 text-gray-300 text-sm" type="email" placeholder="Email Address" />
            <input className="px-6 py-2 bg-black rounded-lg border-[0.2px] border-gray-600 text-gray-300 text-sm" type="text" placeholder="Phone Number"/>
          </div>
          {/* Company Name */}
          <div className="flex items-center gap-4 mt-4">
            <input className="px-6 py-2 w-full bg-black rounded-lg border-[0.2px] border-gray-600 text-gray-300 text-sm" type="text" placeholder="Company Name" />
          </div>
          {/* Message */}
          <div className="flex items-center gap-4 mt-4">
            <textarea className="px-6 py-2 w-full bg-black rounded-lg border-[0.2px] border-gray-600 text-gray-300 text-sm resize-none" type="text" placeholder="Message" rows={8} />
          </div>
          {/* Button */}
          <div className="mt-10">
            <Link
              href="/hire-me"
              className="relative overflow-hidden px-6 py-3 rounded-full bg-gradient-to-r from-[#8750F7] via-[#2A1454] to-[#8750F7] text-white font-semibold hover:opacity-90 transition-all"
            >
              Send Message
            </Link>
          </div>

          {/* LinkedIn and Discord Button */}
          <div className="mt-18 mb-4">
            <div className="flex flex-col items-center">
              <p>OR Contact Via</p>
              {/* Buttons */}
              <div className="flex items-center gap-6 mt-2">
              <Link
                  href="#"
                  className="relative flex items-center gap-2 px-6 py-1 rounded-full bg-gradient-to-r from-[#8750F7] to-white text-black font-semibold hover:opacity-90 transition-all"
                >
                  <Image className="filter invert" src={linkedInIcon} alt="LinkedIn" width={16} height={16} />
                  LinkedIn
                </Link>
                <Link
                  href="#"
                  className="relative flex items-center gap-2 px-6 py-1 rounded-full bg-gradient-to-r from-[#8750F7] to-white text-black font-semibold hover:opacity-90 transition-all"
                >
                  <Image className="filter invert" src={discordIcon} alt="Discord" width={16} height={16} />
                  Discord
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Contact information */}
        <div className="p-4 w-[300px] text-center rounded-lg z-10">
          <div className="flex flex-col gap-7">
            {/* Ph No */}
            <div className="flex items-center gap-4">
              <div className="h-12 w-12 bg-gradient-to-b from-[#402379] to-[#6D40CA] rounded-full flex items-center justify-center">
                <Image
                src={phoneIcon}
                alt="Phone"
                width={18}
                height={18}
                />
              </div>
              <div className="text-left">
                <p className="text-xs text-white">Phone</p>
                <p className=" text-white">+01 123 654 8096</p>
              </div>
            </div>

            {/* Email */}
            <div className="flex items-center gap-4">
              <div className="h-12 w-12 bg-gradient-to-b from-[#402379] to-[#6D40CA] rounded-full flex items-center justify-center">
                <Image
                src={emailIcon}
                alt="Email"
                width={18}
                height={18}
                />
              </div>
              <div className="text-left">
                <p className="text-xs text-white">Email</p>
                <p className=" text-white">gerolddesign@gmail.com</p>
              </div>
            </div>

            
            {/* Address */}
            <div className="flex items-center gap-4">
              <div className="h-12 w-12 bg-gradient-to-b from-[#402379] to-[#6D40CA] rounded-full flex items-center justify-center">
                <Image
                src={addressIcon}
                alt="Address"
                width={18}
                height={18}
                />
              </div>
              <div className="text-left">
                <p className="text-xs text-white">Address</p>
                <p className=" text-white">Warne Park Street Pine, FL 33157,New York</p>
              </div>
            </div>

            {/* LinkedIn */}
            <div className="flex items-center gap-4">
              <div className="h-12 w-12 bg-gradient-to-b from-[#402379] to-[#6D40CA] rounded-full flex items-center justify-center">
                <Image
                src={linkedInIcon}
                alt="Address"
                width={18}
                height={18}
                />
              </div>
              <div className="text-left">
                <p className="text-xs text-white">LinkedIn</p>
                <a href="linkedin.com/in/Mishex-tech" className=" text-white">linkedin.com/in/Mishex-tech</a>
              </div>
            </div>

            {/* Github */}
            <div className="flex items-center gap-4">
              <div className="h-12 w-12 bg-gradient-to-b from-[#402379] to-[#6D40CA] rounded-full flex items-center justify-center">
                <Image
                src={githubIcon}
                alt="Address"
                width={18}
                height={18}
                />
              </div>
              <div className="text-left">
                <p className="text-xs text-white">Github</p>
                <a href="github.com/Mishex-dev" className=" text-white">github.com/gerold-dev</a>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
