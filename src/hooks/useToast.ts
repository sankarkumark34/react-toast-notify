import { useToastContext } from '../context/ToastContext';
import { ToastOptions } from '../types';

export const useToast = () => {
  const { state, addToast } = useToastContext();

  return {
    toasts: state.toasts,
    show: (options: ToastOptions) => addToast(options),
    success: (message: string, options?: Partial<ToastOptions>) => 
      addToast({ message, type: 'success', ...options }),
    error: (message: string, options?: Partial<ToastOptions>) => 
      addToast({ message, type: 'error', ...options }),
    warning: (message: string, options?: Partial<ToastOptions>) => 
      addToast({ message, type: 'warning', ...options }),
    info: (message: string, options?: Partial<ToastOptions>) => 
      addToast({ message, type: 'info', ...options })
  };
}; 