import React, { useState } from "react";
import { Button } from "../../components/ui/button";
import { Card, CardContent } from "../../components/ui/card";
import { Checkbox } from "../../components/ui/checkbox";
import { Input } from "../../components/ui/input";
import { Separator } from "../../components/ui/separator";

export const SignUp = (): JSX.Element => {
  const [isSignIn, setIsSignIn] = useState(false);

  const handleSignInClick = () => {
    // Navigate to home page
    window.location.href = '/home';
  };

  const handleSignUpSubmit = () => {
    // Navigate to home page after signup
    window.location.href = '/home';
  };

  return (
    <div className="bg-[#111111] flex flex-row justify-center w-full h-screen overflow-hidden">
      <div className="bg-[#111111] w-full h-full relative flex">
        {/* Left Side - Form */}
        <div className="flex-1 flex items-center justify-center p-8">
          <Card className="bg-transparent border-none shadow-none">
            <CardContent className="p-0 w-[404px]">
              <div className="mb-14">
                <h1 className="[font-family:'Space_Grotesk',Helvetica] font-medium text-white text-[32px]">
                  Get Started Now
                </h1>
              </div>

              <div className="flex flex-col space-y-5">
                <div className="flex flex-col space-y-2">
                  <label className="[font-family:'Space_Grotesk',Helvetica] font-medium text-white text-sm">
                    Name
                  </label>
                  <Input
                    className="h-12 bg-[#181818] border-[#d9d9d9] rounded-[5px] text-[#d9d9d9] [font-family:'Poppins',Helvetica] text-sm font-medium px-4 py-3"
                    placeholder="Enter your name"
                  />
                </div>

                <div className="flex flex-col space-y-2">
                  <label className="[font-family:'Space_Grotesk',Helvetica] font-medium text-white text-sm">
                    Email address
                  </label>
                  <Input
                    className="h-12 bg-[#181818] border-[#d9d9d9] rounded-[5px] text-[#d9d9d9] [font-family:'Poppins',Helvetica] text-sm font-medium px-4 py-3"
                    placeholder="Enter your email"
                  />
                </div>

                <div className="flex flex-col space-y-2">
                  <label className="[font-family:'Space_Grotesk',Helvetica] font-medium text-white text-sm">
                    Password
                  </label>
                  <Input
                    type="password"
                    className="h-12 bg-[#181818] border-[#d9d9d9] rounded-[5px] text-[#d9d9d9] [font-family:'Poppins',Helvetica] text-sm font-medium px-4 py-3"
                    placeholder="Enter your password"
                  />
                </div>

                <div className="flex items-center space-x-2 mt-4">
                  <Checkbox
                    id="terms"
                    className="w-4 h-4 rounded-sm border-white"
                  />
                  <label
                    htmlFor="terms"
                    className="[font-family:'Space_Grotesk',Helvetica] font-medium text-white text-sm"
                  >
                    I agree to the{" "}
                    <span className="underline">terms & policy</span>
                  </label>
                </div>

                <Button 
                  onClick={handleSignUpSubmit}
                  className="w-full h-12 mt-6 bg-[#fc1924] hover:bg-[#e01620] rounded-[5px] [font-family:'Poppins',Helvetica] font-bold text-white text-sm"
                >
                  Signup
                </Button>

                <div className="relative flex items-center py-5">
                  <Separator className="w-full bg-white/20" />
                  <div className="absolute left-1/2 transform -translate-x-1/2 px-2 bg-[#111111] [font-family:'Poppins',Helvetica] font-medium text-white text-sm">
                    Or
                  </div>
                </div>

                <div className="flex gap-4">
                  <Button
                    variant="outline"
                    className="flex-1 h-12 gap-2.5 px-5 py-3 rounded-[10px] border-[#d9d9d9] [font-family:'Poppins',Helvetica] font-medium text-white text-xs bg-transparent hover:bg-[#2a2a2a]"
                  >
                    <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center">
                      <span className="text-xs">G</span>
                    </div>
                    Sign in with Google
                  </Button>

                  <Button
                    variant="outline"
                    className="flex-1 h-12 gap-2.5 px-5 py-3 rounded-[10px] border-[#d9d9d9] [font-family:'Poppins',Helvetica] font-medium text-white text-xs bg-transparent hover:bg-[#2a2a2a]"
                  >
                    <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center">
                      <span className="text-xs">🍎</span>
                    </div>
                    Sign in with Apple
                  </Button>
                </div>

                <div className="flex justify-center mt-6 [font-family:'Poppins',Helvetica] font-medium text-sm">
                  <span className="text-white">
                    Have an account?&nbsp;&nbsp;
                  </span>
                  <button 
                    onClick={handleSignInClick}
                    className="text-[#0f3cde] hover:underline cursor-pointer"
                  >
                    Sign In
                  </button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Right Side - Image */}
        <div className="flex-1 relative overflow-hidden">
          <div 
            className="w-full h-full bg-cover bg-center"
            style={{ 
              backgroundImage: `url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAwIiBoZWlnaHQ9IjgwMCIgdmlld0JveD0iMCAwIDYwMCA4MDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSI2MDAiIGhlaWdodD0iODAwIiBmaWxsPSIjRkMxOTI0Ii8+CjxjaXJjbGUgY3g9IjE1MCIgY3k9IjIwMCIgcj0iNDAiIGZpbGw9IiMyMzIzNDUiLz4KPGNpcmNsZSBjeD0iNDUwIiBjeT0iMzAwIiByPSI1MCIgZmlsbD0iIzIzMjM0NSIvPgo8Y2lyY2xlIGN4PSIzMDAiIGN5PSI1MDAiIHI9IjYwIiBmaWxsPSIjMjMyMzQ1Ii8+CjxjaXJjbGUgY3g9IjEwMCIgY3k9IjYwMCIgcj0iMzUiIGZpbGw9IiMyMzIzNDUiLz4KPGNpcmNsZSBjeD0iNTAwIiBjeT0iNjUwIiByPSI0NSIgZmlsbD0iIzIzMjM0NSIvPgo8cG9seWdvbiBwb2ludHM9IjIwMCwxMDAgMjUwLDUwIDMwMCwxMDAgMjUwLDE1MCIgZmlsbD0iIzIzMjM0NSIvPgo8cG9seWdvbiBwb2ludHM9IjQwMCw0MDAgNDUwLDM1MCA1MDAsNDAwIDQ1MCw0NTAiIGZpbGw9IiMyMzIzNDUiLz4KPHBvbHlnb24gcG9pbnRzPSIxMDAsNDAwIDE1MCwzNTAgMjAwLDQwMCAxNTAsNDUwIiBmaWxsPSIjMjMyMzQ1Ii8+Cjwvc3ZnPgo=)` 
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-[#FC1924]/90 to-[#FC1924]/70"></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center text-white animate-fade-in">
                <div className="text-8xl mb-6 animate-bounce">🎉</div>
                <h2 className="text-4xl font-bold mb-4">Join the Vibe</h2>
                <p className="text-xl opacity-90 max-w-md">Connect with amazing people and discover incredible events in your community</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};