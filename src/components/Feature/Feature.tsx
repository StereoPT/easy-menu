import { ReactNode } from 'react';
import { Badge } from 'react-daisyui';

type FeatureProps = {
  title: string;
  children: ReactNode;
};

const Feature = ({ title, children }: FeatureProps) => {
  return (
    <div className="text-center">
      <Badge className="font-bold text-sm" color="primary" size="lg">
        {title}
      </Badge>
      <div className="mt-2 text-sm">{children}</div>
    </div>
  );
};

export default Feature;
