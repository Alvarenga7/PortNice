
import { Bio } from "@/constants/index"

const About = () => {
    return (
        <div className="borde-b border-neutral-900 pb-4 ">
            <h2 className="my-20 text-center text-4xl">
                Sobre
                <span className="text-neutral-500"> Mim</span>
            </h2>
            <div className="flex flex-wrap justify-center">
             
                 <div className="w-full lg:w-1/2 text-center "> 
                            <p>{Bio}</p>

                    </div>
            </div>
        </div>
    )
}

export default About
