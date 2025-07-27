export default function Design() {
  const technologies = [
    { name: "Blender", icon: "/designIcons/simple-icons_blender.png" },
    { name: "Maya", icon: "/designIcons/simple-icons_autodesk.png" },
    {
      name: "3d Max (Autodesk 3ds Max)",
      icon: "/designIcons/devicon-plain_3dsmax.png",
    },
    { name: "Cinema 4D", icon: "/designIcons/tdesign_logo-cinema4d.png" },
    { name: "SketchUp", icon: "/designIcons/simple-icons_sketchup.png" },
    { name: "Adobe Photoshop", icon: "/designIcons/photoshop.png" },
    { name: "Adobe Illustrator", icon: "/designIcons/illustrator.png" },
    { name: "Procreate", icon: "/designIcons/procreate.png" },
    { name: "Autocad", icon: "/designIcons/autocad.png" },
  ];

  return (
    <div className="min-h-screen bg-[#0F0715] max-w-full relative overflow-hidden flex flex-col items-center justify-center py-8 px-4">
      {/* --- Heading --- */}
      <h2 className="text-3xl md:text-4xl font-semibold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-white">
        3D and Design
      </h2>

      {/* --- Responsive Grid of Technology Boxes --- */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
        {technologies.map((tech, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center bg-[#2A1E38] rounded-lg p-5 w-32 h-32 shadow-md hover:scale-105 transition-transform"
          >
            <img src={tech.icon} alt={tech.name} className="w-14 h-14 mb-3" />
            <p className="text-white text-xs font-medium text-center">
              {tech.name}
            </p>
            {/* Decorative dot */}
            <span className="absolute top-2 right-2 w-3 h-3 bg-gradient-to-tr from-purple-400 to-white rounded-full opacity-80" />
          </div>
        ))}
      </div>
    </div>
  );
}
