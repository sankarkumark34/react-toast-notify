import { memo, useState, useEffect } from 'react';
import { ToastProps } from '../types';
import { toastTheme } from '../utils/theme';
import { motion } from 'framer-motion'; 

const Toast = memo(({ message, type = 'info', onClose }: ToastProps) => {
  const theme = toastTheme[type];
  const [isLoading, setIsLoading] = useState(true);

  return (
    <motion.div
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -50 }}
      className={`
        ${theme.background}
        relative overflow-hidden
        transform transition-all duration-300 ease-out
        flex items-center gap-3 px-4 py-3
        rounded-md shadow-md
        text-gray-700 min-w-[300px] max-w-[400px]
        hover:shadow-lg ${theme.hover}
      `}
    >
      {/* Loading animation */}
      {isLoading && (
        <div className="absolute bottom-0 left-0 w-full h-1 overflow-hidden">
          <motion.div
            initial={{ x: "-100%" }}
            animate={{ x: "100%" }}
            transition={{ 
              duration: 3,
              ease: "easeInOut",
              repeat: 0
            }}
            className={`
              absolute inset-0 
              ${theme.loadingBar}
              animate-shimmer-slow
            `}
          />
        </div>
      )}

      {/* Icon */}
      <span className="text-xl flex-shrink-0" role="img" aria-label={type}>
        {theme.icon}
      </span>

      {/* Message only - removed title */}
      <p className="text-sm leading-relaxed text-gray-600 font-medium flex-1">
        {message}
      </p>

      {/* Close button */}
      <button 
        onClick={onClose}
        className="ml-auto text-gray-500 hover:text-gray-700 transition-colors flex-shrink-0"
        aria-label="Close notification"
      >
        <svg 
          className="w-4 h-4" 
          viewBox="0 0 20 20" 
          fill="currentColor"
        >
          <path 
            fillRule="evenodd" 
            d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" 
            clipRule="evenodd" 
          />
        </svg>
      </button>
    </motion.div>
  );
});

export default Toast;
