import React from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, Calendar, Users, Lock } from "lucide-react";

export const CreateVibe = (): JSX.Element => {
  const navigate = useNavigate();

  const handleBackToHome = () => {
    navigate('/home');
  };

  const handleCreateEvent = () => {
    navigate('/create-event');
  };

  return (
    <div className="min-h-screen bg-[#1a1a1a] flex relative overflow-hidden font-['Space_Grotesk']">
      {/* Sidebar */}
      <div className="fixed left-0 top-0 h-full w-20 bg-white flex flex-col items-center py-6 space-y-8 z-10 shadow-lg">
        <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center transform hover:scale-110 transition-all duration-300 cursor-pointer">
          <div className="w-8 h-8 bg-white rounded-lg"></div>
        </div>

        <div className="flex flex-col space-y-6">
          <div className="relative group cursor-pointer">
            <div className="w-12 h-12 bg-gray-100 hover:bg-pink-100 rounded-xl flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-lg">
              <div className="w-6 h-6 text-gray-600 group-hover:text-pink-600">💬</div>
            </div>
            <div className="absolute -top-1 -right-1 w-5 h-5 bg-[#FC1924] rounded-full flex items-center justify-center animate-pulse">
              <span className="text-xs text-white font-bold">2</span>
            </div>
          </div>

          <div className="group cursor-pointer">
            <div className="w-12 h-12 bg-gray-100 hover:bg-purple-100 rounded-xl flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-lg">
              <div className="w-6 h-6 text-gray-600 group-hover:text-purple-600">🎮</div>
            </div>
          </div>

          <div className="group cursor-pointer">
            <div className="w-12 h-12 bg-gray-100 hover:bg-blue-100 rounded-xl flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-lg">
              <div className="w-6 h-6 text-gray-600 group-hover:text-blue-600">🌐</div>
            </div>
          </div>

          <div className="group cursor-pointer">
            <div className="w-12 h-12 bg-gray-100 hover:bg-orange-100 rounded-xl flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-lg">
              <div className="w-6 h-6 text-gray-600 group-hover:text-orange-600">👤</div>
            </div>
          </div>

          <div className="group cursor-pointer">
            <div className="w-12 h-12 bg-gray-100 hover:bg-yellow-100 rounded-xl flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-lg">
              <div className="w-6 h-6 text-gray-600 group-hover:text-yellow-600">❓</div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 ml-20 p-8 flex items-center justify-center">
        <div className="max-w-4xl w-full animate-fade-in">
          {/* Back Button */}
          <button 
            onClick={handleBackToHome}
            className="flex items-center space-x-2 mb-8 text-white/80 hover:text-white transition-colors duration-200"
          >
            <ArrowLeft className="w-5 h-5" />
            <span>Back to Home</span>
          </button>

          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-5xl font-bold text-white mb-4">Create a Vibe</h1>
            <p className="text-xl text-gray-400">Choose what type of vibe you want to create</p>
          </div>

          {/* Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto">
            {/* Create Event Card */}
            <div 
              onClick={handleCreateEvent}
              className="relative bg-gradient-to-br from-purple-600 to-pink-600 rounded-2xl p-8 cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-2xl group animate-slide-up"
            >
              <div className="relative z-10">
                <div className="flex items-center justify-between mb-6">
                  <Calendar className="w-12 h-12 text-white" />
                  <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                    <Calendar className="w-8 h-8 text-white" />
                  </div>
                </div>
                <h3 className="text-3xl font-bold text-white mb-4">Create an Event</h3>
                <p className="text-white/90 text-lg">
                  Organize parties, concerts, meetups and more. Set up ticketing, manage attendees, and create unforgettable experiences.
                </p>
              </div>
              <div className="absolute inset-0 bg-gradient-to-br from-purple-600/80 to-pink-600/80 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>

            {/* Create Link-Up Card (Disabled) */}
            <div className="relative bg-gradient-to-br from-gray-600 to-gray-700 rounded-2xl p-8 cursor-not-allowed opacity-60 animate-slide-up-delay">
              <div className="relative z-10">
                <div className="flex items-center justify-between mb-6">
                  <Users className="w-12 h-12 text-white" />
                  <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                    <Lock className="w-8 h-8 text-white" />
                  </div>
                </div>
                <h3 className="text-3xl font-bold text-white mb-4">Create a Link-Up</h3>
                <p className="text-white/90 text-lg">
                  Connect with like-minded people for casual hangouts, study sessions, or spontaneous adventures.
                </p>
                <div className="mt-4 inline-flex items-center space-x-2 bg-yellow-500/20 text-yellow-300 px-3 py-1 rounded-full text-sm">
                  <Lock className="w-4 h-4" />
                  <span>Coming Soon</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};