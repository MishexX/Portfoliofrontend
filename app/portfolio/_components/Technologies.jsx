import Image from 'next/image'

export default function Technologies(){
    return (
        <section className="min-h-[100vh] max-w-[100vw] bg-[#0F0715] py-24">
            <div>
                <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-white text-center">Technologies Used</h2>
            </div>

            <div className='flex items-center justify-center'>
                <Image
                src="/techskills.png"
                alt='Technolgies Used'
                width={900}
                height={900}
                />
            </div>
        </section>
    )
}