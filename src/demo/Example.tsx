import { useToast } from '../hooks/useToast';
import ToastContainer from '../components/ToastContainer';

export const Example = () => {
  const toast = useToast();

  return (
    <div className="flex flex-col gap-4 p-8">
      <button 
        onClick={() => toast.success('Success message!')}
        className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
      >
        Show Success Toast
      </button>
      <button 
        onClick={() => toast.error('Error message!')}
        className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
      >
        Show Error Toast
      </button>
      <button 
        onClick={() => toast.warning('Warning message!')}
        className="px-4 py-2 bg-yellow-500 text-white rounded hover:bg-yellow-600"
      >
        Show Warning Toast
      </button>
      <button 
        onClick={() => toast.info('Info message!')}
        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
      >
        Show Info Toast
      </button>
      <ToastContainer toasts={toast.toasts} position="top-right" />
    </div>
  );
}; 