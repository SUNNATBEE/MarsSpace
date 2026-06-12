import React from 'react'
import marscod from '../assets/marscod.webp'
import facebook from '../assets/facebook.png'
import google from '../assets/google.png'
import netflix from '../assets/netflix.jpeg'
import amazon from '../assets/amazon.webp'

const HeaderHero = () => {
  return (
    <div>
        <div className="max-w-[1200px] w-full mx-auto p-5">
            <h2 className='text-2xl font-bold mb-[30px]'>TOP Kompaniyalar</h2>

            <div  style={{ backgroundImage: `url(${marscod})` }} className='bg-cover bg-center rounded-2xl p-[10px] h-[300px]'>
            </div>

            <div className="flex justify-center items-center flex-wrap gap-[20px] mt-[50px]">

              <div className="flex items-center gap-[10px]  w-[500px] bg-gray-50 rounded-2xl p-[10px]">
                <img className='w-[80px] h-[80px]' src={amazon} alt="" />
                <div className="flex flex-col gap-[10px]">
                  <h3 className='text-[30px]' >Amazon</h3>
                  <p>10 ta masala | 10% bajarildi</p>
                  <a className='text-[20px] text-blue-600' href="https://space.marsit.uz/mars-code/questions/4">Kirish</a>
                </div>
              </div>

               <div className="flex items-center gap-[10px]  w-[500px] bg-gray-50 rounded-2xl p-[10px]">
                <img className='w-[80px] h-[80px]' src={google} alt="" />
                <div className="flex flex-col gap-[10px]">
                  <h3 className='text-[30px]' >Google</h3>
                  <p>10 ta masala | 10% bajarildi</p>
                  <a className='text-[20px] text-blue-600' href="https://space.marsit.uz/mars-code/questions/4">Kirish</a>
                </div>
              </div>

               <div className="flex items-center gap-[10px]  w-[500px] bg-gray-50 rounded-2xl p-[10px]">
                <img className='w-[80px] h-[80px]' src={netflix} alt="" />
                <div className="flex flex-col gap-[10px]">
                  <h3 className='text-[30px]' >Netflix</h3>
                  <p>10 ta masala | 10% bajarildi</p>
                  <a className='text-[20px] text-blue-600' href="https://space.marsit.uz/mars-code/questions/4">Kirish</a>
                </div>
              </div>

               <div className="flex items-center gap-[10px]  w-[500px] bg-gray-50 rounded-2xl p-[10px]">
                <img className='w-[80px] h-[80px]' src={facebook} alt="" />
                <div className="flex flex-col gap-[10px]">
                  <h3 className='text-[30px]' >Facebook</h3>
                  <p>10 ta masala | 10% bajarildi</p>
                  <a className='text-[20px] text-blue-600' href="https://space.marsit.uz/mars-code/questions/4">Kirish</a>
                </div>
              </div>

              <div className="flex items-center gap-[10px] w-[500px] bg-gray-50 rounded-2xl p-[10px]">
  <img className='w-[80px] h-[80px]' src={microsoft} alt="Microsoft" />
  <div className="flex flex-col gap-[10px]">
    <h3 className='text-[30px]'>Microsoft</h3>
    <p>10 ta masala | 10% bajarildi</p>
    <a
      className='text-[20px] text-blue-600'
      href="https://space.marsit.uz/mars-code/questions/4"
    >
      Kirish
    </a>
  </div>
</div>

<div className="flex items-center gap-[10px] w-[500px] bg-gray-50 rounded-2xl p-[10px]">
  <img className='w-[80px] h-[80px]' src={apple} alt="Apple" />
  <div className="flex flex-col gap-[10px]">
    <h3 className='text-[30px]'>Apple</h3>
    <p>10 ta masala | 10% bajarildi</p>
    <a
      className='text-[20px] text-blue-600'
      href="https://space.marsit.uz/mars-code/questions/4"
    >
      Kirish
    </a>
  </div>
</div>

            </div>
              
        </div>
    </div>
  )
}

export default HeaderHero