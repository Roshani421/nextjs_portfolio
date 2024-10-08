import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { RiTwitterXFill } from 'react-icons/ri';
import { SiGmail } from "react-icons/si";

import Link from 'next/link'

const socialLinks = [
  {
    icon: <FaGithub />,
    path: 'https://github.com/Roshani421'
  },
  {
    icon: <SiGmail />,
    path: 'mailto:subediroshani19@gmail.com'
  },
  {
    icon: <FaLinkedin />,
    path: 'https://www.linkedin.com/in/roshni-subedi-525b8b1a0/'
  },
  {
    icon: <RiTwitterXFill />,
    path: 'https://x.com/dark_sun421'
  },
]
const Social = () => {
  return (
    <div className='flex gap-6'>
      {socialLinks.map((item, index) => (
        <Link
          target='_blank'
          href={item.path}
          key={index}
          className='duration-3000 flex size-10 items-center justify-center rounded-full border-2 border-blue text-blue hover:bg-blue/20 hover:transition-all'
        >
          {item.icon}
        </Link>
      ))}
    </div>
  )
}

export default Social
