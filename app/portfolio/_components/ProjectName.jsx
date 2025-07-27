import Image from "next/image";

export default function ProjectName(){
    return (
        <section className="py-18 px-">
            <div className="text-white p-10 rounded-lg w-full max-w-4xl mx-auto flex flex-col md:flex-row justify-between">
                {/* Left Side - Project Title & Description */}
                <div className="flex-1">
                    <h1 className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-white">
                    Project Name
                    </h1>
                    <p className="text-gray-400 mt-3 text-sm">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum convallis, dolor sed consectetur gravida.
                    </p>
                </div>

                {/* Right Side - Project Details */}
                <div className="flex-1 flex flex-col gap-4 mt-6 md:mt-0">
                    <div className="flex items-center gap-4 border-b w-64 pb-1">
                        <p className="text-white tracking-wide text-sm"><span className="uppercase font-semibold">Client</span> &bull; Multi-Digital Capital  
                        </p>
                    </div>
                    <div className="flex items-center gap-4 border-b w-64 pb-1">
                        <p className="text-white tracking-wide text-sm"><span className="uppercase font-semibold">Category</span> &bull; Marketing  
                        </p>
                    </div>
                    <div className="flex items-center gap-4 border-b w-64 pb-1">
                        <p className="text-white tracking-wide text-sm"><span className="uppercase font-semibold">Date</span> &bull; March 15, 2024  
                        </p>
                    </div>
                </div>

                
            </div>
        </section>
    )
}