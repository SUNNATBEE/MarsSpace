import React, { useState } from 'react';

function EduversePage() {
  const [video, setVideo] = useState(null);
  const [filter, setFilter] = useState('Все');

  if (video) {
    return (
      <div className="p-6 max-w-[1000px] m-auto">
        <button  onClick={() => setVideo(null)} className="mb-4 bg-blue-500 text-white px-4 py-2 rounded-xl">
       
         ← Назад к курсам
        </button>
        
          
        <div className="relative w-full h-0 pb-[56.25%] bg-black rounded-lg overflow-hidden">
          <iframe  src={video}  className="absolute top-0 left-0 w-full h-full" frameBorder="0"allowFullScreen/>

           </div>
      </div>
    );
  }
         return (
    <div className="p-6">
      <h1 className="text-2xl font-bold">Курсы</h1>
      
      <div className="flex flex-wrap gap-4 mt-4 w-[1000px]">
        <button onClick={() => setFilter('Все')} className="w-[80px] h-[52px] bg-white shadow-md rounded-2xl  hover:bg-blue-500 transform duration-300">Все</button>
        <button onClick={() => setFilter('HTML')} className="w-[80px] h-[52px] bg-white shadow-md rounded-2xl  hover:bg-blue-500 transform duration-300">HTML</button>
        <button onClick={() => setFilter('CSS')} className="w-[80px] h-[52px] bg-white shadow-md rounded-2xl  hover:bg-blue-500 transform duration-300">CSS</button>
        <button onClick={() => setFilter('Python')} className="w-[80px] h-[52px] bg-white shadow-md rounded-2xl  hover:bg-blue-500 transform duration-300">Python</button>
        <button onClick={() => setFilter('Blender')} className="w-[80px] h-[52px] bg-white shadow-md rounded-2xl  hover:bg-blue-500 transform duration-300">Blender</button>
        <button onClick={() => setFilter('C#')} className="w-[80px] h-[52px] bg-white shadow-md rounded-2xl  hover:bg-blue-500 transform duration-300">C#</button>
        <button onClick={() => setFilter('C++')} className="w-[80px] h-[52px] bg-white shadow-md rounded-2xl  hover:bg-blue-500 transform duration-300">C++</button>
        <button onClick={() => setFilter('Unity')} className="w-[80px] h-[52px] bg-white shadow-md rounded-2xl  hover:bg-blue-500 transform duration-300">Unity</button>
      </div>

      <section className="mt-8">
        <div className="flex flex-wrap gap-8 m-auto justify-evenly">
          
          {(filter === 'Все' || filter === 'HTML') && (
            <div onClick={() => setVideo('https://www.youtube.com/embed/yE4Rlp0OeVc')} className="bg-white w-[410px] h-[317px] shadow-md rounded-lg p-4 cursor-pointer">
              <img src="https://lab.marsit.uz/media/onlinecourses/1/html.jpg" alt="HTML" />
              <h3 className="text-lg font-bold mb-2">Курс Александра Ламкова - HTML</h3>
              <p>4.5</p>
            </div>
          )}

          {(filter === 'Все' || filter === 'CSS') && (
            <div onClick={() => setVideo('https://www.youtube.com/embed/yE4Rlp0OeVc')} className="bg-white w-[410px] h-[317px] shadow-md rounded-lg p-4 cursor-pointer">
              <img src="https://lab.marsit.uz/media/onlinecourses/2/css.jpg" alt="CSS" />
              <h3 className="text-lg font-bold mb-2">Курс Александра Ламкова - CSS</h3>
              <p>4.4</p>
            </div>
          )}

          {(filter === 'Все' || filter === 'Python') && (
            <div onClick={() => setVideo('https://www.youtube.com/embed/yE4Rlp0OeVc')} className="bg-white w-[410px] h-[317px] shadow-md rounded-lg p-4 cursor-pointer">
              <img src="https://lab.marsit.uz/media/onlinecourses/3/Python.jpg" alt="Python" />
              <h3 className="text-lg font-bold mb-2">Pythonx</h3>
              <p>5</p>
            </div>
          )}
            
          {(filter === 'Все' || filter === 'Blender') && (
            <div onClick={() => setVideo('https://www.youtube.com/embed/yE4Rlp0OeVc')} className="bg-white w-[410px] h-[317px] shadow-md rounded-lg p-4 cursor-pointer">
              <img src="https://lab.marsit.uz/media/onlinecourses/4/Blender.jpg" alt="Blender" />
              <h3 className="text-lg font-bold mb-2">Blender</h3>
              <p>5</p>
            </div>
          )}x

          {(filter === 'Все' || filter === 'C#') && (
            <div onClick={() => setVideo('https://www.youtube.com/embed/yE4Rlp0OeVc')} className="bg-white w-[410px] h-[317px] shadow-md rounded-lg p-4 cursor-pointer">
              <img src="https://lab.marsit.uz/media/onlinecourses/5/C.jpg" alt="C#" />
              <h3 className="text-lg font-bold mb-2">C#</h3>
              <p>0</p>
            </div>
          )}

          {(filter === 'Все' || filter === 'C++') && (
            <div onClick={() => setVideo('https://www.youtube.com/embed/yE4Rlp0OeVc')} className="bg-white w-[410px] h-[317px] shadow-md rounded-lg p-4 cursor-pointer">
              <img src="https://lab.marsit.uz/media/onlinecourses/6/C.jpg" alt="C++" />
              <h3 className="text-lg font-bold mb-2">Создание игры C++</h3>
              <p>0</p>
            </div>
          )}

          {(filter === 'Все' || filter === 'Unity') && (
            <div onClick={() => setVideo('https://www.youtube.com/embed/yE4Rlp0OeVc')} className="bg-white w-[410px] h-[317px] shadow-md rounded-lg p-4 cursor-pointer">
              <img src="https://lab.marsit.uz/media/onlinecourses/7/Unity.jpg" alt="Unity" />
              <h3 className="text-lg font-bold mb-2">Unity</h3>
              <p>0</p>
            </div>
          )}
               
        </div>
      </section>
    </div>
  );
}

export default EduversePage;   
            
          
       

  