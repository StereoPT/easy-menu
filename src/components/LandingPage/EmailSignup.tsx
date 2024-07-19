import { Button, Input } from 'react-daisyui';
import { SubmitHandler, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import { MailListInputs, mailListSchema } from '@/schemas/mailList';

import useAddMailList from '@/hooks/useAddMailList';

const EmailSignup = () => {
  const { addEmailToList } = useAddMailList();
  const { register, handleSubmit, reset } = useForm<MailListInputs>({
    resolver: yupResolver(mailListSchema),
  });

  const onFormSubmit: SubmitHandler<MailListInputs> = ({ email }) => {
    addEmailToList(email);
    reset();
  };

  return (
    <section id="email">
      <div className="px-4 lg:px-6 max-w-[72rem] mx-auto">
        <div className="flex flex-col items-center gap-8">
          <div className="flex flex-col items-center gap-4 text-center">
            <h2 className="text-3xl sm:text-4xl font-bold">
              Stay Updated with Easy Menu
            </h2>
            <p className="text-sm sm:text-base text-gray-400 font-light max-w-sm lg:max-w-lg">
              Join our community for news, insights, and special promotions.
            </p>
          </div>
          <form
            onSubmit={handleSubmit(onFormSubmit)}
            className="flex flex-col sm:flex-row gap-4">
            <Input
              {...register('email')}
              type="email"
              className="w-80"
              placeholder="Your Email Address"
            />
            <Button className="text-white" color="primary">
              Subscribe
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default EmailSignup;
