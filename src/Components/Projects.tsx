import { PROJETOS } from "@/constants/index"
import Image from 'next/image'

const Projects = () => {
    return (
        <div className="border-b border-neutral-900 pb-4">
            <h2 className="my-20 text-center text-4xl">Projetos</h2>
            <div>
                {PROJETOS.map((projeto, index) => (
                    <div key={index} className="mb-8 flex flex-wrap lg:justify-center">
                        <div className="w-full lg:w-1/4">
                        <Image 
                            width={150}
                            height={150}
                            src={projeto.image}
                            alt={projeto.title}
                            className="mb-6 rounded"
                        />
                    </div>
                    <div className="w-full max-w-xl lg:w-3/4">
                        <h6 className="mb-2 font-semibold">{projeto.title}</h6>
                        <p className="mb-4 texture-neutral-400">{projeto.description}</p>
                        {projeto.technologies.map((tech, index) =>(
                            <span key={index} className="mr-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-sky-700 ">{tech}</span>
                        ))}
                    </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Projects
