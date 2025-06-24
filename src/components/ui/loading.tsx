import React from "react";
import { Loader2 } from "lucide-react";

interface LoadingProps {
  size?: "sm" | "md" | "lg" | "xl";
  variant?: "spinner" | "dots" | "pulse";
  text?: string;
  className?: string;
}

export const Loading: React.FC<LoadingProps> = ({ 
  size = "md", 
  variant = "spinner", 
  text,
  className = "" 
}) => {
  const sizeClasses = {
    sm: "w-4 h-4",
    md: "w-6 h-6", 
    lg: "w-8 h-8",
    xl: "w-12 h-12"
  };

  const renderSpinner = () => (
    <Loader2 className={`${sizeClasses[size]} animate-spin text-[#FC1924]`} />
  );

  const renderDots = () => (
    <div className="flex space-x-1">
      <div className={`${sizeClasses[size]} bg-[#FC1924] rounded-full animate-bounce`} style={{ animationDelay: '0ms' }}></div>
      <div className={`${sizeClasses[size]} bg-[#FC1924] rounded-full animate-bounce`} style={{ animationDelay: '150ms' }}></div>
      <div className={`${sizeClasses[size]} bg-[#FC1924] rounded-full animate-bounce`} style={{ animationDelay: '300ms' }}></div>
    </div>
  );

  const renderPulse = () => (
    <div className={`${sizeClasses[size]} bg-[#FC1924] rounded-full animate-pulse`}></div>
  );

  const renderVariant = () => {
    switch (variant) {
      case "dots":
        return renderDots();
      case "pulse":
        return renderPulse();
      default:
        return renderSpinner();
    }
  };

  return (
    <div className={`flex flex-col items-center justify-center space-y-2 ${className}`}>
      {renderVariant()}
      {text && (
        <p className="text-gray-400 text-sm font-medium">{text}</p>
      )}
    </div>
  );
};

// Full screen loading component
export const FullScreenLoading: React.FC<{ text?: string }> = ({ text = "Loading..." }) => (
  <div className="min-h-screen bg-[#1a1a1a] flex items-center justify-center">
    <Loading size="xl" text={text} />
  </div>
);

// Inline loading component
export const InlineLoading: React.FC<{ text?: string }> = ({ text }) => (
  <Loading size="sm" text={text} />
);

// Button loading component
export const ButtonLoading: React.FC = () => (
  <div className="flex items-center space-x-2">
    <Loading size="sm" />
    <span>Loading...</span>
  </div>
); 