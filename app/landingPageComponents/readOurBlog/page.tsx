import Image from 'next/image';

const ReadOurBlog = () => (
  <div className="relative w-screen h-[20vh] rounded-3xl z-10 bg-gray-600 md:w-[90vw] md:px-10 md:h-[25vh]">
  <Image
    src="/abc.jpg"
    layout="fill" // Ensures the image fills the parent div
    objectFit="cover" // Ensures the image covers the area while maintaining aspect ratio
    alt="Your Name"
    priority={true}
    className="z-0 rounded-3xl opacity-80"
  />
  <div className="absolute bottom-14 left-10 flex items-center justify-center z-10 text-white md:bottom-20 ">
    <p className="font-bold text-xl md:text-[2.75rem]">Welcome To My Portfolio</p>
  </div>
</div>

);

export default ReadOurBlog;