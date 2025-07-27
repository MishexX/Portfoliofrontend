import { ShieldCheck } from "lucide-react";

export default function Highlights() {
    const projects = [
        {
            title: "Infrastructure Security Optimization",
            description: "System Vulnerabilities Posed Risks To Application Security.",
            technologies: "Node.js, React, AWS, Docker, Kubernetes",
            results: "Achieved a 40% increase in efficiency, ensuring faster load times and seamless scalability.",
        },
        {
            title: "Automated Deployment & CI/CD Pipeline",
            description: "Manual Deployments Led To Inefficiencies And Errors.",
            technologies: "Jenkins, Docker, GitHub Actions, Kubernetes",
            results: "Reduced deployment time by 60%, enhancing workflow automation and system reliability.",
        },
        {
            title: "Scalable E-Commerce Platform",
            description: "Needed A Robust System To Handle High Traffic And Transactions.",
            technologies: "Node.js, React, AWS, Docker, Kubernetes",
            results: "Achieved a 40% increase in efficiency, ensuring faster load times and seamless scalability.",
        },
    ];

    return (
        <section className="h-[100vh] max-w-[100vw] bg-black text-white py-20 px-10 mx-auto">
            {/* Section Heading */}
            <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-white">
                    Project Highlights: Innovations in Scalability, <br /> Automation & Security
                </h2>
                <p className="text-gray-400 mt-4">
                    Delivering High-Performance, Secure, and Efficient Solutions
                </p>
            </div>

            {/* Project Cards */}
            <div className="grid md:grid-cols-3 gap-8">
                {projects.map((project, index) => (
                    <div key={index} className="bg-[#191630] p-6 rounded-xl shadow-lg">
                        <div className="flex items-center gap-3 mb-4">
                            <div className="w-16 h-16 flex items-center justify-center rounded-full bg-gradient-to-b from-purple-900 to-zinc-900 shadow-lg">
                                <ShieldCheck className="text-white w-6 h-6" />
                            </div>
                            <h3 className="text-md font-semibold">{project.title}</h3>
                        </div>
                        <p className="text-gray-300 font-semibold">{project.description}</p>
                        <p className="text-gray-300 font-semibold mt-3 text-sm">Technologies: {project.technologies}</p>
                        <p className="text-gray-300 font-semibold mt-2 text-sm">Results: <span className="font-normal">{project.results}</span></p>

                        <a href="#" className="mt-4 inline-block text-white font-extralight text-lg hover:text-purple-300 transition-all">
                            Explore Project →
                        </a>
                    </div>
                ))}
            </div>
        </section>
    );
}
