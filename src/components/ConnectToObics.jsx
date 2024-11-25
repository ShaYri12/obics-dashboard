import { BsArrowRightShort } from "react-icons/bs";
import LanguageCard from "./LanguageCard";
import FeatureCard from "./FeatureCard";

export default function ConnectToObics() {
  const features = [
    {
      icon: "/assets/lightning-icon.png",
      title: "Quick Start",
      description: "Get Started with Obics in 5 Minutes",
    },
    {
      icon: "/assets/download-icon.png",
      title: "Install",
      description: "Install guides for every platform",
    },
    {
      icon: "/assets/cloud-icon.png",
      title: "Quick Start",
      description: "The fastest way to get started with Obics",
    },
  ];

  const integrations = [
    { icon: "/assets/terminal-2-icon.png", name: "Obics CLI" },
    { icon: "/assets/terminal-icon.png", name: "Cloud SQL Console" },
    { icon: "/assets/node-js-icon.png", name: "Node Js" },
    { icon: "/assets/java-icon.png", name: "Java" },
    { icon: "/assets/python-icon.png", name: "Python" },
    { icon: "/assets/go-icon.png", name: "Go" },
  ];
  return (
    <div className="px-4 md:px-[40px] py-[30px] md:py-[41px] w-full">
      <div className="max-w-[1082.06px] mx-auto">
        {/* Obics Docs Section */}
        <section className="pb-[30px] md:pb-[39px] flex xl:flex-row flex-col gap-[22px] border-b border-[#EBEBEB]">
          <div className="xl:max-w-[213.4px] py-1">
            <h1 className="text-3xl font-bold mb-[9px]">Obics Docs</h1>
            <p className="text-[#797B80]">
              Learn how to use obics through guides, reference documentation,
              and videos
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-[19px]">
            {features.map((feature, index) => (
              <FeatureCard
                key={index}
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
                onClick={() => console.log(`${feature.title} clicked`)}
              />
            ))}
          </div>
        </section>

        {/* Connect to Obics Section */}
        <section className="md:pt-[34px] pt-[20px] flex xl:flex-row flex-col gap-[22px] w-full">
          <div className="xl:max-w-[213.4px]  py-1">
            <h2 className="text-[25px] font-[600] font-jost mb-[9px]">
              Connect to Obics
            </h2>
            <p className="text-[#797B80]">
              Connect your application to Obics in just a few minutes
            </p>
          </div>
          <div className="w-full">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-[19px] gap-y-[16px] w-full">
              {integrations.map((integration, index) => (
                <LanguageCard
                  key={index}
                  icon={integration.icon}
                  name={integration.name}
                  onClick={() => console.log(`${integration.name} clicked`)}
                />
              ))}
            </div>

            <button className="mt-[27px] flex group items-center text-black hover:text-gray-800 transition cursor-pointer text-[14px]">
              See all
              <span className="w-[23px] h-[23px] flex items-center justify-center bg-black group-hover:bg-gray-800 rounded-full text-white ml-[9.5px]">
                <BsArrowRightShort size={17} />
              </span>
            </button>
          </div>
        </section>
      </div>
    </div>
  );
}
