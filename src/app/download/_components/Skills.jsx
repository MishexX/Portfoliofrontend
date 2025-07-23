import Image from "next/image";
import { Code, Server, Settings, PenTool, Mail, Globe } from "lucide-react";

const skills = [
    { title: "Full Stack Development", icon: <Code /> },
    { title: "System Administration", icon: <Server /> },
    { title: "Automation & Scripting", icon: <Settings /> },
    { title: "UI UX Design", icon: <PenTool /> },
    { title: "Email & Communication", icon: <Mail /> },
    { title: "Networking", icon: <Globe /> },
  ];

export default function Skills(){
    return (
        <section className="relative h-[80vh] bg-[#0F0715] text-white py-32 px-8 md:px-16 overflow-hidden">
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
                <div className="absolute -right-20 top-0 h-full w-[60%] opacity-20">
                    <Image
                    src="/hero.png"
                    alt="Hero Background"
                    fill
                    className="object-cover object-right -rotate-20"
                    />
                </div>
                <div className="absolute inset-0 bg-[#0F0715] opacity-90" />
            </div>

            {/* Lines */}


            {/* Content */}
            <div className="absolute z-10 px-16">
                <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-white mb-8 text-center">My Skills</h2>

                <div className="py-16 px-6">
                    <div className="container mx-auto">
                        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
                        {skills.map((skill, index) => (
                            <div
                            key={index}
                            className="bg-[#3C284F] rounded-xl shadow-lg px-12 py-4 flex flex-col items-center justify-center text-white"
                            >
                            <div className="bg-purple-600 rounded-full p-3 mb-4 text-white">
                                {skill.icon}
                            </div>
                            <h3 className="text-center font-semibold text-sm">{skill.title}</h3>
                            </div>
                        ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}