import { memo } from 'react';
import { ToastProps } from '../types';
import { toastTheme } from '../utils/theme';
import { motion } from 'framer-motion'; 

const Toast = memo(({ message, type = 'info', onClose }: ToastProps) => {
  const theme = toastTheme[type];

  return (
    <motion.div
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -50 }}
      className={`
        ${theme.background}
        transform transition-all duration-300 ease-out
        flex items-center gap-3 px-4 py-3
        rounded-md shadow-md
        text-gray-700 min-w-[300px] max-w-[400px]
        hover:shadow-lg ${theme.hover}
      `}
    >
      <span className="text-lg">{theme.icon}</span>
      <div className="flex flex-col flex-1">
        <h4 className={`font-semibold text-base ${theme.titleGradient}`}>
          {type.charAt(0).toUpperCase() + type.slice(1)}
        </h4>
        <p className="text-sm leading-relaxed text-gray-600 font-normal">
          {message}
        </p>
      </div>
      <button 
        onClick={onClose}
        className="ml-auto text-gray-500 hover:text-gray-700 transition-colors"
      >
        ✕
      </button>
    </motion.div>
  );
});

export default Toast;
