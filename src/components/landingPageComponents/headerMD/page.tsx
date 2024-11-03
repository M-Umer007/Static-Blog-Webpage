import Link from "next/link"
import Logo from "../logoMain/page"


export default function HeadMD(){
    return(
      <div className="hidden md:w-auto md:flex md:flex-row md:justify-around md:items-center md:gap-x-10  "> 
         <section>
           <Logo/>
        </section>

        <section className=" mx-0 md:flex md:flex-row">
         <div ><Link href="#"> My Projects  &#8681;</Link></div>
          <div > <Link href="../about"> About Me &#8681;</Link></div>
          <div > <Link href="#"> My Plans  &#8681;</Link></div>
         </section>
        <Link href="#"><button className="bg-slate-800 text-white rounded-3xl w-64 h-12">Contact Me</button> </Link> {/* button saying be our guest */}
        </div>

    )
}