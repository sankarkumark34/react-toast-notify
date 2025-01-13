import { memo } from 'react';
import { ToastProps } from '../types';

const toastStyles = {
  success: 'bg-green-500',
  error: 'bg-red-500',
  warning: 'bg-yellow-500',
  info: 'bg-blue-500'
} as const;

const Toast = memo(({ message, type = 'info', onClose }: ToastProps) => {
  return (
    <div 
      className={`
        ${toastStyles[type]}
        transform transition-all duration-300 ease-out
        flex items-center justify-between
        px-4 py-3 rounded-lg shadow-lg
        text-white min-w-[300px] max-w-[400px]
        hover:scale-[1.02] hover:shadow-xl
      `}
    >
      <p className="text-sm font-medium">{message}</p>
      <button 
        onClick={onClose}
        className="ml-4 hover:opacity-70 transition-opacity"
      >
        ✕
      </button>
    </div>
  );
});

export default Toast;
