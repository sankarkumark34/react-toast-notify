import { createContext, useContext, useReducer, ReactNode, useMemo } from 'react';
import { Toast, ToastOptions } from '../types';
import { nanoid } from 'nanoid';

interface ToastState {
  toasts: Toast[];
}

type ToastAction = 
  | { type: 'ADD_TOAST'; payload: Toast }
  | { type: 'REMOVE_TOAST'; payload: string };

const ToastContext = createContext<{
  state: ToastState;
  addToast: (options: ToastOptions) => void;
  removeToast: (id: string) => void;
} | null>(null);

const toastReducer = (state: ToastState, action: ToastAction): ToastState => {
  switch (action.type) {
    case 'ADD_TOAST':
      return {
        ...state,
        toasts: [...state.toasts, action.payload]
      };
    case 'REMOVE_TOAST':
      return {
        ...state,
        toasts: state.toasts.filter(toast => toast.id !== action.payload)
      };
    default:
      return state;
  }
};

export const ToastProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(toastReducer, { toasts: [] });

  const value = useMemo(() => ({
    state,
    addToast,
    removeToast
  }), [state]);

  const MAX_TOASTS = 5;

  const addToast = (options: ToastOptions) => {
    const toast: Toast = {
      id: nanoid(),
      ...options,
      createdAt: Date.now()
    };

    dispatch({ 
      type: 'ADD_TOAST', 
      payload: toast 
    });

    // Remove oldest toast if limit reached
    if (state.toasts.length >= MAX_TOASTS) {
      removeToast(state.toasts[0].id);
    }

    // Auto remove
    if (options.duration !== Infinity) {
      setTimeout(() => {
        removeToast(toast.id);
      }, options.duration || 3000);
    }
  };

  const removeToast = (id: string) => {
    dispatch({ type: 'REMOVE_TOAST', payload: id });
  };

  return (
    <ToastContext.Provider value={value}>
      {children}
    </ToastContext.Provider>
  );
};

export const useToastContext = () => {
  const context = useContext(ToastContext);
  if (!context) {
    throw new Error('useToastContext must be used within a ToastProvider');
  }
  return context;
}; 