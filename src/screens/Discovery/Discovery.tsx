import React from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, Globe } from "lucide-react";

export const Discovery = (): JSX.Element => {
  const navigate = useNavigate();

  // Sidebar Component
  const Sidebar = () => (
    <div className="fixed left-0 top-0 h-full w-20 bg-white flex flex-col items-center py-6 space-y-8 z-10 shadow-lg">
      <div 
        className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center transform hover:scale-110 transition-all duration-300 cursor-pointer"
        onClick={() => navigate('/home')}
      >
        <div className="w-8 h-8 bg-white rounded-lg"></div>
      </div>

      <div className="flex flex-col space-y-6">
        <div 
          className="relative group cursor-pointer"
          onClick={() => navigate('/messages')}
        >
          <div className="w-12 h-12 bg-gray-100 hover:bg-pink-100 rounded-xl flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-lg">
            <div className="w-6 h-6 text-gray-600 group-hover:text-pink-600">💬</div>
          </div>
          <div className="absolute -top-1 -right-1 w-5 h-5 bg-[#FC1924] rounded-full flex items-center justify-center animate-pulse">
            <span className="text-xs text-white font-bold">2</span>
          </div>
        </div>

        <div 
          className="group cursor-pointer"
          onClick={() => navigate('/games')}
        >
          <div className="w-12 h-12 bg-gray-100 hover:bg-purple-100 rounded-xl flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-lg">
            <div className="w-6 h-6 text-gray-600 group-hover:text-purple-600">🎮</div>
          </div>
        </div>

        <div className="group cursor-pointer">
          <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-lg">
            <div className="w-6 h-6 text-blue-600">🌐</div>
          </div>
        </div>

        <div 
          className="group cursor-pointer"
          onClick={() => navigate('/profile')}
        >
          <div className="w-12 h-12 bg-gray-100 hover:bg-orange-100 rounded-xl flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-lg">
            <div className="w-6 h-6 text-gray-600 group-hover:text-orange-600">👤</div>
          </div>
        </div>

        <div 
          className="group cursor-pointer"
          onClick={() => navigate('/support')}
        >
          <div className="w-12 h-12 bg-gray-100 hover:bg-yellow-100 rounded-xl flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-lg">
            <div className="w-6 h-6 text-gray-600 group-hover:text-yellow-600">❓</div>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-[#1a1a1a] flex relative overflow-hidden font-['Space_Grotesk']">
      <Sidebar />

      {/* Main Content */}
      <div className="flex-1 ml-20 flex items-center justify-center">
        <div className="text-center animate-fade-in">
          {/* Back Button */}
          <button 
            onClick={() => navigate('/home')}
            className="absolute top-8 left-28 flex items-center space-x-2 text-white/80 hover:text-white transition-colors duration-200"
          >
            <ArrowLeft className="w-5 h-5" />
            <span>Back to Home</span>
          </button>

          {/* Coming Soon Content */}
          <div className="animate-bounce">
            <div className="w-32 h-32 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-8 shadow-2xl">
              <Globe className="w-16 h-16 text-white" />
            </div>
          </div>
          
          <h1 className="text-6xl font-bold text-white mb-4 animate-pulse">
            Discovery
          </h1>
          
          <div className="text-2xl text-blue-400 font-semibold mb-8 animate-fade-in-delay">
            Coming Soon
          </div>
          
          <p className="text-xl text-gray-400 max-w-md mx-auto leading-relaxed animate-slide-up">
            Explore new communities, discover trending vibes, and connect with like-minded people around the world. The ultimate discovery experience is on its way!
          </p>
          
          <div className="mt-12 flex justify-center space-x-4">
            <div className="w-3 h-3 bg-blue-500 rounded-full animate-bounce"></div>
            <div className="w-3 h-3 bg-cyan-500 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
            <div className="w-3 h-3 bg-blue-500 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
          </div>
        </div>
      </div>
    </div>
  );
};