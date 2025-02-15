import Image from 'next/image'
import logo from "../assets/HaLogo.png"
import { FaLinkedin } from 'react-icons/fa'
import { FaGithub } from 'react-icons/fa'
import { FaInstagram } from 'react-icons/fa'


const Navbar = () => {
  return (
   <nav className="mb-20 flex items-center justify-between py-6">
    <div className="flex flex-shrink-0 items-center">
    <Image className='mx-2 w-10'
      src={logo}
      width={50}
      height={50}
      alt="Logo"
    />
    </div>
    <div className='m-8 flex items-center justify-center gap-4 text-2xl'>
      <a href="https://www.linkedin.com/in/henrique-hastenreiter-8933992a3/" target='_blank'><FaLinkedin /></a>
     <a href="https://github.com/Alvarenga7" target='_blank'><FaGithub /></a> 
      <a href="https://www.instagram.com/henrift_/" target='_blank'><FaInstagram /></a>
    </div>
   </nav>
  )
}

export default Navbar;
