import { ReactNode } from 'react';

type FeatureProps = {
  title: string;
  children: ReactNode;
};

const Feature = ({ title, children }: FeatureProps) => {
  return (
    <div className="cursor-pointer py-5 px-4 rounded border border-transparent bg-zinc-100 transition-all hover:bg-white hover:border-zinc-200 hover:shadow hover:rotate-1">
      <div className="font-semibold">{title}</div>
      <div className="text-gray-500 text-sm font-light">{children}</div>
    </div>
  );
};

export default Feature;
