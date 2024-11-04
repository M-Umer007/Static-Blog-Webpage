import Image from 'next/image';

const ReadOurBlog = () => (
  <div className="relative w-screen h-[20vh] rounded-3xl z-10 bg-gray-600 md:w-[90vw] md:px-10 md:h-[25vh]">
  <Image
    src="https://images.unsplash.com/photo-1434030216411-0b793f4b4173?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    layout="fill" // Ensures the image fills the parent div
    objectFit="cover" // Ensures the image covers the area while maintaining aspect ratio
    alt="Your Name"
    priority={true}
    className="z-0 rounded-3xl opacity-80"
  />
  <div className="absolute bottom-14 left-10 flex items-center justify-center z-10 text-white md:bottom-20 ">
    <p className="text-black font-bold text-xl md:text-[2.75rem]">Welcome To Our Blog</p>
  </div>
</div>

);

export default ReadOurBlog;