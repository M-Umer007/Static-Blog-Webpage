
function Blog(){

   const blogs = [
        {
            id:"1",
            description:"A Car To Remember.",
            image:"https://images.pexels.com/photos/3752194/pexels-photo-3752194.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"

        },
        {
            id:"2",
            description:"A Car To Remember.",
            image:"https://images.pexels.com/photos/303316/pexels-photo-303316.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"

        },
        {
            id:"3",
            description:"A Car To Remember.",
            image:"https://images.pexels.com/photos/919073/pexels-photo-919073.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"

        },
        {
            id:"4",
            description:"A Car To Remember.",
            image:"https://images.pexels.com/photos/909907/pexels-photo-909907.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        },
        {
            id:"5",
            description:"A Car To Remember.",
             image:"https://images.pexels.com/photos/1592384/pexels-photo-1592384.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        },
        {
            id:"6",
            description:"A Car To Remember.",
            image:"https://images.pexels.com/photos/1402787/pexels-photo-1402787.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        },
        {
            id:"7",
            description:"A Car To Remember.",
             image:"https://images.pexels.com/photos/3311574/pexels-photo-3311574.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        }, {
            id:"8",
            description:"A Car To Remember.",
             image:"https://images.pexels.com/photos/2127733/pexels-photo-2127733.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        }, {
            id:"9",
            description:"A Car To Remember.",
             image:"https://images.pexels.com/photos/977003/pexels-photo-977003.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        },
    ]

    const blogItems= blogs.map((item)=>
        <div>
    <img src= {item.image}
                     className="img-fluid pb-0 "
       alt="abc" />
            <li key={item.id}>
                <p className="flex justify-center pb-10 ">{item.description}</p>

            </li>
            </div>
            )

    return(
      <div >
        <ul className="md:grid md:grid-cols-2 md:gap-4 lg:grid-cols-3 lg:gap-4">{blogItems}</ul>
      </div>
    )
  }
  export default Blog