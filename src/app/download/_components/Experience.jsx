import Image from "next/image";

const experiences = [
  {
    title: "IT System Administrator (Freelance)",
    type: "Freelance & Contract-Based",
    duration: "2023 - Present",
    responsibilities: [
      "Managed Windows and Linux server environments, ensuring uptime and security.",
      "Configured SCCM, Active Directory, and firewall setups for enterprise networks.",
      "Developed automation scripts using PowerShell and Bash to streamline IT operations."
    ]
  },
  {
    title: "Frontend Developer",
    type: "Remote",
    duration: "2022 - 2023",
    responsibilities: [
      "Built and optimized responsive UI components using React.js and Tailwind CSS.",
      "Worked closely with backend teams to integrate REST APIs.",
      "Enhanced website performance and accessibility."
    ]
  },
  {
    title: "Junior Web Developer",
    type: "Internship",
    duration: "2021 - 2022",
    responsibilities: [
      "Assisted in developing company websites using HTML, CSS, and JavaScript.",
      "Fixed UI bugs and improved site responsiveness.",
      "Collaborated with designers to implement UI changes."
    ]
  }
];

export default function Experience() {
  return (
    <section className="relative h-auto bg-[#0F0715] text-white py-32 px-8 md:px-16 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute -left-30 top-0 h-full w-[60%] opacity-20">
          <Image
            src="/hero.png"
            alt="Hero Background"
            fill
            className="object-cover object-right -rotate-35"
          />
        </div>
        <div className="absolute inset-0 bg-[#0F0715] opacity-90" />
      </div>

      {/* Content */}
      <div className="relative z-10 px-18">
        <h2 className="text-4xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-white mb-12 text-left px-8">
          Experience
        </h2>

        {/* Experience Cards */}
        <div className="flex flex-col gap-6 w-[80vw] mx-auto">
          {experiences.map((exp, index) => (
            <div key={index} className="bg-[#3C284F] text-white p-6 rounded-lg shadow-lg">
              <h2 className="text-md font-bold">{exp.title}</h2>
              <p className="text-sm opacity-75">{exp.type} | {exp.duration}</p>
              <ul className="mt-4 ml-2 list-disc list-inside space-y-1">
                {exp.responsibilities.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
