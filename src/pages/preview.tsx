import dynamic from 'next/dynamic';

const MenuPreview = dynamic(
  () => import('@/components/MenuBuilder/MenuPreview/MenuPreview'),
  {
    ssr: false,
  },
);

const Preview = () => {
  return (
    <div>
      <MenuPreview />
    </div>
  );
};

export default Preview;
