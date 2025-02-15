import { RiReactjsLine } from "react-icons/ri"
import { BiLogoTypescript } from "react-icons/bi";
import { RiNextjsLine } from "react-icons/ri";
import { RiTailwindCssFill } from "react-icons/ri";

const Tecnologias = () => {
  return (
   <div className="border-b border-neutral-800 pb-24">
    <h2 className="my-20 text-center text-4xl">Conhecimentos</h2>
    <div className="flex flex-wrap items-center justify-center gap-4 animate-pulse">
        <div className="rounded-2xl border-2 border-neutral-800 p-4">
            <RiReactjsLine className="text-4xl text-sky-700"/>
        </div>

        <div className="rounded-2xl border-2 border-neutral-800 p-4">
            <BiLogoTypescript className="text-4xl text-sky-700"/>
        </div>

        <div className="rounded-2xl border-2 border-neutral-800 p-4">
            <RiNextjsLine className="text-4xl text-neutral-500"/>
        </div>

        <div className="rounded-2xl border-2 border-neutral-800 p-4">
            <RiTailwindCssFill className="text-4xl text-neutral-500"/>
        </div>
    </div>

   </div>
  )
}

export default Tecnologias
