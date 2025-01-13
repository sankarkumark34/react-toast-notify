import { memo } from 'react';
import { ToastProps } from '../types';
import { toastTheme } from '../utils/theme';
import { motion, AnimatePresence } from 'framer-motion';

const Toast = memo(({ message, type = 'info', onClose }: ToastProps) => {
  const theme = toastTheme[type];
  
  return (
    <motion.div
      initial={{ opacity: 0, x: 100 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 100 }}
      className={`
        ${theme.background}
        transform transition-all duration-300 ease-out
        flex items-center gap-3 px-4 py-3
        rounded-lg shadow-lg border border-white/10
        text-white min-w-[300px] max-w-[400px]
        hover:scale-[1.02] hover:shadow-xl
      `}
    >
      <span className="text-lg">{theme.icon}</span>
      <p className="text-sm font-medium">{message}</p>
      <button 
        onClick={onClose}
        className="ml-auto opacity-70 hover:opacity-100 transition-opacity"
      >
        ✕
      </button>
    </motion.div>
  );
});

export default Toast;
