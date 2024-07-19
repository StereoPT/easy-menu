import { postRequest } from '@/utils/axios';
import { toast } from 'react-toastify';

const useAddMailList = () => {
  const addEmailToList = async (email: string) => {
    try {
      await postRequest('/joinMailList', {
        email,
      });

      toast.success('Successfully Subscribed!', {
        position: 'top-right',
      });
    } catch (error) {
      toast.error('Something went Wrong!', {
        position: 'top-right',
      });
    }
  };

  return { addEmailToList };
};

export default useAddMailList;
