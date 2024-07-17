import { Button, Input } from 'react-daisyui';

const EmailSignup = () => {
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
          <div className="flex flex-col sm:flex-row gap-4">
            <Input
              type="email"
              className="w-80"
              placeholder="Your Email Address"
            />
            <Button color="primary">Subscribe</Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EmailSignup;
