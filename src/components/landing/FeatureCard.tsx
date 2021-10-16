interface FeatureCardProps {
  icon: JSX.Element;
  title: string;
  description: string;
}

export default function FeatureCard({
  icon,
  title,
  description,
}: FeatureCardProps): JSX.Element {
  return (
    <div className="pt-6">
      <div className="flow-root w-96 bg-white rounded-lg px-6 pb-8">
        <div className="-mt-6">
          <div className="w-full flex flex-row">
            <div className="mx-auto">
              <span className="inline-flex items-center justify-center p-3 bg-indigo-500 rounded-md shadow-lg">
                {icon}
              </span>
            </div>
          </div>
          <h3 className="mt-8 text-xl font-medium text-gray-800 tracking-tight text-center">
            {title}
          </h3>
          <p className="mt-5 text-base text-gray-500 text-center">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
}
