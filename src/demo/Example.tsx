import { useToast } from '../hooks/useToast';
import ToastContainer from '../components/ToastContainer';
import { useToastContext } from '../context/ToastContext';

export const Example = () => {
  const toast = useToast();
  const { removeToast } = useToastContext();

  return (
    <div className="flex flex-col gap-4 p-8 max-w-md mx-auto">
      <button 
        onClick={() => toast.success('Success message!')}
        className="w-full bg-gradient-to-r from-green-400 to-green-500 
          hover:from-green-500 hover:to-green-600 
          text-white font-medium py-3 px-6 rounded-lg
          transform transition-all duration-200 
          hover:scale-[1.02] hover:shadow-lg
          active:scale-[0.98]"
      >
        Show Success Toast
      </button>

      <button 
        onClick={() => toast.error('Error message!')}
        className="w-full bg-gradient-to-r from-red-400 to-red-500 
          hover:from-red-500 hover:to-red-600 
          text-white font-medium py-3 px-6 rounded-lg
          transform transition-all duration-200 
          hover:scale-[1.02] hover:shadow-lg
          active:scale-[0.98]"
      >
        Show Error Toast
      </button>

      <button 
        onClick={() => toast.warning('Warning message!')}
        className="w-full bg-gradient-to-r from-yellow-400 to-yellow-500 
          hover:from-yellow-500 hover:to-yellow-600 
          text-white font-medium py-3 px-6 rounded-lg
          transform transition-all duration-200 
          hover:scale-[1.02] hover:shadow-lg
          active:scale-[0.98]"
      >
        Show Warning Toast
      </button>

      <button 
        onClick={() => toast.info('Info message!')}
        className="w-full bg-gradient-to-r from-blue-400 to-blue-500 
          hover:from-blue-500 hover:to-blue-600 
          text-white font-medium py-3 px-6 rounded-lg
          transform transition-all duration-200 
          hover:scale-[1.02] hover:shadow-lg
          active:scale-[0.98]"
      >
        Show Info Toast
      </button>

      <ToastContainer 
        toasts={toast.toasts} 
        position="top-right" 
        removeToast={removeToast}
      />
    </div>
  );
}; 