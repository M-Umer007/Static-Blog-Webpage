import Blog from "./landingPageComponents/[dynamicblog]/page"
import './/globals.css'
import HHHead from "./landingPageComponents/headerSM/page"
import HeadMD from "./landingPageComponents/headerMD/page"
import ReadOurBlog from "./landingPageComponents/readOurBlog/page"
import BfrBlog from "./landingPageComponents/bfrdblock/page"
import EndingBeforeFooter from "./landingPageComponents/BeforeFooterEnding/page"
import Footer from "./landingPageComponents/footerthing/page"
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