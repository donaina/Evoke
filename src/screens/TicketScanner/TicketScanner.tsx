import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, Camera, Flashlight } from "lucide-react";

export const TicketScanner = (): JSX.Element => {
  const navigate = useNavigate();
  const [isScanning, setIsScanning] = useState(false);
  const [flashOn, setFlashOn] = useState(false);

  const handleBackToProfile = () => {
    navigate('/profile');
  };

  const handleScan = () => {
    setIsScanning(true);
    // Simulate scanning process
    setTimeout(() => {
      setIsScanning(false);
      // Handle successful scan
      alert("Ticket scanned successfully!");
    }, 2000);
  };

  const toggleFlash = () => {
    setFlashOn(!flashOn);
  };

  return (
    <div className="min-h-screen bg-[#1a1a1a] flex flex-col relative overflow-hidden font-['Space_Grotesk']">
      {/* Header */}
      <div className="flex items-center justify-between p-6">
        <button 
          onClick={handleBackToProfile}
          className="flex items-center space-x-2 text-white/80 hover:text-white transition-colors duration-200"
        >
          <ArrowLeft className="w-6 h-6" />
        </button>
        
        <button 
          onClick={toggleFlash}
          className={`w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 ${
            flashOn ? 'bg-yellow-500 text-black' : 'bg-[#2a2a2a] text-white hover:bg-[#3a3a3a]'
          }`}
        >
          <Flashlight className="w-6 h-6" />
        </button>
      </div>

      {/* Scanner Area */}
      <div className="flex-1 flex items-center justify-center p-8">
        <div className="max-w-md w-full">
          {/* QR Code Scanner Frame */}
          <div className="relative bg-white rounded-2xl p-8 shadow-2xl animate-fade-in">
            <div className="aspect-square bg-gray-100 rounded-xl flex items-center justify-center relative overflow-hidden">
              {/* QR Code Pattern */}
              <div className="w-full h-full relative">
                <svg 
                  viewBox="0 0 200 200" 
                  className="w-full h-full"
                  style={{ filter: flashOn ? 'brightness(1.5)' : 'none' }}
                >
                  <rect width="200" height="200" fill="white"/>
                  
                  {/* Top-left corner */}
                  <rect x="20" y="20" width="60" height="60" fill="black"/>
                  <rect x="30" y="30" width="40" height="40" fill="white"/>
                  <rect x="40" y="40" width="20" height="20" fill="black"/>
                  
                  {/* Top-right corner */}
                  <rect x="120" y="20" width="60" height="60" fill="black"/>
                  <rect x="130" y="30" width="40" height="40" fill="white"/>
                  <rect x="140" y="40" width="20" height="20" fill="black"/>
                  
                  {/* Bottom-left corner */}
                  <rect x="20" y="120" width="60" height="60" fill="black"/>
                  <rect x="30" y="130" width="40" height="40" fill="white"/>
                  <rect x="40" y="140" width="20" height="20" fill="black"/>
                  
                  {/* Data pattern */}
                  <rect x="100" y="20" width="10" height="10" fill="black"/>
                  <rect x="90" y="30" width="10" height="10" fill="black"/>
                  <rect x="110" y="40" width="10" height="10" fill="black"/>
                  <rect x="100" y="50" width="10" height="10" fill="black"/>
                  <rect x="90" y="60" width="10" height="10" fill="black"/>
                  
                  <rect x="20" y="90" width="10" height="10" fill="black"/>
                  <rect x="40" y="90" width="10" height="10" fill="black"/>
                  <rect x="60" y="90" width="10" height="10" fill="black"/>
                  <rect x="80" y="90" width="10" height="10" fill="black"/>
                  <rect x="100" y="90" width="10" height="10" fill="black"/>
                  <rect x="120" y="90" width="10" height="10" fill="black"/>
                  <rect x="140" y="90" width="10" height="10" fill="black"/>
                  <rect x="160" y="90" width="10" height="10" fill="black"/>
                  <rect x="180" y="90" width="10" height="10" fill="black"/>
                  
                  <rect x="90" y="100" width="10" height="10" fill="black"/>
                  <rect x="110" y="100" width="10" height="10" fill="black"/>
                  <rect x="130" y="100" width="10" height="10" fill="black"/>
                  <rect x="150" y="100" width="10" height="10" fill="black"/>
                  <rect x="170" y="100" width="10" height="10" fill="black"/>
                  
                  <rect x="90" y="110" width="10" height="10" fill="black"/>
                  <rect x="100" y="120" width="10" height="10" fill="black"/>
                  <rect x="120" y="120" width="10" height="10" fill="black"/>
                  <rect x="140" y="120" width="10" height="10" fill="black"/>
                  <rect x="160" y="120" width="10" height="10" fill="black"/>
                  <rect x="180" y="120" width="10" height="10" fill="black"/>
                  
                  <rect x="90" y="130" width="10" height="10" fill="black"/>
                  <rect x="110" y="130" width="10" height="10" fill="black"/>
                  <rect x="130" y="130" width="10" height="10" fill="black"/>
                  <rect x="150" y="130" width="10" height="10" fill="black"/>
                  <rect x="170" y="130" width="10" height="10" fill="black"/>
                  
                  <rect x="100" y="140" width="10" height="10" fill="black"/>
                  <rect x="120" y="140" width="10" height="10" fill="black"/>
                  <rect x="140" y="140" width="10" height="10" fill="black"/>
                  <rect x="160" y="140" width="10" height="10" fill="black"/>
                  <rect x="180" y="140" width="10" height="10" fill="black"/>
                  
                  <rect x="90" y="150" width="10" height="10" fill="black"/>
                  <rect x="110" y="150" width="10" height="10" fill="black"/>
                  <rect x="130" y="150" width="10" height="10" fill="black"/>
                  <rect x="150" y="150" width="10" height="10" fill="black"/>
                  <rect x="170" y="150" width="10" height="10" fill="black"/>
                  
                  <rect x="100" y="160" width="10" height="10" fill="black"/>
                  <rect x="120" y="160" width="10" height="10" fill="black"/>
                  <rect x="140" y="160" width="10" height="10" fill="black"/>
                  <rect x="160" y="160" width="10" height="10" fill="black"/>
                  <rect x="180" y="160" width="10" height="10" fill="black"/>
                  
                  <rect x="90" y="170" width="10" height="10" fill="black"/>
                  <rect x="110" y="170" width="10" height="10" fill="black"/>
                  <rect x="130" y="170" width="10" height="10" fill="black"/>
                  <rect x="150" y="170" width="10" height="10" fill="black"/>
                  <rect x="170" y="170" width="10" height="10" fill="black"/>
                  
                  <rect x="100" y="180" width="10" height="10" fill="black"/>
                  <rect x="120" y="180" width="10" height="10" fill="black"/>
                  <rect x="140" y="180" width="10" height="10" fill="black"/>
                  <rect x="160" y="180" width="10" height="10" fill="black"/>
                  <rect x="180" y="180" width="10" height="10" fill="black"/>
                </svg>
              </div>

              {/* Scanning Animation Overlay */}
              {isScanning && (
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-500/30 to-transparent animate-pulse">
                  <div className="w-full h-1 bg-purple-500 animate-bounce" style={{ marginTop: '50%' }}></div>
                </div>
              )}

              {/* Corner Brackets */}
              <div className="absolute top-4 left-4 w-8 h-8 border-l-4 border-t-4 border-purple-500 rounded-tl-lg"></div>
              <div className="absolute top-4 right-4 w-8 h-8 border-r-4 border-t-4 border-purple-500 rounded-tr-lg"></div>
              <div className="absolute bottom-4 left-4 w-8 h-8 border-l-4 border-b-4 border-purple-500 rounded-bl-lg"></div>
              <div className="absolute bottom-4 right-4 w-8 h-8 border-r-4 border-b-4 border-purple-500 rounded-br-lg"></div>
            </div>
          </div>

          {/* Scan Button */}
          <div className="flex justify-center mt-8">
            <button 
              onClick={handleScan}
              disabled={isScanning}
              className={`px-12 py-4 rounded-xl font-bold text-lg transition-all duration-300 hover:scale-105 ${
                isScanning 
                  ? 'bg-gray-500 text-gray-300 cursor-not-allowed' 
                  : 'bg-[#FC1924] hover:bg-[#e01620] text-white hover:shadow-lg'
              }`}
            >
              {isScanning ? 'Scanning...' : 'Scan'}
            </button>
          </div>

          {/* Instructions */}
          <div className="text-center mt-6">
            <p className="text-gray-400 text-sm">
              Position the QR code within the frame to scan the ticket
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};