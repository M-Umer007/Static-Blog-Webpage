import Link from "next/link"
import Hamburger from "../burgerMenu/page"
import Logo from "../logoMain/page"

export default function HHHead(){
    return(

      <div className="w-full  flex flex-col justify-center items-center md:hidden" >
      <section>
      <Logo/>
      </section>
       
        <details className="py-6 ">
      <summary className="btn mx-7  cursor-pointer  list-none outline-none md:hidden ">
        <Hamburger/>  {/* hamburger icon image on click the watch aout and next Step will open */}
     </summary>
      <ul className=" mx-0 block">
      <li><Link href="#"> My Projects  &#8681;</Link></li>
         <li> <Link href="../about"> About Me  &#8681;</Link></li>
      <li> <Link href="#"> My Plans  &#8681;</Link></li>
      </ul>
        </details>

        <Link href="#"><button className="bg-slate-800 text-white rounded-3xl w-64 h-12 ">Contact Me</button> </Link> {/* button saying be our guest */}
    </div> 
    )
}