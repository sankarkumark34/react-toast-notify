export type ToastType = 'success' | 'error' | 'warning' | 'info';
export type Position = 'top-right' | 'top-left' | 'bottom-right' | 'bottom-left' | 'top-center' | 'bottom-center';

export interface ToastOptions {
  message: string;
  type?: ToastType;
  duration?: number;
  position?: Position;
}

export interface Toast extends ToastOptions {
  id: string;
  createdAt: number;
}

export interface ToastProps extends Toast {
  onClose: () => void;
}

export interface ToastContainerProps {
  toasts: Toast[];
  position?: Position;
  removeToast: (id: string) => void;
}
