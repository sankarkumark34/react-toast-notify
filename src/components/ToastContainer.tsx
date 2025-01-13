import { memo } from 'react';
import { createPortal } from 'react-dom';
import Toast from './Toast';
import { ToastContainerProps, Position } from '../types';

const positionStyles: Record<Position, string> = {
  'top-right': 'top-4 right-4',
  'top-left': 'top-4 left-4',
  'bottom-right': 'bottom-4 right-4',
  'bottom-left': 'bottom-4 left-4',
  'top-center': 'top-4 left-1/2 -translate-x-1/2',
  'bottom-center': 'bottom-4 left-1/2 -translate-x-1/2'
};

const ToastContainer = memo(({ toasts, position = 'top-right' }: ToastContainerProps) => {
  return createPortal(
    <div 
      className={`
        fixed z-50 
        flex flex-col gap-2
        ${positionStyles[position]}
      `}
    >
      {toasts.map((toast) => (
        <Toast key={toast.id} {...toast} />
      ))}
    </div>,
    document.body
  );
});

export default ToastContainer;
