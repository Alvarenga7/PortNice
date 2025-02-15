import { CONTACT } from "../constants/index"

const Contato = () => {
  return (
   <div className="border-b border-neutral-900 pb-20">
    <h2 className="my-10 text-center text-4xl">Entre em contato!</h2>
    <div className="text-center tracking-tighter">
        <p className="my-4">{CONTACT.phoneNo}</p>
        <a className="border-b" href="#">{CONTACT.email}</a>
    </div>
   </div>
  )
}

export default Contato
