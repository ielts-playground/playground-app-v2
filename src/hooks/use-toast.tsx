import { useCallback } from 'react';
import { toast } from 'react-toastify';

const useToast = () => {
  const notify = useCallback((type: 'success' | 'info' | 'error' | 'warning', message: string) => {
    toast(message, { hideProgressBar: true, autoClose: 2000, type });
  }, []);

  return { notify };
};

export default useToast;
