import { postRequest } from '@/utils/axios';

const useAddMailList = () => {
  const addEmailToList = async (email: string) => {
    try {
      await postRequest('/joinMailList', {
        email,
      });

      alert('Nice Job Dood!');
    } catch (error) {
      alert('Something went Wrong Dood!');
    }
  };

  return { addEmailToList };
};

export default useAddMailList;
