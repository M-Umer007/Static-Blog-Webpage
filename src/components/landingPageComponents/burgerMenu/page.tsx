import Image from 'next/image';

export default function Hamburger(){
    return(
        <Image
        src="/menu.png"
        height={40} // Desired size with correct aspect ratio
        width={40} // Desired size with correct aspect ratio
        alt="Your Name"
         placeholder = 'empty'
        priority={true}
        />
    )
}