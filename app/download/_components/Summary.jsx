export default function Summary() {
    return (
      <section className="w-screen h-[60vh] bg-black text-white flex items-center justify-center px-8 md:px-16">
        <div className="max-w-4xl">
          <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-white mb-6">
            Summary
          </h2>
          <ul className="list-disc text-gray-300 space-y-4 text-md ml-6">
            <li>
              Hello! I'm Mikheil, a dedicated Fullstack Developer with a strong background in software development
              and IT infrastructure, driven by a passion for problem-solving, efficiency, and innovation. Over the years, I
              have built a solid foundation in developing scalable applications and managing complex IT environments. I
              believe in writing clean, scalable, and maintainable code with a strong focus on security, automation, and
              infrastructure optimization—implementing best practices to protect applications and data, enhancing
              efficiency through automated workflows and DevOps methodologies, and designing robust, scalable systems.
            </li>
            <li>
              Beyond professional work, I am deeply passionate about 3D design, graphic design, and creative projects. I
              enjoy working on personal and freelance projects that allow me to explore new design techniques and
              technologies.
            </li>
          </ul>
        </div>
      </section>
    );
  }