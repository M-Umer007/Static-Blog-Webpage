import Blog from "../components/landingPageComponents/[dynamicblog]/page"
import './globals.css'
import HHHead from "../components/landingPageComponents/headerSM/page"
import HeadMD from "../components/landingPageComponents/headerMD/page"
import ReadOurBlog from "../components/landingPageComponents/readOurBlog/page"
import BfrBlog from "../components/landingPageComponents/bfrdblock/page"
import EndingBeforeFooter from "../components/landingPageComponents/BeforeFooterEnding/page"
import Footer from "../components/landingPageComponents/footerthing/page"
// Home function 
function Home(){
  return(  
    // main div 
    <div className="grid grid-cols-1 gap-4 " > 
        
    {/* dropdown menu on small screens and watch about nextStep on large screens */}
      <section>
      < HHHead />
      <HeadMD/>
      </section>
      

      <div className="flex flex-col justify-center items-center md:px-10">
        
          <section className="py-10"> {/* pic with z index 0 and on it custom text saying Read My Blog */}       
          <ReadOurBlog />
          </section>
           
        <div className="px-5 ">
        
            <section className="py-20">
            <BfrBlog/>
           </section>

            <section className="border-5 ">
            <Blog/>   {/* dynamic blog thing so blogs will render on the screen */}
             </section>
      
        </div>

            <section>
            <EndingBeforeFooter/>
            </section>

        </div>


       <section><Footer/></section>


    </div>
    )
}
export default Home