import Footer from "./components/Footer"

import Navbar from "./components/Navbar"
import Rough from "./components/Rough"
import Signin from "./components/Signin"


const App = ()=>{
  console.log('apppppp')
  return(
    <div className="flex flex-col min-h-screen font-libre-baskerville">

      <Navbar/>

      <div className="flex-grow text-lg p-4 pt-20 bg-green-200x flex">

        <Rough/>
        {/* <Signin/> */}

        
        
        

        {/* Home Page
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Non autem nam fugit voluptas suscipit ducimus! Eaque nostrum, esse sequi optio aliquid, dolor corporis quasi dolore aliquam quia rerum dicta consequuntur.
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sed nemo rerum nihil, perferendis quam asperiores qui inventore perspiciatis ipsa sint delectus voluptate officiis quo omnis? Ipsa inventore corrupti sit delectus.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem earum, cupiditate officia nisi praesentium exercitationem a eaque autem enim voluptatibus! Amet explicabo officiis ullam magni, quo fugiat consectetur dignissimos ad.
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Non autem nam fugit voluptas suscipit ducimus! Eaque nostrum, esse sequi optio aliquid, dolor corporis quasi dolore aliquam quia rerum dicta consequuntur.
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sed nemo rerum nihil, perferendis quam asperiores qui inventore perspiciatis ipsa sint delectus voluptate officiis quo omnis? Ipsa inventore corrupti sit delectus.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem earum, cupiditate officia nisi praesentium exercitationem a eaque autem enim voluptatibus! Amet explicabo officiis ullam magni, quo fugiat consectetur dignissimos ad.Lorem ipsum dolor, sit amet consectetur adipisicing elit. Non autem nam fugit voluptas suscipit ducimus! Eaque nostrum, esse sequi optio aliquid, dolor corporis quasi dolore aliquam quia rerum dicta consequuntur.
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sed nemo rerum nihil, perferendis quam asperiores qui inventore perspiciatis ipsa sint delectus voluptate officiis quo omnis? Ipsa inventore corrupti sit delectus.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem earum, cupiditate officia nisi praesentium exercitationem a eaque autem enim voluptatibus! Amet explicabo officiis ullam magni, quo fugiat consectetur dignissimos ad.Lorem ipsum dolor, sit amet consectetur adipisicing elit. Non autem nam fugit voluptas suscipit ducimus! Eaque nostrum, esse sequi optio aliquid, dolor corporis quasi dolore aliquam quia rerum dicta consequuntur.
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sed nemo rerum nihil, perferendis quam asperiores qui inventore perspiciatis ipsa sint delectus voluptate officiis quo omnis? Ipsa inventore corrupti sit delectus.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem earum, cupiditate officia nisi praesentium exercitationem a eaque autem enim voluptatibus! Amet explicabo officiis ullam magni, quo fugiat consectetur dignissimos ad.Lorem ipsum dolor, sit amet consectetur adipisicing elit. Non autem nam fugit voluptas suscipit ducimus! Eaque nostrum, esse sequi optio aliquid, dolor corporis quasi dolore aliquam quia rerum dicta consequuntur.
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sed nemo rerum nihil, perferendis quam asperiores qui inventore perspiciatis ipsa sint delectus voluptate officiis quo omnis? Ipsa inventore corrupti sit delectus.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem earum, cupiditate officia nisi praesentium exercitationem a eaque autem enim voluptatibus! Amet explicabo officiis ullam magni, quo fugiat consectetur dignissimos ad.Lorem ipsum dolor, sit amet consectetur adipisicing elit. Non autem nam fugit voluptas suscipit ducimus! Eaque nostrum, esse sequi optio aliquid, dolor corporis quasi dolore aliquam quia rerum dicta consequuntur.
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sed nemo rerum nihil, perferendis quam asperiores qui inventore perspiciatis ipsa sint delectus voluptate officiis quo omnis? Ipsa inventore corrupti sit delectus.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem earum, cupiditate officia nisi praesentium exercitationem a eaque autem enim voluptatibus! Amet explicabo officiis ullam magni, quo fugiat consectetur dignissimos ad.Lorem ipsum dolor, sit amet consectetur adipisicing elit. Non autem nam fugit voluptas suscipit ducimus! Eaque nostrum, esse sequi optio aliquid, dolor corporis quasi dolore aliquam quia rerum dicta consequuntur.
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sed nemo rerum nihil, perferendis quam asperiores qui inventore perspiciatis ipsa sint delectus voluptate officiis quo omnis? Ipsa inventore corrupti sit delectus.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem earum, cupiditate officia nisi praesentium exercitationem a eaque autem enim voluptatibus! Amet explicabo officiis ullam magni, quo fugiat consectetur dignissimos ad.Lorem ipsum dolor, sit amet consectetur adipisicing elit. Non autem nam fugit voluptas suscipit ducimus! Eaque nostrum, esse sequi optio aliquid, dolor corporis quasi dolore aliquam quia rerum dicta consequuntur.
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sed nemo rerum nihil, perferendis quam asperiores qui inventore perspiciatis ipsa sint delectus voluptate officiis quo omnis? Ipsa inventore corrupti sit delectus.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem earum, cupiditate officia nisi praesentium exercitationem a eaque autem enim voluptatibus! Amet explicabo officiis ullam magni, quo fugiat consectetur dignissimos ad. */}
      </div>

      <Footer/>
      
    </div>
  )
}

export default App