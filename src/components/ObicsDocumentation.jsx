import { FiSearch } from "react-icons/fi";
import SearchInput from "./SearchInput";
import StepCard from "./StepCard";

export default function ObicsDocumentation() {
  const stepsData = [
    {
      stepNumber: 1,
      title: "Sign up",
      description: "Create a honeycomb account",
      link: "#",
    },
    {
      stepNumber: 2,
      title: "Send data",
      description: "Instrument your application and send us data",
      link: "#",
    },
    {
      stepNumber: 3,
      title: "Analyze data",
      description: "Start investigating your production systems",
      link: "#",
    },
  ];

  return (
    <section className="flex-1 max-w-[853.55px] mx-auto md:px-8 px-4 py-[30px] md:py-[104px]">
      <h1 className="text-[30px] md:text-[40px] md:leading-[48px] leading-[34px] font-jost font-[600] mb-[23px] text-center">
        Obics Documentation
      </h1>

      {/* Search Bar */}
      <SearchInput placeholder="Search" extraClass="max-w-[649.38px] mx-auto" />

      <div className="grid grid-cols-1 md:grid-cols-3 md:gap-[22px] gap-[50px] mt-[75px] ">
        {stepsData.map((step, index) => (
          <StepCard
            key={index}
            stepNumber={step.stepNumber}
            title={step.title}
            description={step.description}
            link={step.link}
          />
        ))}
      </div>
    </section>
  );
}
