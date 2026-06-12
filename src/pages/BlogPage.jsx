// =====================================================================
//  BLOG SAHIFASI  (Egasi: MIRLAN)
//  Manzil: "/blog"
//
//  Mirlan: Blog (maqolalar) bo'limini shu fayl ichida yoz.
// =====================================================================
// function BlogPage() {
//   return (
//     <div>
//       <h1 className="text-4xl font-bold">Blog</h1>
    
//     </div>
//   )
// }

// export default BlogPage






import React, { useState } from 'react';
import { Heart, MessageCircle, Send, X, Image as ImageIcon, Crown } from 'lucide-react';

function BlogPage() {
  const [posts, setPosts] = useState([
    {
      id: 1,
      author: 'Sidiqov Odilbek',
      text: 'Bugungi kayfiyatingiz qanday? ☀️',
      image: 'https://lab.marsit.uz/media/blogs_post/6f4654c8-48a6-4429-9b1f-0a023003df2c/post-image.webp',
      comments: 0,
    }
  ]);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [inputText, setInputText] = useState('');
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setSelectedImage(URL.createObjectURL(file));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!inputText && !selectedImage) return;

    const newPost = {
      id: Date.now(),
      author: 'Abubakirov Mirlan',
      text: inputText,
      image: selectedImage || null,
      likes: 0,
      comments: 0,
    };

    setPosts([newPost, ...posts]);
    
    setInputText('');
    setSelectedImage(null);
    setIsModalOpen(false);
  };

  return (
    <div className="min-h-screen bg-slate-100 py-10 px-4 flex flex-col items-center font-sans">
      <h1 className="text-4xl font-bold mb-8">Blog</h1>
      
      <button 
        onClick={() => setIsModalOpen(true)}
        className="mb-8 px-6 py-3 bg-white text-black font-medium rounded-xl shadow-md w-[300px]"
      >
        Yangi post qo'shish
      </button>

      {isModalOpen && (
        <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl shadow-xl w-full max-w-lg overflow-hidden relative animate-in fade-in zoom-in-95 duration-200">
            
            <div className="flex items-center justify-between p-5 border-b border-gray-100">
              <h2 className="text-xl font-semibold text-gray-800 mx-auto translate-x-3">Post qo'shish</h2>
              <button 
                onClick={() => setIsModalOpen(false)}
                className="p-1.5 rounded-full bg-gray-100 text-gray-500 hover:bg-gray-200 transition"
              >
                <X size={18} />
              </button>
            </div>

            <form onSubmit={handleSubmit} className="p-6 space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-purple-500 to-indigo-600 flex items-center justify-center text-white font-bold border-2 border-white shadow-sm">
                  AM
                </div>
                <div>
                  <h4 className="font-semibold text-slate-800 leading-tight">Abubakirov Mirlan</h4>
                  <span className="text-xs text-gray-400">2026-M06-10, 08:07</span>
                </div>
              </div>

              <div className="relative">
                <textarea
                  value={inputText}
                  onChange={(e) => setInputText(e.target.value.slice(0, 256))}
                  placeholder="O'z fikrlaringizni qoldiring"
                  className="w-full min-h-[100px] p-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 resize-none placeholder-gray-400 text-slate-700"
                />
                <span className="absolute bottom-3 right-3 text-xs text-gray-400">
                  {inputText.length}/256
                </span>
              </div>

              <label className="flex items-center justify-center space-x-2 w-full p-3 border border-blue-200 bg-blue-50/30 rounded-xl cursor-pointer hover:bg-blue-50 transition text-slate-600 text-sm font-medium">
                <ImageIcon className="text-orange-500" size={20} />
                <span>Faylni yuklash uchun shu yerni bosing</span>
                <input 
                  type="file" 
                  accept="image/*" 
                  onChange={handleImageChange} 
                  className="hidden" 
                />
              </label>

              {selectedImage && (
                <div className="relative rounded-xl overflow-hidden max-h-48 border border-gray-100">
                  <img src={selectedImage} alt="Preview" className="w-full h-full object-cover" />
                  <button 
                    type="button"
                    onClick={() => setSelectedImage(null)}
                    className="absolute top-2 right-2 p-1 bg-black/60 hover:bg-black/80 text-white rounded-full transition"
                  >
                    <X size={16} />
                  </button>
                </div>
              )}

              <button 
                type="button" 
                className="w-full py-3.5 bg-slate-50 border border-gray-100 rounded-xl flex items-center justify-center space-x-2 font-semibold text-slate-700 hover:bg-slate-100 transition shadow-sm text-base"
              >
                <Crown size={18} className="text-amber-500 fill-amber-500" />
                <span>Premiumga qo'shiling</span>
              </button>

              <div className="flex justify-end pt-2">
                <button
                  type="submit"
                  disabled={!inputText && !selectedImage}
                  className="px-6 py-2 bg-blue-600 text-white rounded-xl font-medium hover:bg-blue-700 transition disabled:opacity-50 disabled:cursor-not-allowed flex items-center space-x-2"
                >
                  <span>Ulashish</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      <div className="w-full max-w-md space-y-6">
        {posts.map((post) => (
          <div key={post.id} className="bg-white rounded-2xl shadow-sm border border-gray-100 p-5 space-y-4">
            
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-full bg-emerald-500 flex items-center justify-center text-white font-bold">
                {post.author.charAt(0)}
              </div>
              <div>
                <h4 className="text-sm font-medium text-gray-700">{post.author}</h4>
              </div>
            </div>

            {post.text && (
              <div className="w-full p-3 bg-white border border-gray-200 rounded-xl text-sm text-gray-700 flex items-center justify-between">
                <span>{post.text}</span>
                <span className="text-amber-500 text-lg">☀️</span>
              </div>
            )}

            {post.image && (
              <div className="rounded-xl overflow-hidden bg-slate-50 border border-gray-100 max-h-[450px]">
                <img 
                  src={post.image} 
                  alt="Post content" 
                  className="w-full h-full object-contain mx-auto"
                />
              </div>
            )}

            <div className="flex items-center space-x-4 text-indigo-900 font-medium text-sm pt-1">
              <button className="flex items-center space-x-1.5 hover:opacity-70 transition">
                <Heart size={20} className="text-indigo-900" />
                <span>{post.likes}</span>
              </button>
              <button className="flex items-center space-x-1.5 hover:opacity-70 transition">
                <MessageCircle size={20} className="text-indigo-900" />
                <span>{post.comments}</span>
              </button>
            </div>

            <div className="relative flex items-center mt-2">
              <input
                type="text"
                placeholder="Comment"
                maxLength={100}
                className="w-full py-2.5 pl-4 pr-24 bg-white border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-1 focus:ring-blue-500 placeholder-gray-400 text-slate-700"
              />
              <div className="absolute right-2 flex items-center space-x-2">
                <span className="text-[11px] text-gray-300 font-mono">0/100</span>
                <button className="p-1.5 bg-orange-100 text-orange-500 rounded-lg hover:bg-orange-200 transition">
                  <Send size={14} className="fill-current" />
                </button>
              </div>
            </div>

          </div>
        ))}
      </div>
    </div>
  );
}

export default BlogPage;