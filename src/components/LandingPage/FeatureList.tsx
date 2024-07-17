import Feature from '@/components/Feature/Feature';

const FeatureList = () => {
  return (
    <section id="features" className="bg-zinc-50 w-full">
      <div className="py-12 lg:py-20 px-4 lg:px-6 max-w-[72rem] mx-auto">
        <div className="flex flex-col items-center gap-8">
          <div className="flex flex-col items-center gap-4 text-center">
            <h2 className="text-3xl sm:text-4xl font-bold">
              Get to know our features
            </h2>
            <p className="text-sm sm:text-base text-gray-400 font-light max-w-sm lg:max-w-lg">
              Discover the tools that make Easy Menu the ultimate solution for
              professional, customizable pricing lists.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 grid-rows-2 content-center gap-4 lg:gap-6">
            <Feature title="Easy to Use">
              <p>Intuitive interface for </p>
              <p>quick and easy list creation.</p>
            </Feature>
            <Feature title="Simple Design">
              <p>Clean, user-friendly design.</p>
            </Feature>
            <Feature title="Alpha Version">
              <p>Early access with the latest</p>
              <p>features and updates.</p>
            </Feature>
            <Feature title="Multi Categories">
              <p>Categorize items for better organization.</p>
            </Feature>
            <Feature title="Manage Items">
              <p>Easily add, edit, delete </p>
              <p>and organize your items.</p>
            </Feature>
            <Feature title="Export as PDF">
              <p>Generate high-quality PDFs.</p>
              <p>Ready for print or sharing.</p>
            </Feature>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeatureList;
