
import { Link } from "react-router-dom";
function KurslarimPage() {
  return (
    <div>
       <div>
           <h1 className="font-bold text-[25px]">Davom eting...</h1>
         <div class="w-[350px] mt-5 bg-white rounded-xl shadow-sm border border-gray-200 p-4 flex items-center gap-4">
  
  <div class="w-16 h-16 rounded-full bg-gray-100 flex items-center justify-center text-gray-400 text-sm">
    Xatolik
  </div>

  <div>
    <p class="text-xl font-bold text-black">
      [New] Front-End
    </p>

    <p class="text-sm text-gray-500 mt-1">
      nF-2803
    </p>
   <Link
  to="/frontend"
  className="mt-2 inline-flex items-center gap-1 text-blue-600"
>
  Kirish ›
</Link>
    
  </div>

</div>  
   <p className='font-bold text-[24px]'>Bitirilgan kurslar</p>    
   <div class="w-[350px] mt-10 bg-white rounded-xl shadow-sm border border-gray-200 p-4 flex items-center gap-4">
  
  <div class="w-16 h-16 rounded-full bg-gray-100 flex items-center justify-center text-gray-400 text-sm">
    Xatolik
  </div>

  <div>
    <p class="text-xl font-bold text-black">
      [New] Beginner
    </p>

    <p class="text-sm text-gray-500 mt-1">
      nBG-2615
    </p>

   <Link
  to="/begginer"
  className="mt-2 inline-flex items-center gap-1 text-blue-600"
>
  Kirish ›
</Link>
  </div>

</div>     
    <p className='font-bold text-[24px]'>Tekin kurslar</p>
    <div class="w-[350px] mt-10 bg-white rounded-xl shadow-sm border border-gray-200 p-4 flex items-center gap-4">
  
  <div class="w-16 h-16 rounded-full bg-gray-100 flex items-center justify-center text-gray-400 text-sm rounded-full">
    <img src="	https://lab.marsit.uz/media/group_category_images/45/free_course_icon.png" alt="" />
  </div>

  <div>
    <p class="text-xl font-bold text-black">
      
Beginner+ (Online)  <span className="text-[15px] bg-green-400 w-20">FREE</span>
        
    </p>

    

   <Link
  to="/online"
  className="mt-2 inline-flex items-center gap-1 text-blue-600"
>
  Kirish ›
</Link>
  </div>

</div>
       </div>
    </div>
  )
}

export default KurslarimPage
